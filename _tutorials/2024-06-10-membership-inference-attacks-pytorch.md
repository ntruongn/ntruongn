---
layout: post
title: Thực hành tấn công Membership Inference (MIA) trên mô hình Deep Learning với PyTorch
category: AI Security
difficulty: Advanced
read_time: 18 min read
date: 2024-06-10
tags: [PyTorch, Diffusion, Privacy, MIA, AI-Security]
description: Hướng dẫn xây dựng Shadow Models, trích xuất phân phối Loss/Confidence và huấn luyện Attack Classifier để xác định xem một bản ghi dữ liệu có nằm trong tập huấn luyện của mô hình AI hay không.
---

## 1. Giới thiệu về Membership Inference Attack (MIA)

**Membership Inference Attack (Tấn công suy luận thành viên)** là kỹ thuật mà kẻ tấn công (Attacker) cố gắng xác định xem một mẫu dữ liệu cụ thể $x$ có từng được sử dụng để huấn luyện mô hình mục tiêu (Target Model $f_\theta$) hay không.

### Nguyên lý cốt lõi: Hiện tượng Overfitting
Mô hình học sâu thường có xu hướng dự đoán với độ tự tin (Confidence/Probability) cao hơn đáng kể và hàm mất mát (Loss) thấp hơn đối với các mẫu dữ liệu huấn luyện (**Members**) so với các mẫu chưa từng thấy (**Non-members**).

```
Target Model Output: P(y|x) ───> [ Feature Extraction (Loss, Entropy, Conf) ] ───> [ Attack Classifier ] ───> Output: Member / Non-Member
```

---

## 2. Triển khai Black-box Shadow Model Training

Trong mô hình tấn công Black-box chuẩn của Shokri et al., chúng ta tạo các **Shadow Models** để mô phỏng hành vi của Target Model:

```python
import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F

class SimpleCNN(nn.Module):
    def __init__(self, num_classes=10):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 8 * 8, 256)
        self.fc2 = nn.Linear(256, num_classes)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 64 * 8 * 8)
        x = F.relu(self.fc1(x))
        return self.fc2(x)
```

---

## 3. Trích xuất đặc trưng tấn công (Attack Features)

Ta trích xuất 3 chỉ số nhạy cảm nhất từ vector xác suất đầu ra:
1. **Cross-Entropy Loss:** $\mathcal{L}(f_\theta(x), y)$
2. **Prediction Entropy:** $H(P) = -\sum p_i \log p_i$
3. **Top Confidence Margin:** $p_{\text{top1}} - p_{\text{top2}}$

```python
def extract_attack_features(model, dataloader, is_member_label=1, device='cuda'):
    model.eval()
    features = []
    labels = []
    
    with torch.no_grad():
        for inputs, targets in dataloader:
            inputs, targets = inputs.to(device), targets.to(device)
            outputs = model(inputs)
            probs = F.softmax(outputs, dim=1)
            
            # Loss per sample
            loss = F.cross_entropy(outputs, targets, reduction='none')
            # Entropy per sample
            entropy = -(probs * torch.log(probs + 1e-10)).sum(dim=1)
            # Top-1 confidence
            top1_conf, _ = torch.max(probs, dim=1)
            
            # Stack features: [loss, entropy, top1_conf]
            batch_feats = torch.stack([loss, entropy, top1_conf], dim=1)
            features.append(batch_feats.cpu())
            labels.append(torch.full((inputs.size(0),), is_member_label))
            
    return torch.cat(features, dim=0), torch.cat(labels, dim=0)
```

---

## 4. Huấn luyện Attack Classifier

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, roc_auc_score

# Tổng hợp dataset cho Attack Model
# X_train_attack gồm đặc trưng của Member (label 1) và Non-Member (label 0) từ Shadow Models
clf = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
clf.fit(X_train_attack, y_train_attack)

# Đánh giá tấn công trên Target Model thực
y_pred = clf.predict(X_target_eval)
y_prob = clf.predict_proba(X_target_eval)[:, 1]

print(f"[+] MIA Attack Accuracy: {accuracy_score(y_target_eval, y_pred) * 100:.2f}%")
print(f"[+] MIA Attack ROC-AUC:  {roc_auc_score(y_target_eval, y_prob):.4f}")
```

---

## 5. Các giải pháp phòng chống (Mitigations)

1. **Differential Privacy (DP-SGD):** Thêm nhiễu Gaussian có kiểm soát vào gradient trong quá trình huấn luyện bằng thư viện `Opacus`.
2. **L2 Regularization & Dropout:** Giảm thiểu overfitting để khoảng cách loss giữa member và non-member thu hẹp lại.
3. **Temperature Scaling / Output Perturbation:** Làm mịn vector xác suất trước khi trả về cho API client (tương tự framework SIGuard tại NDSS 2025).
