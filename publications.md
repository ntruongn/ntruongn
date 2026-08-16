---
layout: page
title: Publications & Preprints
permalink: /publications/
---

<!-- Page Header -->
<div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
    <div>
        <h1 class="h2 text-light fw-bold mb-1">
            <i class="bi bi-journal-bookmark-fill text-info"></i>
            <span data-lang="vi">Công bố Khoa học &amp; Preprints</span>
            <span data-lang="en">Publications &amp; Preprints</span>
        </h1>
        <p class="text-secondary mb-0" data-lang="vi">
            Danh sách các bài báo hội nghị, tạp chí khoa học đã bình duyệt và các bản thảo preprint của <strong>Nguyễn Ngọc Trường</strong>.
        </p>
        <p class="text-secondary mb-0" data-lang="en">
            Peer-reviewed conference papers, journal articles, and preprint manuscripts by <strong>Ngoc-Truong Nguyen</strong>.
        </p>
    </div>
    <div class="d-flex align-items-center gap-2">
        <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" class="cyber-badge badge-cyan text-decoration-none">
            <i class="bi bi-mortarboard-fill"></i> Google Scholar
        </a>
        <a href="https://orcid.org" target="_blank" rel="noopener noreferrer" class="cyber-badge badge-green text-decoration-none">
            <i class="bi bi-person-badge"></i> ORCID
        </a>
    </div>
</div>

<!-- Search and Filter Bar -->
<div class="cyber-card p-3 mb-4">
    <div class="row g-2 align-items-center">
        <div class="col-lg-6">
            <div class="search-input-box">
                <i class="bi bi-search search-icon"></i>
                <input type="text" id="pubSearchInput" placeholder="Tìm kiếm theo tiêu đề, hội nghị, từ khóa (MIA, Android, IDS)..." autocomplete="off">
            </div>
        </div>
        <div class="col-lg-6">
            <div class="paper-filter-bar mb-0 justify-content-lg-end">
                <button class="filter-btn pub-filter-btn active" data-filter="all">
                    <span data-lang="vi">Tất cả</span>
                    <span data-lang="en">All</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="published">
                    <span data-lang="vi">Đã công bố</span>
                    <span data-lang="en">Published</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="preprint">
                    <span data-lang="vi">Bản thảo</span>
                    <span data-lang="en">Preprints</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="ai-sec">
                    <span data-lang="vi">Bảo mật AI</span>
                    <span data-lang="en">AI Security</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="systems">
                    <span data-lang="vi">Hệ thống &amp; Mã độc</span>
                    <span data-lang="en">Systems &amp; Malware</span>
                </button>
            </div>
        </div>
    </div>
</div>

<!-- ==============================================================================
     SECTION 1: PUBLISHED PAPERS (Các bài báo đã công bố)
     ============================================================================== -->
<div class="mb-5">
    <div class="d-flex align-items-center gap-2 mb-3">
        <h2 class="h4 text-light mb-0">
            <i class="bi bi-file-earmark-check-fill text-success"></i>
            <span data-lang="vi">Bài báo đã Xuất bản</span>
            <span data-lang="en">Published Papers</span>
        </h2>
        <span class="cyber-badge badge-green small">Peer-Reviewed</span>
    </div>

    <div class="d-flex flex-column gap-3" id="publishedPapersList">

        <!-- Paper Item 1 -->
        <div class="paper-item-card pub-item-card" data-type="published" data-category="ai-sec" data-tags="published ai-sec mia privacy intrusion-detection">
            <div class="paper-meta">
                <span class="cyber-badge badge-cyan">Journal / Conference 2024</span>
                <span class="cyber-badge badge-green">Published</span>
                <span class="text-secondary small font-monospace"><i class="bi bi-calendar3"></i> 2024</span>
            </div>
            
            <h3 class="paper-title">
                <a href="#">Deep Learning-based Network Intrusion Detection with Privacy-Preserving Representation</a>
            </h3>

            <p class="small text-secondary mb-2 font-monospace">
                <strong><u>Ngoc-Truong Nguyen</u></strong>, Co-Author A, Co-Author B
            </p>

            <p class="small text-info mb-2">
                <i class="bi bi-award-fill"></i> <em>IEEE Transactions / International Conference on Cyber Security &amp; AI (Example)</em>
            </p>

            <p class="paper-abstract" data-lang="vi">
                Bài báo đề xuất framework học sâu cho bài toán phân loại xâm nhập mạng thời gian thực, đồng thời tích hợp cơ chế bảo vệ quyền riêng tư chống lại các cuộc tấn công suy luận thành viên trên dữ liệu luồng mạng huấn luyện.
            </p>
            <p class="paper-abstract" data-lang="en">
                This paper presents a novel deep learning framework for real-time network intrusion classification while guaranteeing privacy protection against membership inference attacks on training flow datasets.
            </p>

            <!-- Actions & BibTeX -->
            <div class="d-flex flex-wrap justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25 gap-2">
                <div class="d-flex flex-wrap gap-2">
                    <a href="#" class="cyber-btn cyber-btn-outline btn-sm">
                        <i class="bi bi-file-earmark-pdf-fill"></i> PDF
                    </a>
                    <a href="https://dx.doi.org" target="_blank" class="cyber-btn cyber-btn-ghost btn-sm">
                        <i class="bi bi-link-45deg"></i> DOI
                    </a>
                    <a href="https://github.com/ntruongn" target="_blank" class="cyber-btn cyber-btn-ghost btn-sm">
                        <i class="bi bi-github"></i> Code
                    </a>
                    <button class="cyber-btn cyber-btn-ghost btn-sm" onclick="copyBibtex('bibtex-1', this)">
                        <i class="bi bi-quote"></i> Copy BibTeX
                    </button>
                </div>
            </div>

            <!-- Hidden BibTeX data for copy -->
            <textarea id="bibtex-1" class="d-none">@article{nguyen2024deep,
  title={Deep Learning-based Network Intrusion Detection with Privacy-Preserving Representation},
  author={Nguyen, Ngoc-Truong and others},
  journal={IEEE Conference on Cyber Security & AI},
  year={2024},
  doi={10.1109/EXAMPLE.2024.123456}
}</textarea>
        </div>

        <!-- Paper Item 2 -->
        <div class="paper-item-card pub-item-card" data-type="published" data-category="systems" data-tags="published systems malware android reverse-engineering">
            <div class="paper-meta">
                <span class="cyber-badge badge-cyan">Conference 2024</span>
                <span class="cyber-badge badge-green">Published</span>
                <span class="text-secondary small font-monospace"><i class="bi bi-calendar3"></i> 2024</span>
            </div>
            
            <h3 class="paper-title">
                <a href="#">Automated Android Malware Semantic Feature Extraction from Disassembled Native Binaries</a>
            </h3>

            <p class="small text-secondary mb-2 font-monospace">
                <strong><u>Ngoc-Truong Nguyen</u></strong>, Co-Author C
            </p>

            <p class="small text-info mb-2">
                <i class="bi bi-award-fill"></i> <em>International Symposium on Information Security and Software Engineering</em>
            </p>

            <p class="paper-abstract" data-lang="vi">
                Đề xuất quy trình dịch ngược nhị phân hai giai đoạn và trừu tượng hóa đồ thị luồng điều khiển (CFG) nhằm phát hiện các payload C/C++ Native bị làm rối mã trong các ứng dụng Android APK độc hại.
            </p>
            <p class="paper-abstract" data-lang="en">
                Proposes a dual-stage binary decompilation and control-flow graph abstraction pipeline to detect obfuscated Native C/C++ payloads in modern Android application packages (APKs).
            </p>

            <div class="d-flex flex-wrap justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25 gap-2">
                <div class="d-flex flex-wrap gap-2">
                    <a href="#" class="cyber-btn cyber-btn-outline btn-sm">
                        <i class="bi bi-file-earmark-pdf-fill"></i> PDF
                    </a>
                    <a href="https://github.com/ntruongn" target="_blank" class="cyber-btn cyber-btn-ghost btn-sm">
                        <i class="bi bi-github"></i> Code
                    </a>
                    <button class="cyber-btn cyber-btn-ghost btn-sm" onclick="copyBibtex('bibtex-2', this)">
                        <i class="bi bi-quote"></i> Copy BibTeX
                    </button>
                </div>
            </div>

            <textarea id="bibtex-2" class="d-none">@inproceedings{nguyen2024android,
  title={Automated Android Malware Semantic Feature Extraction from Disassembled Native Binaries},
  author={Nguyen, Ngoc-Truong and others},
  booktitle={International Symposium on Information Security and Software Engineering},
  year={2024}
}</textarea>
        </div>

    </div>
</div>


<!-- ==============================================================================
     SECTION 2: PREPRINTS & WORKING PAPERS (Bản thảo & Đang bình duyệt)
     ============================================================================== -->
<div class="mb-5">
    <div class="d-flex align-items-center gap-2 mb-3">
        <h2 class="h4 text-light mb-0">
            <i class="bi bi-hourglass-split text-warning"></i>
            <span data-lang="vi">Bản thảo &amp; Đang Bình duyệt</span>
            <span data-lang="en">Preprints &amp; Working Papers</span>
        </h2>
        <span class="cyber-badge badge-amber small">Preprints</span>
    </div>

    <div class="d-flex flex-column gap-3" id="preprintPapersList">

        <!-- Preprint Item 1 -->
        <div class="paper-item-card pub-item-card" data-type="preprint" data-category="ai-sec" data-tags="preprint ai-sec diffusion mia llm privacy">
            <div class="paper-meta">
                <span class="cyber-badge badge-amber">Under Review / arXiv</span>
                <span class="cyber-badge badge-violet">Preprint</span>
                <span class="text-secondary small font-monospace"><i class="bi bi-calendar3"></i> 2024 - 2025</span>
            </div>
            
            <h3 class="paper-title">
                <a href="#">Mitigating Black-Box Membership Leakage in Fine-Tuned Generative Diffusion Models</a>
            </h3>

            <p class="small text-secondary mb-2 font-monospace">
                <strong><u>Ngoc-Truong Nguyen</u></strong>, Advisor Name
            </p>

            <p class="small text-warning mb-2">
                <i class="bi bi-file-earmark-text"></i> <em>Preprint available on arXiv / Under Peer Review</em>
            </p>

            <p class="paper-abstract" data-lang="vi">
                Nghiên cứu điểm yếu rò rỉ thông tin huấn luyện của các mô hình khuếch tán đã được fine-tune trước các cuộc tấn công MIA black-box và đề xuất phương pháp phòng thủ hiệu chỉnh nhiễu không làm giảm chất lượng ảnh.
            </p>
            <p class="paper-abstract" data-lang="en">
                We investigate the vulnerability of customized fine-tuned diffusion models against threshold-based membership inference attacks and propose a lightweight inference-time noise calibration defense.
            </p>

            <div class="d-flex flex-wrap justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25 gap-2">
                <div class="d-flex flex-wrap gap-2">
                    <a href="https://arxiv.org" target="_blank" class="cyber-btn cyber-btn-outline btn-sm">
                        <i class="bi bi-box-arrow-up-right"></i> arXiv Preprint
                    </a>
                    <a href="https://github.com/ntruongn" target="_blank" class="cyber-btn cyber-btn-ghost btn-sm">
                        <i class="bi bi-github"></i> Code
                    </a>
                    <button class="cyber-btn cyber-btn-ghost btn-sm" onclick="copyBibtex('bibtex-preprint-1', this)">
                        <i class="bi bi-quote"></i> Copy BibTeX
                    </button>
                </div>
            </div>

            <textarea id="bibtex-preprint-1" class="d-none">@article{nguyen2025mitigating,
  title={Mitigating Black-Box Membership Leakage in Fine-Tuned Generative Diffusion Models},
  author={Nguyen, Ngoc-Truong and others},
  journal={arXiv preprint arXiv:2501.xxxxx},
  year={2025}
}</textarea>
        </div>

    </div>
</div>

<!-- ==============================================================================
     SECTION 3: HƯỚNG DẪN THÊM PAPER MỚI
     ============================================================================== -->
<div class="p-3 rounded-3 mt-4" style="background: rgba(15, 23, 42, 0.7); border: 1px dashed rgba(56, 189, 248, 0.3);">
    <div class="d-flex align-items-center gap-2 mb-2 text-info">
        <i class="bi bi-info-circle-fill"></i>
        <strong class="text-light" data-lang="vi">Cách thêm bài báo / preprint mới:</strong>
        <strong class="text-light" data-lang="en">How to add new papers / preprints:</strong>
    </div>
    <p class="small text-secondary mb-0" data-lang="vi">
        Bạn chỉ cần mở tệp <code class="text-info">publications.md</code>, copy một khối thẻ <code class="text-light">&lt;div class="paper-item-card pub-item-card" ...&gt;</code> ở trên và thay đổi tiêu đề, danh sách tác giả, link PDF, DOI, GitHub và mã trích dẫn BibTeX theo ý muốn!
    </p>
    <p class="small text-secondary mb-0" data-lang="en">
        Simply open <code class="text-info">publications.md</code>, duplicate one of the <code class="text-light">&lt;div class="paper-item-card pub-item-card" ...&gt;</code> cards above, and customize the title, authors, links, and BibTeX!
    </p>
</div>

<!-- JavaScript for Live Filtering & BibTeX copy -->
<script>
function copyBibtex(textareaId, btnElement) {
    const textarea = document.getElementById(textareaId);
    if (!textarea) return;
    navigator.clipboard.writeText(textarea.value).then(() => {
        const originalHtml = btnElement.innerHTML;
        btnElement.innerHTML = '<i class="bi bi-check2"></i> Copied!';
        btnElement.classList.add('text-success');
        setTimeout(() => {
            btnElement.innerHTML = originalHtml;
            btnElement.classList.remove('text-success');
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('pubSearchInput');
    const filterButtons = document.querySelectorAll('.pub-filter-btn');
    const pubCards = document.querySelectorAll('.pub-item-card');

    let currentFilter = 'all';
    let currentSearch = '';

    function filterPublications() {
        pubCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardType = card.getAttribute('data-type') || '';
            const cardCat = card.getAttribute('data-category') || '';
            const cardTags = card.getAttribute('data-tags') || '';
            
            const matchesSearch = currentSearch === '' || cardText.includes(currentSearch);
            let matchesFilter = true;

            if (currentFilter === 'published') {
                matchesFilter = cardType === 'published';
            } else if (currentFilter === 'preprint') {
                matchesFilter = cardType === 'preprint';
            } else if (currentFilter === 'ai-sec') {
                matchesFilter = cardCat === 'ai-sec' || cardTags.includes('ai-sec') || cardTags.includes('mia');
            } else if (currentFilter === 'systems') {
                matchesFilter = cardCat === 'systems' || cardTags.includes('systems') || cardTags.includes('malware');
            }

            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            filterPublications();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter') || 'all';
            filterPublications();
        });
    });
});
</script>
