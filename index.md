---
layout: index
title: Home
---

<!-- Hero Section -->
<section class="hero-wrapper">
    <div class="row align-items-center g-4">
        <div class="col-lg-8">
            <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
                <div class="hero-status-pill mb-0">
                    <span class="pulse-dot"></span>
                    <span data-lang="vi">Sẵn sàng hợp tác nghiên cứu &amp; Dự án học thuật</span>
                    <span data-lang="en">Available for Research Collaboration &amp; Academic Projects</span>
                </div>
                <span class="cyber-badge badge-cyan font-monospace">
                    <i class="bi bi-geo-alt-fill"></i> Vietnam / Global
                </span>
            </div>
            
            <h1 class="hero-title">Ngoc-Truong Nguyen</h1>
            
            <div class="hero-role">
                <i class="bi bi-shield-shaded text-info"></i>
                <span data-lang="vi">Kỹ sư An toàn thông tin &bull; Nhà nghiên cứu AI/ML &bull; Nhà phát triển phần mềm</span>
                <span data-lang="en">Cybersecurity Engineer &bull; AI/ML Researcher &bull; Software Developer</span>
            </div>

            <div class="d-flex align-items-center gap-2 mb-3 text-secondary small font-monospace">
                <i class="bi bi-buildings text-info"></i>
                <span>{{ site.author.affiliation }}</span>
            </div>

            <!-- Bio in VI & EN -->
            <p class="hero-bio" data-lang="vi">
                Đam mê nghiên cứu chuyên sâu tại điểm giao thoa giữa <strong>Trí tuệ nhân tạo (AI)</strong> và <strong>An toàn thông tin (Cybersecurity)</strong>. 
                Trọng tâm nghiên cứu gồm: Bảo vệ quyền riêng tư trong Deep Learning (Membership Inference Attacks), Gia cố độ bền vững đối kháng (Adversarial Robustness), Phân tích mã độc Android Native và Hệ thống phát hiện xâm nhập mạng tốc độ cao (IDS/IPS).
            </p>
            <p class="hero-bio" data-lang="en">
                Passionate about investigating the intersection of <strong>Artificial Intelligence</strong> and <strong>Information Security</strong>. 
                Core research thrusts include Machine Learning Privacy (Membership Inference Attacks), Adversarial ML Robustness, Android Native Malware Dissection, and High-Throughput Network Intrusion Detection (IDS/IPS).
            </p>

            <!-- Call to Actions -->
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
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost">
                    <i class="ai ai-google-scholar"></i> Scholar
                </a>
                <a href="https://github.com/ntruongn" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost">
                    <i class="bi bi-github"></i> GitHub
                </a>
                <a href="mailto:2k1.nguyenngoctruong@gmail.com" class="cyber-btn cyber-btn-ghost">
                    <i class="bi bi-envelope-fill"></i> Email
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
            <div class="terminal-title">ntruongn@security-research-node: ~</div>
            <div class="text-muted small font-monospace">academic-env: pytorch-cuda12</div>
        </div>

        <!-- Terminal Tabs -->
        <div class="terminal-tabs">
            <button class="terminal-tab-btn active" data-target="tab-whoami">$ whoami</button>
            <button class="terminal-tab-btn" data-target="tab-research">$ research --focus</button>
            <button class="terminal-tab-btn" data-target="tab-skills">$ skills --top</button>
            <button class="terminal-tab-btn" data-target="tab-metrics">$ stats --academic</button>
            <button class="terminal-tab-btn" data-target="tab-contact">$ cat contact.json</button>
        </div>

        <div class="terminal-body">
            <!-- Tab: whoami -->
            <div id="tab-whoami" class="terminal-tab-panel">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">whoami --academic</span></p>
                <div class="ps-3 border-start border-info border-opacity-25" data-lang="vi">
                    <p class="mb-1 text-light"><strong>Họ và tên:</strong> Nguyễn Ngọc Trường (ntruongn)</p>
                    <p class="mb-1 text-light"><strong>Vị trí:</strong> Kỹ sư An toàn thông tin &bull; Nhà nghiên cứu Trí tuệ Nhân tạo</p>
                    <p class="mb-1 text-light"><strong>Đơn vị:</strong> Nhóm Nghiên cứu An toàn thông tin &amp; Trí tuệ nhân tạo (IEC Group)</p>
                    <p class="mb-0 text-secondary"><strong>Sứ mệnh:</strong> Nghiên cứu và xây dựng các hệ thống AI đáng tin cậy, bảo vệ tính riêng tư dữ liệu và phân tích các vector đe dọa thế hệ mới.</p>
                </div>
                <div class="ps-3 border-start border-info border-opacity-25" data-lang="en">
                    <p class="mb-1 text-light"><strong>Name:</strong> Ngoc-Truong Nguyen (ntruongn)</p>
                    <p class="mb-1 text-light"><strong>Title:</strong> Cybersecurity Engineer &bull; AI/ML Researcher</p>
                    <p class="mb-1 text-light"><strong>Affiliation:</strong> Information Security &amp; AI Research Group (IEC Group)</p>
                    <p class="mb-0 text-secondary"><strong>Mission:</strong> Developing trustworthy AI systems, safeguarding training privacy, and analyzing emerging cyber threats.</p>
                </div>
            </div>

            <!-- Tab: research -->
            <div id="tab-research" class="terminal-tab-panel d-none">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">research --focus --verbose</span></p>
                <div class="ps-3 border-start border-info border-opacity-25" data-lang="vi">
                    <ul class="list-unstyled mb-0 font-monospace">
                        <li class="mb-1 text-light"><span class="text-info">[01] ML Privacy:</span> Tấn công Membership Inference (MIA) trên mô hình Generative Diffusion &amp; LLMs.</li>
                        <li class="mb-1 text-light"><span class="text-success">[02] Reverse Engineering:</span> Dịch ngược nhị phân Android C/C++ Native và bóc tách Control Flow Graph.</li>
                        <li class="mb-1 text-light"><span class="text-warning">[03] Network Defense:</span> Thiết kế bộ luật Snort/Suricata IDS và mô hình Deep Learning nhận diện luồng mã hóa.</li>
                        <li class="mb-0 text-light"><span class="text-danger">[04] Adversarial Robustness:</span> Phòng thủ tấn công đầu độc (Poisoning) trong Federated Learning.</li>
                    </ul>
                </div>
                <div class="ps-3 border-start border-info border-opacity-25" data-lang="en">
                    <ul class="list-unstyled mb-0 font-monospace">
                        <li class="mb-1 text-light"><span class="text-info">[01] ML Privacy:</span> Membership Inference Attacks (MIA) in Diffusion Models &amp; LLM in-context learning.</li>
                        <li class="mb-1 text-light"><span class="text-success">[02] Reverse Engineering:</span> Native C/C++ Android binary decompilation &amp; control-flow graph abstraction.</li>
                        <li class="mb-1 text-light"><span class="text-warning">[03] Network Defense:</span> Snort/Suricata IDS signature engineering &amp; high-throughput packet flow classifiers.</li>
                        <li class="mb-0 text-light"><span class="text-danger">[04] Adversarial Robustness:</span> Poisoning defense mechanisms in Federated Learning environments.</li>
                    </ul>
                </div>
            </div>

            <!-- Tab: skills -->
            <div id="tab-skills" class="terminal-tab-panel d-none">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">skills --top</span></p>
                <div class="ps-3 border-start border-info border-opacity-25 font-monospace">
                    <p class="mb-1"><span class="text-success">[Languages]</span> Python, C/C++, Bash Shell, JavaScript (ES6+), SQL</p>
                    <p class="mb-1"><span class="text-info">[AI/ML Frameworks]</span> PyTorch, TensorFlow, Scikit-learn, HuggingFace Transformers, Diffusion</p>
                    <p class="mb-1"><span class="text-warning">[Security &amp; RE]</span> Ghidra, IDA Pro, Wireshark, Snort, Suricata, Burp Suite, Androguard</p>
                    <p class="mb-0"><span class="text-danger">[DevOps &amp; Infra]</span> Linux (Ubuntu/Arch), Docker &amp; Podman, Git/GitHub CI, TEE Environments</p>
                </div>
            </div>

            <!-- Tab: metrics -->
            <div id="tab-metrics" class="terminal-tab-panel d-none">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">stats --academic</span></p>
                <div class="ps-3 border-start border-info border-opacity-25 font-monospace text-light">
                    <p class="mb-1"><span class="text-info">[Publications]</span> 4 Published Papers (Elsevier Array, IEEE ICOIN, IEEE RIVF, Springer ICCCI)</p>
                    <p class="mb-1"><span class="text-warning">[Citations]</span> 8+ Citations on Google Scholar (h-index &amp; i10)</p>
                    <p class="mb-1"><span class="text-success">[Open-Source Artifacts]</span> 10+ Repositories on GitHub</p>
                    <p class="mb-0"><span class="text-secondary">[Domains]</span> Android Malware, NIDS Datasets, Quantum ML, IoT Edge AI</p>
                </div>
            </div>

            <!-- Tab: contact -->
            <div id="tab-contact" class="terminal-tab-panel d-none">
                <p class="mb-2"><span class="terminal-prompt">ntruongn@node</span>:<span class="terminal-path">~</span>$ <span class="terminal-cmd">cat contact.json</span></p>
                <div class="ps-3 border-start border-info border-opacity-25 font-monospace text-light">
                    <pre class="mb-0 text-info"><code>{
  "name": "Ngoc-Truong Nguyen",
  "email": "2k1.nguyenngoctruong@gmail.com",
  "github": "https://github.com/ntruongn",
  "scholar": "https://scholar.google.com/citations?user=1dTi3rQAAAAJ&hl=en",
  "affiliation": "Information Security & AI Research Group (IEC Group)",
  "status": "open_for_collaboration"
}</code></pre>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Recent News & Academic Timeline -->
<section class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="h4 text-light mb-0">
            <i class="bi bi-megaphone-fill text-warning me-2"></i>
            <span data-lang="vi">Tin tức &amp; Hoạt động Mới nhất</span>
            <span data-lang="en">Recent News &amp; Updates</span>
        </h2>
        <span class="cyber-badge badge-amber font-monospace">Timeline</span>
    </div>

    <div class="news-timeline">
        <!-- News item 1: Array Elsevier 2025 -->
        <div class="news-item">
            <span class="news-date-badge">2025</span>
            <div class="news-text" data-lang="vi">
                Bài báo <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:d1gkVwhDpl0C" target="_blank" rel="noopener noreferrer">"Beyond VirusTotal: A semantic approach to building reliable and up-to-date android malware datasets from threat reports"</a> được xuất bản trên tạp chí quốc tế <strong>Array (Elsevier)</strong>, Volume 28.
            </div>
            <div class="news-text" data-lang="en">
                Paper <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:d1gkVwhDpl0C" target="_blank" rel="noopener noreferrer">"Beyond VirusTotal: A semantic approach to building reliable and up-to-date android malware datasets from threat reports"</a> published in <strong>Array (Elsevier)</strong>, Vol. 28.
            </div>
        </div>

        <!-- News item 2: Q-Forge RIVF 2025 -->
        <div class="news-item">
            <span class="news-date-badge">2025</span>
            <div class="news-text" data-lang="vi">
                Công bố công trình <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:9yKSN-GCB0IC" target="_blank" rel="noopener noreferrer">"Q-Forge: An Efficient Two-Stage Framework for Noise-Aware Quantum Model Training"</a> tại Hội nghị Quốc tế <strong>IEEE RIVF 2025</strong>.
            </div>
            <div class="news-text" data-lang="en">
                Presented <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:9yKSN-GCB0IC" target="_blank" rel="noopener noreferrer">"Q-Forge: An Efficient Two-Stage Framework for Noise-Aware Quantum Model Training"</a> at <strong>IEEE RIVF 2025</strong>.
            </div>
        </div>

        <!-- News item 3: WleAtNet ICCCI 2025 -->
        <div class="news-item">
            <span class="news-date-badge">2025</span>
            <div class="news-text" data-lang="vi">
                Bài báo <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:u5HHmVD_uO8C" target="_blank" rel="noopener noreferrer">"WleAtNet: A Lightweight Deep Learning Model and Data Framework for Wireless Link Estimation in Resource-Constrained IoT"</a> được xuất bản trong kỷ yếu <strong>Springer LNCS / ICCCI 2025</strong>.
            </div>
            <div class="news-text" data-lang="en">
                Paper <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:u5HHmVD_uO8C" target="_blank" rel="noopener noreferrer">"WleAtNet: A Lightweight Deep Learning Model and Data Framework for Wireless Link Estimation in Resource-Constrained IoT"</a> published in <strong>Springer LNCS / ICCCI 2025</strong>.
            </div>
        </div>

        <!-- News item 4: ICOIN 2023 -->
        <div class="news-item">
            <span class="news-date-badge">2023</span>
            <div class="news-text" data-lang="vi">
                Công bố bài báo <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:u-x6o8ySG0sC" target="_blank" rel="noopener noreferrer">"Towards generating semi-synthetic datasets for network intrusion detection system"</a> tại Hội nghị Quốc tế <strong>IEEE ICOIN 2023</strong> (hiện có 7 lượt trích dẫn).
            </div>
            <div class="news-text" data-lang="en">
                Published <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:u-x6o8ySG0sC" target="_blank" rel="noopener noreferrer">"Towards generating semi-synthetic datasets for network intrusion detection system"</a> at <strong>IEEE ICOIN 2023</strong> (7 citations).
            </div>
        </div>
    </div>
</section>

<!-- Research Focus Pillars -->
<section class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="mb-1" data-lang="vi">Lĩnh vực Nghiên cứu Trọng tâm</h2>
            <h2 class="mb-1" data-lang="en">Core Research Pillars</h2>
            <p class="mb-0 text-secondary" data-lang="vi">Các hướng nghiên cứu học thuật và phát triển kỹ thuật chủ đạo.</p>
            <p class="mb-0 text-secondary" data-lang="en">Primary scientific thrusts and engineering domains.</p>
        </div>
        <span class="cyber-badge badge-cyan font-monospace">4 Thrusts</span>
    </div>

    <div class="row g-4">
        <!-- Pillar 1 -->
        <div class="col-md-6 col-lg-3">
            <div class="cyber-card h-100">
                <div class="mb-3 text-success fs-3">
                    <i class="bi bi-bug-fill"></i>
                </div>
                <h3 class="h5 text-light mb-2">Malware &amp; CTI Semantics</h3>
                <p class="small text-secondary mb-3" data-lang="vi">Khai phá ngữ nghĩa từ báo cáo tình báo an ninh mạng (CTI), dịch ngược nhị phân Android Native C/C++ và xây dựng tập dữ liệu mã độc chất lượng cao.</p>
                <p class="small text-secondary mb-3" data-lang="en">Semantic mining from Cyber Threat Intelligence (CTI), Android native binary reverse engineering, and robust malware dataset curation.</p>
                <div class="d-flex flex-wrap gap-1 font-monospace small">
                    <span class="badge bg-dark text-success border border-secondary border-opacity-25">Array Elsevier</span>
                    <span class="badge bg-dark text-success border border-secondary border-opacity-25">Android</span>
                    <span class="badge bg-dark text-success border border-secondary border-opacity-25">CTI</span>
                </div>
            </div>
        </div>

        <!-- Pillar 2 -->
        <div class="col-md-6 col-lg-3">
            <div class="cyber-card h-100">
                <div class="mb-3 text-info fs-3">
                    <i class="bi bi-diagram-3-fill"></i>
                </div>
                <h3 class="h5 text-light mb-2">Network IDS &amp; Synthetic Data</h3>
                <p class="small text-secondary mb-3" data-lang="vi">Nghiên cứu sinh dữ liệu luồng mạng bán nhân tạo (Semi-synthetic datasets) cho hệ thống NIDS và kỹ thuật phát hiện xâm nhập bằng Deep Learning.</p>
                <p class="small text-secondary mb-3" data-lang="en">Realistic semi-synthetic traffic generation for NIDS benchmarks and high-throughput network flow classification with Deep Learning.</p>
                <div class="d-flex flex-wrap gap-1 font-monospace small">
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">ICOIN IEEE</span>
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">NIDS</span>
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">PCAP</span>
                </div>
            </div>
        </div>

        <!-- Pillar 3 -->
        <div class="col-md-6 col-lg-3">
            <div class="cyber-card h-100">
                <div class="mb-3 text-warning fs-3">
                    <i class="bi bi-cpu-fill"></i>
                </div>
                <h3 class="h5 text-light mb-2">Quantum Machine Learning</h3>
                <p class="small text-secondary mb-3" data-lang="vi">Khung huấn luyện mô hình lượng tử (QML) hai giai đoạn chống nhiễu phần cứng trong kỷ nguyên NISQ (Q-Forge Framework).</p>
                <p class="small text-secondary mb-3" data-lang="en">Two-stage noise-aware framework for parameterized quantum model training in NISQ-era hardware (Q-Forge Framework).</p>
                <div class="d-flex flex-wrap gap-1 font-monospace small">
                    <span class="badge bg-dark text-warning border border-secondary border-opacity-25">RIVF IEEE</span>
                    <span class="badge bg-dark text-warning border border-secondary border-opacity-25">QML</span>
                    <span class="badge bg-dark text-warning border border-secondary border-opacity-25">Q-Forge</span>
                </div>
            </div>
        </div>

        <!-- Pillar 4 -->
        <div class="col-md-6 col-lg-3">
            <div class="cyber-card h-100">
                <div class="mb-3 text-danger fs-3">
                    <i class="bi bi-broadcast"></i>
                </div>
                <h3 class="h5 text-light mb-2">IoT Edge AI &amp; Link Estimation</h3>
                <p class="small text-secondary mb-3" data-lang="vi">Phát triển kiến trúc học sâu siêu nhẹ (WleAtNet) cho bài toán ước lượng chất lượng kết nối không dây trên thiết bị IoT giới hạn tài nguyên.</p>
                <p class="small text-secondary mb-3" data-lang="en">Lightweight deep learning architecture (WleAtNet) for real-time wireless link estimation in resource-constrained IoT edge devices.</p>
                <div class="d-flex flex-wrap gap-1 font-monospace small">
                    <span class="badge bg-dark text-danger border border-secondary border-opacity-25">Springer LNCS</span>
                    <span class="badge bg-dark text-danger border border-secondary border-opacity-25">IoT</span>
                    <span class="badge bg-dark text-danger border border-secondary border-opacity-25">WleAtNet</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Publications Section -->
<section class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="mb-1" data-lang="vi">Công bố Khoa học Tiêu biểu</h2>
            <h2 class="mb-1" data-lang="en">Featured Publications</h2>
            <p class="mb-0 text-secondary" data-lang="vi">Các bài báo khoa học đã bình duyệt trên tạp chí quốc tế và hội nghị chuyên ngành.</p>
            <p class="mb-0 text-secondary" data-lang="en">Selected peer-reviewed articles in international journals and flagship conferences.</p>
        </div>
        <a href="/publications/" class="cyber-btn cyber-btn-outline btn-sm">
            <span data-lang="vi">Xem tất cả bài báo (4)</span>
            <span data-lang="en">View All Publications (4)</span>
            <i class="bi bi-arrow-right ms-1"></i>
        </a>
    </div>

    <div class="row g-4">
        <!-- Paper 1: Array Elsevier 2025 -->
        <div class="col-lg-6">
            <div class="paper-item-card h-100">
                <div class="paper-meta">
                    <span class="cyber-badge badge-green font-monospace">Journal Article</span>
                    <span class="cyber-badge badge-cyan">Elsevier Array 2025</span>
                </div>
                <h3 class="paper-title">
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:d1gkVwhDpl0C" target="_blank" rel="noopener noreferrer">Beyond VirusTotal: A semantic approach to building reliable and up-to-date android malware datasets from threat reports</a>
                </h3>
                <p class="small text-secondary mb-2 font-monospace">
                    <span class="author-highlight">NT Nguyen</span> (Ngoc-Truong Nguyen), KH Le
                </p>
                <div class="paper-venue-tag">
                    <i class="bi bi-journal-check"></i> <em>Array, Volume 28, Article 100583, Elsevier (2025)</em>
                </div>
                <p class="paper-abstract" data-lang="vi">
                    Đề xuất giải pháp khai phá ngữ nghĩa từ báo cáo đe dọa không gian mạng (CTI) nhằm xây dựng bộ dữ liệu mã độc Android đáng tin cậy, cập nhật liên tục và vượt trội so với nhãn cảnh báo truyền thống của VirusTotal.
                </p>
                <p class="paper-abstract" data-lang="en">
                    Proposes a semantic-driven pipeline to construct dependable and continually updated Android malware benchmark datasets directly from cyber threat intelligence reports.
                </p>
                
                <div class="d-flex flex-wrap justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25 gap-2">
                    <div class="d-flex flex-wrap gap-2">
                        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:d1gkVwhDpl0C" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-outline btn-sm">
                            <i class="ai ai-google-scholar"></i> Scholar
                        </a>
                        <button class="cyber-btn cyber-btn-ghost btn-sm" onclick="copyBibtex('bib-home-1', this)">
                            <i class="bi bi-quote"></i> BibTeX
                        </button>
                    </div>
                    <a href="/publications/" class="small text-info text-decoration-none font-monospace">
                        <span data-lang="vi">Chi tiết</span>
                        <span data-lang="en">Details</span> &rarr;
                    </a>
                </div>

                <textarea id="bib-home-1" class="d-none">@article{nguyen2025beyond,
  title={Beyond VirusTotal: A semantic approach to building reliable and up-to-date android malware datasets from threat reports},
  author={Nguyen, Ngoc-Truong and Le, Khac-Hoai},
  journal={Array},
  volume={28},
  pages={100583},
  year={2025},
  publisher={Elsevier}
}</textarea>
            </div>
        </div>

        <!-- Paper 2: ICOIN 2023 -->
        <div class="col-lg-6">
            <div class="paper-item-card h-100">
                <div class="paper-meta">
                    <span class="cyber-badge badge-cyan font-monospace">Conference Paper</span>
                    <span class="cyber-badge badge-amber font-monospace">7 Citations</span>
                </div>
                <h3 class="paper-title">
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:u-x6o8ySG0sC" target="_blank" rel="noopener noreferrer">Towards generating semi-synthetic datasets for network intrusion detection system</a>
                </h3>
                <p class="small text-secondary mb-2 font-monospace">
                    <span class="author-highlight">NT Nguyen</span> (Ngoc-Truong Nguyen), TN Le, KH Le-Minh, KH Le
                </p>
                <div class="paper-venue-tag">
                    <i class="bi bi-award-fill"></i> <em>2023 International Conference on Information Networking (ICOIN), IEEE (2023)</em>
                </div>
                <p class="paper-abstract" data-lang="vi">
                    Nghiên cứu khung phương pháp sinh dữ liệu luồng mạng bán nhân tạo cho các hệ thống phát hiện xâm nhập mạng (NIDS), giải quyết bài toán thiếu dữ liệu gắn nhãn chuẩn và bảo mật dữ liệu nhạy cảm.
                </p>
                <p class="paper-abstract" data-lang="en">
                    Investigates a realistic semi-synthetic network traffic generation framework for Network Intrusion Detection Systems (NIDS), mitigating private data exposure while maintaining high fidelity attack distribution.
                </p>
                
                <div class="d-flex flex-wrap justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25 gap-2">
                    <div class="d-flex flex-wrap gap-2">
                        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1dTi3rQAAAAJ&citation_for_view=1dTi3rQAAAAJ:u-x6o8ySG0sC" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-outline btn-sm">
                            <i class="ai ai-google-scholar"></i> Scholar (7 Citations)
                        </a>
                        <button class="cyber-btn cyber-btn-ghost btn-sm" onclick="copyBibtex('bib-home-2', this)">
                            <i class="bi bi-quote"></i> BibTeX
                        </button>
                    </div>
                    <a href="/publications/" class="small text-info text-decoration-none font-monospace">
                        <span data-lang="vi">Chi tiết</span>
                        <span data-lang="en">Details</span> &rarr;
                    </a>
                </div>

                <textarea id="bib-home-2" class="d-none">@inproceedings{nguyen2023towards,
  title={Towards generating semi-synthetic datasets for network intrusion detection system},
  author={Nguyen, Ngoc-Truong and Le, Thien-Nga and Le-Minh, Khanh-Huy and Le, Khac-Hoai},
  booktitle={2023 International Conference on Information Networking (ICOIN)},
  pages={62--66},
  year={2023},
  organization={IEEE}
}</textarea>
            </div>
        </div>
    </div>
</section>

<!-- Latest Technical Guides & Lab Writeups -->
<section>
    <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="h4 mb-0">
            <i class="bi bi-code-slash text-success me-2"></i>
            <span data-lang="vi">Hướng dẫn Thực hành &amp; Lab Nghiên cứu</span>
            <span data-lang="en">Technical Guides &amp; Research Labs</span>
        </h2>
        <a href="/tutorials/" class="small text-info text-decoration-none">
            <span data-lang="vi">Xem tất cả bài viết</span>
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