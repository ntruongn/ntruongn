---
layout: page
title: About Me & CV
---

<!-- Profile Header Banner -->
<div class="row align-items-center g-4 mb-5 pb-4 border-bottom border-secondary border-opacity-25">
    <div class="col-md-3 text-center">
        <div class="hero-avatar-box">
            <img src="https://github.com/ntruongn.png" onerror="this.src='https://ui-avatars.com/api/?name=Truong+Nguyen&background=0f172a&color=38bdf8&size=200'" alt="Ngoc-Truong Nguyen" class="hero-avatar">
        </div>
    </div>
    <div class="col-md-9">
        <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
            <span class="cyber-badge badge-green">
                <span class="pulse-dot"></span>
                <span data-lang="vi">Sẵn sàng hợp tác nghiên cứu &amp; Học thuật</span>
                <span data-lang="en">Available for Research Collaboration</span>
            </span>
            <span class="cyber-badge badge-cyan font-monospace">Vietnam / Global</span>
        </div>
        <h1 class="h2 text-light fw-bold mb-1">Ngoc-Truong Nguyen</h1>
        <p class="text-info font-monospace mb-2" data-lang="vi">Kỹ sư An toàn thông tin &bull; Nhà nghiên cứu AI/ML &bull; Nhà phát triển phần mềm</p>
        <p class="text-info font-monospace mb-2" data-lang="en">Cybersecurity Engineer &bull; AI/ML Researcher &bull; Software Developer</p>
        
        <div class="d-flex align-items-center gap-2 mb-3 text-secondary small font-monospace">
            <i class="bi bi-buildings text-info"></i>
            <span>{{ site.author.affiliation }}</span>
        </div>

        <p class="text-secondary mb-3" data-lang="vi">
            Đam mê nghiên cứu tại giao điểm giữa Trí tuệ Nhân tạo và An toàn Không gian mạng. Chuyên sâu về Tấn công suy luận thành viên (MIA), Học máy đối kháng (Adversarial ML), Hệ thống phát hiện xâm nhập bằng Deep Learning (IDS/IPS) và Kỹ thuật dịch ngược mã độc Android (Reverse Engineering).
        </p>
        <p class="text-secondary mb-3" data-lang="en">
            Passionate about researching the intersection of Artificial Intelligence and Computer Security. Specialized in Membership Inference Attacks (MIA), Adversarial Machine Learning, Deep Learning-based Intrusion Detection (IDS/IPS), and Android Reverse Engineering.
        </p>

        <div class="d-flex flex-wrap gap-2">
            <a href="mailto:{{ site.author.email }}" class="cyber-btn cyber-btn-primary btn-sm">
                <i class="bi bi-envelope-fill"></i>
                <span data-lang="vi">Liên hệ hợp tác</span>
                <span data-lang="en">Get in Touch</span>
            </a>
            <a href="{{ site.author.scholar }}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-outline btn-sm">
                <i class="ai ai-google-scholar"></i> Google Scholar
            </a>
            <a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-outline btn-sm">
                <i class="ai ai-orcid"></i> ORCID
            </a>
            <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost btn-sm">
                <i class="bi bi-github"></i> GitHub
            </a>
            <button class="cyber-btn cyber-btn-ghost btn-sm" onclick="window.print()">
                <i class="bi bi-printer"></i>
                <span data-lang="vi">In / Xuất PDF</span>
                <span data-lang="en">Print / PDF</span>
            </button>
        </div>
    </div>
</div>

<!-- ==============================================================================
     SECTION 1: RESEARCH STATEMENT & VISION
     ============================================================================== -->
<div class="mb-5">
    <h2 class="h4 text-light mb-3">
        <i class="bi bi-compass text-info me-2"></i>
        <span data-lang="vi">Tuyên ngôn &amp; Định hướng Nghiên cứu</span>
        <span data-lang="en">Research Statement &amp; Vision</span>
    </h2>
    <div class="p-4 rounded-3" style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.15);">
        <p class="mb-3" data-lang="vi">
            Tầm nhìn nghiên cứu của tôi tập trung tại giao điểm giữa <strong>An toàn Không gian mạng (Cybersecurity)</strong>, <strong>Trí tuệ Nhân tạo Đáng tin cậy (Trustworthy AI)</strong> và <strong>Tính toán Lượng tử (Quantum Computing)</strong>. Tôi đặc biệt quan tâm đến việc xây dựng các tập dữ liệu benchmark đáng tin cậy từ tri thức đe dọa (CTI), thiết kế hệ thống phát hiện xâm nhập mạng thực tế và tối ưu hóa mô hình học máy trên các nền tảng phần cứng đặc thù (NISQ Quantum &amp; Edge IoT).
        </p>
        <p class="mb-3" data-lang="en">
            My overarching research vision is situated at the nexus of <strong>Cybersecurity</strong>, <strong>Trustworthy Artificial Intelligence</strong>, and <strong>Quantum Machine Learning</strong>. I focus on curating dependable benchmark datasets from Cyber Threat Intelligence (CTI), developing realistic network intrusion detection frameworks, and optimizing learning models across specialized hardware paradigms (NISQ Quantum &amp; Edge IoT).
        </p>
        
        <div class="row g-3">
            <div class="col-md-6">
                <div class="d-flex align-items-start gap-2">
                    <i class="bi bi-shield-check text-success mt-1 fs-5"></i>
                    <div>
                        <strong class="text-light">Malware Analysis &amp; CTI Semantics:</strong>
                        <div class="small text-secondary" data-lang="vi">Khai phá ngữ nghĩa từ báo cáo an ninh mạng (CTI), phân tích dịch ngược nhị phân Android Native C/C++ và xây dựng tập dữ liệu mã độc (Elsevier Array 2025).</div>
                        <div class="small text-secondary" data-lang="en">Semantic mining from CTI threat reports, Android native binary disassembly, and reliable malware benchmark curation (Elsevier Array 2025).</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="d-flex align-items-start gap-2">
                    <i class="bi bi-shield-check text-info mt-1 fs-5"></i>
                    <div>
                        <strong class="text-light">Network IDS &amp; Synthetic Data Generation:</strong>
                        <div class="small text-secondary" data-lang="vi">Nghiên cứu sinh dữ liệu luồng mạng bán nhân tạo (Semi-synthetic datasets) và phân loại lưu lượng mã hóa thời gian thực (IEEE ICOIN 2023).</div>
                        <div class="small text-secondary" data-lang="en">Generating realistic semi-synthetic network traffic traces for NIDS evaluation and real-time flow classification (IEEE ICOIN 2023).</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="d-flex align-items-start gap-2">
                    <i class="bi bi-shield-check text-warning mt-1 fs-5"></i>
                    <div>
                        <strong class="text-light">Quantum Machine Learning (QML):</strong>
                        <div class="small text-secondary" data-lang="vi">Đề xuất khung huấn luyện hai giai đoạn thích ứng với nhiễu phần cứng cho mạch lượng tử biến thiên PQC (Q-Forge - IEEE RIVF 2025).</div>
                        <div class="small text-secondary" data-lang="en">Noise-aware two-stage training framework for parameterized quantum circuits under NISQ hardware constraints (Q-Forge - IEEE RIVF 2025).</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="d-flex align-items-start gap-2">
                    <i class="bi bi-shield-check text-danger mt-1 fs-5"></i>
                    <div>
                        <strong class="text-light">IoT Edge AI &amp; Link Estimation:</strong>
                        <div class="small text-secondary" data-lang="vi">Thiết kế mô hình Deep Learning siêu nhẹ (WleAtNet) cho bài toán ước lượng chất lượng kết nối không dây trên thiết bị IoT (Springer LNCS 2025).</div>
                        <div class="small text-secondary" data-lang="en">Lightweight neural architecture (WleAtNet) for wireless link quality estimation deployed on resource-constrained IoT nodes (Springer LNCS 2025).</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==============================================================================
     SECTION 2: EDUCATION & ACADEMIC BACKGROUND
     ============================================================================== -->
<div class="mb-5">
    <h2 class="h4 text-light mb-3">
        <i class="bi bi-mortarboard-fill text-info me-2"></i>
        <span data-lang="vi">Quá trình Đào tạo &amp; Học vấn</span>
        <span data-lang="en">Education &amp; Academic Background</span>
    </h2>
    <div class="cv-timeline">
        <!-- Education 1 -->
        <div class="cv-timeline-item">
            <div class="cv-timeline-dot"></div>
            <h3 class="cv-item-title">
                <span data-lang="vi">Kỹ sư An toàn Thông tin</span>
                <span data-lang="en">B.Eng. in Information Security / Cybersecurity</span>
            </h3>
            <div class="cv-item-org">
                <span data-lang="vi">Đại học Chuyên ngành An toàn Thông tin &bull; Việt Nam</span>
                <span data-lang="en">University of Information Security &bull; Vietnam</span>
            </div>
            <div class="cv-item-date">2019 &ndash; 2024</div>
            <p class="small text-secondary mb-0" data-lang="vi">
                Chuyên ngành An toàn thông tin, Mật mã học ứng dụng, Kỹ thuật dịch ngược và Bảo mật hệ thống học máy. Luận văn tốt nghiệp về ứng dụng Deep Learning trong phát hiện xâm nhập mạng và bảo vệ quyền riêng tư dữ liệu.
            </p>
            <p class="small text-secondary mb-0" data-lang="en">
                Specialized in Cyber Defense, Applied Cryptography, Reverse Engineering, and Secure Machine Learning. Graduation thesis on Deep Learning-based Intrusion Detection with Privacy Guarantees.
            </p>
        </div>
    </div>
</div>

<!-- ==============================================================================
     SECTION 3: RESEARCH & PROFESSIONAL EXPERIENCE
     ============================================================================== -->
<div class="mb-5">
    <h2 class="h4 text-light mb-3">
        <i class="bi bi-briefcase-fill text-info me-2"></i>
        <span data-lang="vi">Kinh nghiệm Nghiên cứu &amp; Làm việc</span>
        <span data-lang="en">Research &amp; Professional Experience</span>
    </h2>
    <div class="cv-timeline">
        <!-- Exp 1 -->
        <div class="cv-timeline-item">
            <div class="cv-timeline-dot"></div>
            <h3 class="cv-item-title">
                <span data-lang="vi">Kỹ sư An toàn thông tin &amp; Nghiên cứu AI</span>
                <span data-lang="en">Cybersecurity Engineer &amp; AI Researcher</span>
            </h3>
            <div class="cv-item-org">Information Security &amp; AI Research Group (IEC Group)</div>
            <div class="cv-item-date">2023 &ndash; Present</div>
            <ul class="small text-secondary mb-0">
                <li data-lang="vi">Chủ trì nghiên cứu các phương pháp tấn công và phòng thủ Membership Inference Attacks (MIA) trên mô hình Diffusion và LLMs.</li>
                <li data-lang="en">Leading research on membership inference attacks and defenses in generative diffusion pipelines and large language models.</li>
                <li data-lang="vi">Phát triển công cụ tự động phân tích tĩnh và dịch ngược nhị phân C/C++ Native trên các tệp Android APK độc hại.</li>
                <li data-lang="en">Architecting automated static binary dissection and control-flow graph abstraction pipelines for malicious Android APKs.</li>
                <li data-lang="vi">Thiết kế và triển khai các bộ luật phát hiện xâm nhập Snort/Suricata bảo vệ hạ tầng mạng của tổ chức.</li>
                <li data-lang="en">Designing and optimizing signature detection rulesets in Snort &amp; Suricata for production network traffic.</li>
            </ul>
        </div>
    </div>
</div>

<!-- ==============================================================================
     SECTION 4: HONORS, AWARDS & ACHIEVEMENTS
     ============================================================================== -->
<div class="mb-5">
    <h2 class="h4 text-light mb-3">
        <i class="bi bi-trophy-fill text-warning me-2"></i>
        <span data-lang="vi">Giải thưởng, Học bổng &amp; Thành tích</span>
        <span data-lang="en">Honors, Awards &amp; Grants</span>
    </h2>
    <div class="row g-3">
        <div class="col-md-6">
            <div class="cyber-card p-3 h-100">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="cyber-badge badge-amber font-monospace small">Academic Award</span>
                    <span class="small font-monospace text-muted">2024</span>
                </div>
                <h3 class="h6 text-light mb-1">Excellent Research Contribution Award</h3>
                <p class="small text-secondary mb-0" data-lang="vi">Khen thưởng thành tích xuất sắc trong công tác nghiên cứu khoa học an toàn thông tin và phát triển công cụ an ninh mạng.</p>
                <p class="small text-secondary mb-0" data-lang="en">Recognized for outstanding scientific contributions in cybersecurity research and open-source tooling.</p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="cyber-card p-3 h-100">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="cyber-badge badge-green font-monospace small">Security CTF</span>
                    <span class="small font-monospace text-muted">2023 - 2024</span>
                </div>
                <h3 class="h6 text-light mb-1">Cybersecurity Challenge Finalist</h3>
                <p class="small text-secondary mb-0" data-lang="vi">Tham gia và đạt thứ hạng cao trong các cuộc thi An toàn thông tin, chuyên về mảng Dịch ngược mã (Reverse Engineering) và Phòng thủ mạng.</p>
                <p class="small text-secondary mb-0" data-lang="en">Ranked among top finalists in national cybersecurity competitions, specializing in Reverse Engineering and Network Defense.</p>
            </div>
        </div>
    </div>
</div>

<!-- ==============================================================================
     SECTION 5: SKILLS MATRIX
     ============================================================================== -->
<div class="mb-5">
    <h2 class="h4 text-light mb-3">
        <i class="bi bi-cpu-fill text-info me-2"></i>
        <span data-lang="vi">Ma trận Kỹ năng Kỹ thuật &amp; Nghiên cứu</span>
        <span data-lang="en">Technical Skills Matrix</span>
    </h2>
    <div class="row g-3">
        <!-- AI & ML -->
        <div class="col-md-6">
            <div class="cyber-card skills-category-card">
                <div class="d-flex align-items-center gap-2 mb-2 text-info">
                    <i class="bi bi-robot fs-5"></i>
                    <h3 class="h6 text-light mb-0">AI &amp; Machine Learning Security</h3>
                </div>
                <div class="skills-grid">
                    <span class="skill-chip">PyTorch</span>
                    <span class="skill-chip">TensorFlow</span>
                    <span class="skill-chip">HuggingFace</span>
                    <span class="skill-chip">Scikit-learn</span>
                    <span class="skill-chip">Diffusion Models</span>
                    <span class="skill-chip">MIA Auditing</span>
                    <span class="skill-chip">Federated Learning</span>
                    <span class="skill-chip">Adversarial ML</span>
                </div>
            </div>
        </div>

        <!-- Cybersecurity -->
        <div class="col-md-6">
            <div class="cyber-card skills-category-card">
                <div class="d-flex align-items-center gap-2 mb-2 text-success">
                    <i class="bi bi-shield-lock fs-5"></i>
                    <h3 class="h6 text-light mb-0">Cybersecurity &amp; Reverse Engineering</h3>
                </div>
                <div class="skills-grid">
                    <span class="skill-chip">Ghidra Decompilation</span>
                    <span class="skill-chip">IDA Pro</span>
                    <span class="skill-chip">Wireshark &amp; PCAP</span>
                    <span class="skill-chip">Snort / Suricata</span>
                    <span class="skill-chip">Burp Suite</span>
                    <span class="skill-chip">Androguard</span>
                    <span class="skill-chip">Control Flow Graph (CFG)</span>
                    <span class="skill-chip">Crypto Search</span>
                </div>
            </div>
        </div>

        <!-- Programming & Dev -->
        <div class="col-md-6">
            <div class="cyber-card skills-category-card">
                <div class="d-flex align-items-center gap-2 mb-2 text-warning">
                    <i class="bi bi-code-slash fs-5"></i>
                    <h3 class="h6 text-light mb-0">Languages &amp; Software Architecture</h3>
                </div>
                <div class="skills-grid">
                    <span class="skill-chip">Python 3 (NumPy/Pandas)</span>
                    <span class="skill-chip">C / C++17</span>
                    <span class="skill-chip">JavaScript (ES6+)</span>
                    <span class="skill-chip">Bash / Linux Shell</span>
                    <span class="skill-chip">SQL / PostgreSQL</span>
                    <span class="skill-chip">REST APIs &amp; FastAPI</span>
                    <span class="skill-chip">HTML5 / CSS3</span>
                </div>
            </div>
        </div>

        <!-- Systems & Infrastructure -->
        <div class="col-md-6">
            <div class="cyber-card skills-category-card">
                <div class="d-flex align-items-center gap-2 mb-2 text-danger">
                    <i class="bi bi-server fs-5"></i>
                    <h3 class="h6 text-light mb-0">DevOps, Systems &amp; Lab Infrastructure</h3>
                </div>
                <div class="skills-grid">
                    <span class="skill-chip">Linux (Ubuntu/Arch)</span>
                    <span class="skill-chip">Docker &amp; Podman</span>
                    <span class="skill-chip">GitHub Actions CI/CD</span>
                    <span class="skill-chip">Jekyll Static Gen</span>
                    <span class="skill-chip">KVM / QEMU Virtualization</span>
                    <span class="skill-chip">Nginx Proxy</span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==============================================================================
     SECTION 6: SELECTED RESEARCH ARTIFACTS & OPEN SOURCE
     ============================================================================== -->
<div class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="h4 text-light mb-0">
            <i class="bi bi-folder-fill text-info me-2"></i>
            <span data-lang="vi">Dự án &amp; Công cụ Mã nguồn Mở</span>
            <span data-lang="en">Selected Research Artifacts &amp; Open Source</span>
        </h2>
        <a href="https://github.com/ntruongn?tab=repositories" target="_blank" class="small text-info text-decoration-none">
            <span data-lang="vi">Xem trên GitHub</span>
            <span data-lang="en">View on GitHub</span> <i class="bi bi-box-arrow-up-right ms-1"></i>
        </a>
    </div>

    <div class="row g-3">
        <!-- Project 1 -->
        <div class="col-md-6">
            <div class="cyber-card h-100">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h3 class="h6 text-light mb-0">Android Malware Analysis Pipeline</h3>
                    <span class="cyber-badge badge-green small font-monospace">Security</span>
                </div>
                <p class="small text-secondary mb-3" data-lang="vi">
                    Hệ thống tự động phân tích tĩnh và bóc tách đặc trưng từ tệp APK Android để phát hiện các hành vi độc hại bằng mô hình phân loại học máy.
                </p>
                <p class="small text-secondary mb-3" data-lang="en">
                    Automated static analysis and feature extraction system from Android APKs for detecting malicious behaviors with machine learning classifiers.
                </p>
                <div class="d-flex flex-wrap gap-1 font-monospace small">
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">Python</span>
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">Androguard</span>
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">Scikit-learn</span>
                </div>
            </div>
        </div>

        <!-- Project 2 -->
        <div class="col-md-6">
            <div class="cyber-card h-100">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h3 class="h6 text-light mb-0">Multi-Server Encrypted Search System</h3>
                    <span class="cyber-badge badge-cyan small font-monospace">Cryptography</span>
                </div>
                <p class="small text-secondary mb-3" data-lang="vi">
                    Hệ thống tìm kiếm an toàn trên cơ sở dữ liệu đám mây đã mã hóa kết hợp tính toán đa bên nhằm bảo vệ quyền riêng tư của câu truy vấn.
                </p>
                <p class="small text-secondary mb-3" data-lang="en">
                    Secure search over encrypted cloud databases with multi-party computation to protect query privacy against honest-but-curious servers.
                </p>
                <div class="d-flex flex-wrap gap-1 font-monospace small">
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">C++</span>
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">Cryptography</span>
                    <span class="badge bg-dark text-info border border-secondary border-opacity-25">Networking</span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==============================================================================
     SECTION 7: COLLABORATION & CONTACT
     ============================================================================== -->
<div class="cyber-card text-center p-4">
    <h2 class="h5 text-light mb-2">
        <i class="bi bi-chat-square-dots-fill text-info me-2"></i>
        <span data-lang="vi">Kết nối &amp; Hợp tác Học thuật</span>
        <span data-lang="en">Academic Collaboration &amp; Inquiries</span>
    </h2>
    <p class="text-secondary small mb-3 max-w-500 mx-auto" data-lang="vi">
        Tôi luôn sẵn sàng đón nhận các cơ hội hợp tác học thuật, trao đổi nghiên cứu, dự án mã nguồn mở và liên hệ chuyên môn trong lĩnh vực Bảo mật AI và An toàn hệ thống.
    </p>
    <p class="text-secondary small mb-3 max-w-500 mx-auto" data-lang="en">
        I am actively seeking research collaborations, academic exchanges, and software engineering opportunities in AI Security, Privacy-Preserving ML, and Systems Defense.
    </p>
    <div class="d-flex justify-content-center align-items-center gap-2 flex-wrap">
        <a href="mailto:{{ site.author.email }}" class="cyber-btn cyber-btn-primary">
            <i class="bi bi-envelope-at-fill"></i> {{ site.author.email }}
        </a>
        <button class="cyber-btn cyber-btn-outline" onclick="copyToClipboard('{{ site.author.email }}', this)">
            <i class="bi bi-clipboard"></i>
            <span data-lang="vi">Sao chép Email</span>
            <span data-lang="en">Copy Email</span>
        </button>
    </div>
</div>