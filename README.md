# Ngoc-Truong Nguyen | Cybersecurity & AI Researcher Portfolio

[![Jekyll](https://img.shields.io/badge/Jekyll-4.4-red.svg?logo=jekyll)](https://jekyllrb.com)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222.svg?logo=github)](https://pages.github.com)
[![Theme](https://img.shields.io/badge/Theme-Dark_Cyberpunk_%26_Light-38bdf8.svg)](https://nguyenngoctruong.id.vn)
[![Language](https://img.shields.io/badge/i18n-VI_%7C_EN-10b981.svg)](https://nguyenngoctruong.id.vn)

Website cá nhân, hồ sơ nghiên cứu và trung tâm tra cứu công bố khoa học của **Nguyễn Ngọc Trường** (`ntruongn`).
Trang web được thiết kế theo phong cách **High-Tech Cyberpunk & Glassmorphism**, hỗ trợ **Dark / Light Theme** và **Song ngữ (Tiếng Việt 🇻🇳 / English 🇬🇧)**.

---

## 🌐 Trực tiếp trên Internet

- **Tên miền chính:** [https://nguyenngoctruong.id.vn](https://nguyenngoctruong.id.vn)
- **GitHub Profile:** [@ntruongn](https://github.com/ntruongn)

---

## ✨ Tính năng Nổi bật

1. **Giao diện Cao cấp (Dark / Light Mode):**
   - Chế độ Cyberpunk tối ưu cho Hacker / AI Researcher và chế độ Light Slate thanh lịch.
   - Nút chuyển đổi 1 chạm với biểu tượng ☀️ / 🌙, lưu trạng thái tự động trong `localStorage`.
2. **Hỗ trợ Song ngữ tức thì (Bilingual i18n VI / EN):**
   - Nút chuyển đổi `🇻🇳 VI` / `🇬🇧 EN` trên Navbar, chuyển toàn bộ trang web ngay lập tức không cần reload.
3. **Trang chủ Tương tác (Interactive Dashboard):**
   - Hero banner với avatar phát sáng, badge trạng thái `🟢 Available for Research`.
   - Terminal CLI widget với các tab lệnh (`$ whoami`, `$ research --focus`, `$ skills --top`, `$ cat contact.json`).
   - Cột trụ nghiên cứu (Focus Pillars) và bài viết mới nhất.
4. **Phân hệ Công bố Khoa học (Publications & Preprints):**
   - Quản lý bài báo đã xuất bản (*Published Papers*) và bản thảo (*Preprints / Working Papers*).
   - Bộ lọc theo danh mục, ô tìm kiếm thời gian thực, nút tải PDF, DOI, GitHub Code và **Copy BibTeX** 1 chạm.
5. **Phân hệ Hướng dẫn Kỹ thuật (Tutorials & Guides):**
   - Các bài viết dịch ngược mã độc, kiểm thử IDS/IPS, tấn công suy luận thành viên (MIA).
   - Phân loại theo độ khó, thời gian đọc và hệ thống thẻ hashtag `#Android`, `#PyTorch`, `#Snort`...
6. **Trang Giới thiệu & CV Chi tiết (`/aboutme.html`):**
   - Tuyên ngôn nghiên cứu, ma trận kỹ năng kỹ thuật 4 nhóm (AI, Security, Dev, DevOps) và dự án tiêu biểu.

---

## ⚡ Hướng dẫn Sử dụng & Khởi chạy ở Local

### 1. Chạy 1-Click tự động (Khuyên dùng)

Chỉ cần mở Terminal tại thư mục dự án và chạy:

```bash
./run.sh
```

Mở trình duyệt truy cập: 👉 **[http://localhost:4000](http://localhost:4000)**  
*(Server tự động nhận diện Podman / Docker hoặc Ruby, hỗ trợ **Live-Reload** khi sửa file)*.

### 2. Build bản Production (Tạo thư mục `_site/`)

```bash
./build.sh
```

---

## 🚀 Hướng dẫn Release & Triển khai lên GitHub Pages

Dự án đã được cấu hình sẵn **GitHub Actions CI/CD** tại `.github/workflows/deploy.yml`:

1. **Đẩy mã nguồn lên repository GitHub của bạn:**
   ```bash
   git add .
   git commit -m "Release: Complete Cyber/AI Researcher Portfolio with Bilingual & Theme support"
   git push origin main
   ```

2. **Kích hoạt GitHub Pages:**
   - Vào **Settings** của repository trên GitHub.
   - Chọn mục **Pages** ở menu bên trái.
   - Tại mục **Build and deployment > Source**, chọn: **`GitHub Actions`**.
   - GitHub Actions sẽ tự động build và deploy website của bạn sau mỗi lần `git push`!

---

## 📁 Cấu trúc Thư mục Dự án

```
WebTRUONGNN/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD tự động deploy lên GitHub Pages
├── _includes/
│   ├── head.html             # Thẻ meta, SEO, fonts và script khởi tạo theme/i18n
│   ├── navbar.html           # Sticky Glass Navbar với nút đổi Theme & Ngôn ngữ
│   └── footer.html           # Footer công nghệ, trạng thái và back-to-top
├── _layouts/
│   ├── index.html            # Layout trang chủ
│   ├── page.html             # Layout trang nội dung với terminal breadcrumb
│   ├── post.html             # Layout bài viết chi tiết
│   └── disclosure.html       # Layout báo cáo bảo mật
├── _tutorials/               # Thư mục chứa các bài viết hướng dẫn Markdown
├── assets/
│   ├── css/styles.css        # Hệ thống CSS Design System (Dark/Light + Glassmorphism)
│   └── js/main.js            # JavaScript xử lý Theme, i18n, Terminal tabs, Search & Copy
├── index.md                  # Trang chủ
├── publications.md           # Trang Công bố khoa học & Preprints
├── tutorials.md              # Trang Hướng dẫn kỹ thuật
├── aboutme.md                # Trang Giới thiệu & CV cá nhân
├── researchs.md              # Trang Lưu trữ nghiên cứu
├── disclosures.md            # Trang Báo cáo lỗ hổng bảo mật
├── 404.md                    # Trang lỗi 404 phong cách hacker
├── _config.yml               # Cấu hình Jekyll & Metadata
├── Gemfile                   # Khai báo dependency Ruby & GitHub Pages
├── CNAME                     # Tên miền tùy chỉnh (nguyenngoctruong.id.vn)
├── run.sh                    # Script 1-click chạy local
└── build.sh                  # Script 1-click build production
```

---

## 📝 Cách Thêm Nội Dung Mới

### 1. Thêm Bài báo / Preprint mới:
Mở tệp `publications.md`, copy một khối thẻ `<div class="paper-item-card pub-item-card" ...>` và điền tiêu đề, tác giả, link PDF, link DOI và BibTeX của bạn.

### 2. Thêm Bài viết Hướng dẫn mới:
Tạo một tệp Markdown mới trong thư mục `_tutorials/YYYY-MM-DD-ten-bai-viet.md` với cấu trúc đầu tệp:
```yaml
---
layout: post
title: Tiêu đề bài viết của bạn
category: AI Security
difficulty: Intermediate
read_time: 10 min read
date: 2026-08-16
tags: [PyTorch, AI-Security, Tutorial]
description: Tóm tắt ngắn gọn nội dung bài viết...
---
```

---

## 📜 Giấy phép & Bản quyền

Thiết kế và phát triển bởi **Ngọc-Trường Nguyễn** &copy; 2026.  
Được cấp phép theo tiêu chuẩn mã nguồn mở.