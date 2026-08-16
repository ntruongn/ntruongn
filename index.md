---
layout: index
title: Home
---

<!-- Hero Section -->
<section class="hero-wrapper">
    <div class="row align-items-center g-4">
        <div class="col-lg-8">
            <div class="hero-status-pill">
                <span class="pulse-dot"></span>
                <span data-lang="vi">Kỹ sư An toàn thông tin &bull; Nghiên cứu AI/ML &bull; Phát triển phần mềm</span>
                <span data-lang="en">Cybersecurity Engineer &bull; AI/ML Researcher &bull; Software Developer</span>
            </div>
            <h1 class="hero-title">Ngoc-Truong Nguyen</h1>
            <div class="hero-role">
                <i class="bi bi-terminal-fill"></i>
                <span>~/research/ai-security &amp; malware-analysis</span>
            </div>

            <!-- Bio in VI & EN -->
            <p class="hero-bio" data-lang="vi">
                Đam mê nghiên cứu cầu nối giữa <strong>Trí tuệ nhân tạo (AI)</strong> và <strong>An toàn thông tin (Security)</strong>. 
                Tập trung chuyên sâu vào Quyền riêng tư trong Học máy (Membership Inference Attacks), Độ bền vững Đối kháng (Adversarial Robustness), Phân tích mã độc Android và Hệ thống Phát hiện Xâm nhập (IDS/IPS).
            </p>
            <p class="hero-bio" data-lang="en">
                Passionate about bridging the gap between <strong>Artificial Intelligence</strong> and <strong>Information Security</strong>. 
                Focusing on Machine Learning Privacy (Membership Inference Attacks), Adversarial Robustness, Android Malware Analysis, and Intrusion Detection Systems.
            </p>

            <div class="hero-cta-group">
                <a href="/publications/" class="cyber-btn cyber-btn-primary">
                    <i class="bi bi-journal-bookmark-fill"></i>
                    <span data-lang="vi">Công bố khoa học</span>
                    <span data-lang="en">Publications &amp; Preprints</span>
                </a>
                <a href="/aboutme.html" class="cyber-btn cyber-btn-outline">
                    <i class="bi bi-person-lines-fill"></i>
                    <span data-lang="vi">Hồ sơ &amp; CV</span>
                    <span data-lang="en">Profile &amp; CV</span>
                </a>
                <a href="https://github.com/ntruongn" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost">
                    <i class="bi bi-github"></i> GitHub
                </a>
            </div>
        </div>
        <div class="col-lg-4 text-center">
            <div class="hero-avatar-box">
                <img src="https://github.com/ntruongn.png" onerror="this.src='https://ui-avatars.com/api/?name=Truong+Nguyen&background=0f172a&color=38bdf8&size=200'" alt="Ngoc-Truong Nguyen" class="hero-avatar">
            </div>
        </div>
    </div>
</section>

<!-- Interactive Cyber Terminal -->
<section class="mb-5">
    <div class="terminal-window">
        <div class="terminal-header">
            <div class="terminal-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
            </div>
            <div class="terminal-title">ntruongn@security-node: ~</div>
            <div class="text-muted small font-monospace">bash 5.2</div>
        </div>

        <!-- Terminal Tabs -->
        <div class="terminal-tabs">
            <button class="terminal-tab-btn active" data-target="tab-whoami">$ whoami</button>
            <button class="terminal-tab-btn" data-target="tab-research">$ research --focus</button>
            <button class="terminal-tab-btn" data-target="tab-skills">$ skills --top</button>
            <button class="terminal-tab-btn" data-target="tab-contact">$ cat contact.json</button>
        </div>

        <div class="terminal-body">
            <!-- Tab: whoami -->
            <div id="tab-whoami" class="terminal-tab-panel">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">whoami</span></p>
                <div class="ps-3 border-start border-info border-opacity-25" data-lang="vi">
                    <p class="mb-1 text-light"><strong>Họ và tên:</strong> Nguyễn Ngọc Trường (ntruongn)</p>
                    <p class="mb-1 text-light"><strong>Vị trí:</strong> Kỹ sư An toàn thông tin &amp; Nhà nghiên cứu AI</p>
                    <p class="mb-1 text-light"><strong>Đơn vị:</strong> Nhóm Nghiên cứu An toàn thông tin &amp; AI</p>
                    <p class="mb-0 text-secondary"><strong>Mục tiêu:</strong> Xây dựng các hệ thống học máy an toàn, bảo vệ quyền riêng tư và phân tích các vector tấn công đe dọa mới.</p>
                </div>
                <div class="ps-3 border-start border-info border-opacity-25" data-lang="en">
                    <p class="mb-1 text-light"><strong>Name:</strong> Ngoc-Truong Nguyen (ntruongn)</p>
                    <p class="mb-1 text-light"><strong>Title:</strong> Cybersecurity Engineer &amp; AI Researcher</p>
                    <p class="mb-1 text-light"><strong>Affiliation:</strong> Information Security &amp; AI Research Group</p>
                    <p class="mb-0 text-secondary"><strong>Mission:</strong> Building robust, private ML systems and analyzing advanced threat vectors in modern software.</p>
                </div>
            </div>

            <!-- Tab: research -->
            <div id="tab-research" class="terminal-tab-panel d-none">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">research --focus</span></p>
                <div class="ps-3 border-start border-info border-opacity-25" data-lang="vi">
                    <ul class="list-unstyled mb-0 font-monospace">
                        <li class="mb-1 text-light"><span class="text-info">[01]</span> <strong>Bảo mật ML:</strong> Membership Inference Attacks (MIA), Quyền riêng tư Diffusion &amp; LLM Security.</li>
                        <li class="mb-1 text-light"><span class="text-info">[02]</span> <strong>Độ bền vững Đối kháng:</strong> Tấn công Evasion, Poisoning trong Federated Learning, Occlusion Patches.</li>
                        <li class="mb-1 text-light"><span class="text-info">[03]</span> <strong>Phân tích Mã độc:</strong> Dịch ngược Android, Trích xuất đặc trưng tĩnh/động.</li>
                        <li class="mb-0 text-light"><span class="text-info">[04]</span> <strong>An toàn Mạng:</strong> Viết luật Snort/Suricata IDS, Phân tích luồng gói tin mã hóa.</li>
                    </ul>
                </div>
                <div class="ps-3 border-start border-info border-opacity-25" data-lang="en">
                    <ul class="list-unstyled mb-0 font-monospace">
                        <li class="mb-1 text-light"><span class="text-info">[01]</span> <strong>ML Privacy:</strong> Membership Inference Attacks (MIA), Diffusion Privacy &amp; LLM Security.</li>
                        <li class="mb-1 text-light"><span class="text-info">[02]</span> <strong>Adversarial Robustness:</strong> Evasion attacks, Poisoning in Federated Learning, Occlusion-Robust Patches.</li>
                        <li class="mb-1 text-light"><span class="text-info">[03]</span> <strong>Malware Analysis:</strong> Android Reverse Engineering, Dynamic/Static Feature Extraction.</li>
                        <li class="mb-0 text-light"><span class="text-info">[04]</span> <strong>Network Security:</strong> Snort/Suricata IDS Rules, Deep Packet Inspection, Encrypted Traffic Analysis.</li>
                    </ul>
                </div>
            </div>

            <!-- Tab: skills -->
            <div id="tab-skills" class="terminal-tab-panel d-none">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">skills --top</span></p>
                <div class="ps-3 border-start border-info border-opacity-25 font-monospace">
                    <p class="mb-1"><span class="text-success">[Languages]</span> Python, C/C++, Bash, JavaScript, SQL</p>
                    <p class="mb-1"><span class="text-info">[AI/ML]</span> PyTorch, TensorFlow, Scikit-learn, HuggingFace, Diffusion Models</p>
                    <p class="mb-1"><span class="text-warning">[Security Tools]</span> Ghidra, IDA Pro, Wireshark, Snort, Suricata, Burp Suite, Docker</p>
                    <p class="mb-0"><span class="text-danger">[Systems]</span> Linux (Ubuntu/Arch), TEE Virtualization, Reverse Engineering</p>
                </div>
            </div>

            <!-- Tab: contact -->
            <div id="tab-contact" class="terminal-tab-panel d-none">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">cat contact.json</span></p>
                <div class="ps-3 border-start border-info border-opacity-25 font-monospace text-light">
                    <pre class="mb-0 text-info"><code>{
  "email": "2k1.nguyenngoctruong@gmail.com",
  "github": "https://github.com/ntruongn",
  "linkedin": "https://linkedin.com/in/nguyenngoctruong",
  "status": "available_for_research"
}</code></pre>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Research Focus Pillars -->
<section class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="mb-1" data-lang="vi">Lĩnh vực Trọng tâm</h2>
            <h2 class="mb-1" data-lang="en">Core Focus Areas</h2>
            <p class="mb-0 text-secondary" data-lang="vi">Các hướng nghiên cứu và phát triển kỹ thuật chủ đạo.</p>
            <p class="mb-0 text-secondary" data-lang="en">Primary domains of investigation and engineering.</p>
        </div>
        <span class="cyber-badge badge-cyan">Domains</span>
    </div>

    <div class="row g-4">
        <div class="col-md-6 col-lg-3">
            <div class="cyber-card h-100">
                <div class="mb-3 text-info fs-3">
                    <i class="bi bi-shield-lock-fill"></i>
                </div>
                <h3 class="h5 text-light mb-2">ML Privacy &amp; MIA</h3>
                <p class="small text-secondary mb-0" data-lang="vi">Nghiên cứu nguy cơ rò rỉ dữ liệu trong mô hình diffusion và in-context learning của LLM.</p>
                <p class="small text-secondary mb-0" data-lang="en">Investigating membership leakage in diffusion models and in-context LLM learning pipelines.</p>
            </div>
        </div>

        <div class="col-md-6 col-lg-3">
            <div class="cyber-card h-100">
                <div class="mb-3 text-success fs-3">
                    <i class="bi bi-bug-fill"></i>
                </div>
                <h3 class="h5 text-light mb-2">Malware Analysis</h3>
                <p class="small text-secondary mb-0" data-lang="vi">Phân tích tĩnh và động mã độc Android, dịch ngược nhị phân C/C++ và bóc tách hành vi độc hại.</p>
                <p class="small text-secondary mb-0" data-lang="en">Static and dynamic analysis of Android malware, binary dissection, and behavioral feature extraction.</p>
            </div>
        </div>

        <div class="col-md-6 col-lg-3">
            <div class="cyber-card h-100">
                <div class="mb-3 text-warning fs-3">
                    <i class="bi bi-diagram-3-fill"></i>
                </div>
                <h3 class="h5 text-light mb-2">Network IDS / IPS</h3>
                <p class="small text-secondary mb-0" data-lang="vi">Xây dựng bộ luật nhận diện chữ ký và phân loại gói tin tốc độ cao bằng Snort &amp; Suricata.</p>
                <p class="small text-secondary mb-0" data-lang="en">Signature detection and deep learning classification on high-throughput network packet flows.</p>
            </div>
        </div>

        <div class="col-md-6 col-lg-3">
            <div class="cyber-card h-100">
                <div class="mb-3 text-danger fs-3">
                    <i class="bi bi-cpu-fill"></i>
                </div>
                <h3 class="h5 text-light mb-2">Adversarial Robustness</h3>
                <p class="small text-secondary mb-0" data-lang="vi">Cơ chế phòng thủ chống tấn công poisoning trong Federated Learning và gia cố tính bền vững của AI.</p>
                <p class="small text-secondary mb-0" data-lang="en">Defense mechanisms against poisoning attacks in Federated Learning and robust adversarial patch defense.</p>
            </div>
        </div>
    </div>
</section>

<!-- Featured Publications Section -->
<section class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="mb-1" data-lang="vi">Công bố Khoa học Tiêu biểu</h2>
            <h2 class="mb-1" data-lang="en">Featured Publications &amp; Preprints</h2>
            <p class="mb-0 text-secondary" data-lang="vi">Các bài báo khoa học đã xuất bản và bản thảo preprint mới nhất.</p>
            <p class="mb-0 text-secondary" data-lang="en">Recent scientific papers, peer-reviewed articles, and research preprints.</p>
        </div>
        <a href="/publications/" class="cyber-btn cyber-btn-outline btn-sm">
            <span data-lang="vi">Xem tất cả bài báo</span>
            <span data-lang="en">View All Publications</span>
            <i class="bi bi-arrow-right"></i>
        </a>
    </div>

    <div class="row g-3">
        <!-- Paper 1 -->
        <div class="col-lg-6">
            <div class="paper-item-card h-100">
                <div class="paper-meta">
                    <span class="cyber-badge badge-cyan">Journal 2024</span>
                    <span class="cyber-badge badge-green">Published</span>
                </div>
                <h3 class="paper-title">
                    <a href="/publications/">Deep Learning-based Network Intrusion Detection with Privacy-Preserving Representation</a>
                </h3>
                <p class="small text-secondary mb-2 font-monospace"><strong><u>Ngoc-Truong Nguyen</u></strong>, Co-Authors</p>
                <p class="paper-abstract" data-lang="vi">
                    Đề xuất framework học sâu cho bài toán phân loại xâm nhập mạng thời gian thực, đồng thời tích hợp cơ chế bảo vệ quyền riêng tư chống lại các cuộc tấn công suy luận thành viên.
                </p>
                <p class="paper-abstract" data-lang="en">
                    Proposes a deep learning framework for real-time network intrusion classification while guaranteeing privacy protection against membership inference attacks.
                </p>
                <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-secondary border-opacity-25 font-monospace small">
                    <span class="text-muted">Venue: IEEE / Springer</span>
                    <a href="/publications/" class="text-info text-decoration-none">
                        <span data-lang="vi">Chi tiết &amp; BibTeX</span>
                        <span data-lang="en">Details &amp; BibTeX</span> &rarr;
                    </a>
                </div>
            </div>
        </div>

        <!-- Paper 2 -->
        <div class="col-lg-6">
            <div class="paper-item-card h-100">
                <div class="paper-meta">
                    <span class="cyber-badge badge-amber">Preprint / arXiv</span>
                    <span class="cyber-badge badge-violet">Preprint</span>
                </div>
                <h3 class="paper-title">
                    <a href="/publications/">Mitigating Black-Box Membership Leakage in Fine-Tuned Generative Diffusion Models</a>
                </h3>
                <p class="small text-secondary mb-2 font-monospace"><strong><u>Ngoc-Truong Nguyen</u></strong>, Advisor</p>
                <p class="paper-abstract" data-lang="vi">
                    Nghiên cứu điểm yếu bảo mật của các mô hình khuếch tán (Diffusion Models) đã fine-tune trước các cuộc tấn công MIA black-box và đề xuất phương pháp phòng thủ hiệu chỉnh nhiễu.
                </p>
                <p class="paper-abstract" data-lang="en">
                    Investigates membership leakage vulnerabilities in customized fine-tuned diffusion models and proposes an inference-time noise calibration defense.
                </p>
                <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-secondary border-opacity-25 font-monospace small">
                    <span class="text-muted">arXiv 2025</span>
                    <a href="/publications/" class="text-info text-decoration-none">
                        <span data-lang="vi">Chi tiết &amp; BibTeX</span>
                        <span data-lang="en">Details &amp; BibTeX</span> &rarr;
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Latest Tutorials -->
<section>
    <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="h4 mb-0">
            <i class="bi bi-code-slash text-success"></i>
            <span data-lang="vi">Hướng dẫn Kỹ thuật &amp; Phân tích</span>
            <span data-lang="en">Tutorials &amp; Engineering Guides</span>
        </h2>
        <a href="/tutorials/" class="small text-info text-decoration-none">
            <span data-lang="vi">Xem tất cả</span>
            <span data-lang="en">Browse All</span> &rarr;
        </a>
    </div>
    
    <div class="d-flex flex-column gap-3">
        {% assign sorted_tutorials = site.tutorials | sort: 'date' | reverse %}
        {% for p in sorted_tutorials limit: 3 %}
        {% if p.title and p.title != "" %}
        <a href="{{ p.url | relative_url }}" class="cyber-card p-3 d-block text-decoration-none">
            <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="cyber-badge badge-green small">{{ p.category | default: "Guide" }}</span>
                <span class="small font-monospace text-muted">{{ p.date | default: site.time | date: site.ntruongn.date_format }}</span>
            </div>
            <h3 class="h6 text-light mb-1">{{ p.title }}</h3>
            <p class="small text-secondary mb-0">{{ p.description }}</p>
        </a>
        {% endif %}
        {% endfor %}
    </div>
</section>