---
layout: page
title: Publications & Research
permalink: /publications/
---

<!-- Page Header Banner -->
<div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
    <div>
        <div class="d-flex align-items-center gap-2 mb-1">
            <h1 class="h2 text-light fw-bold mb-0">
                <i class="bi bi-journal-bookmark-fill text-info me-2"></i>
                <span data-lang="vi">Công bố Khoa học &amp; Nghiên cứu</span>
                <span data-lang="en">Publications &amp; Scientific Works</span>
            </h1>
        </div>
        <p class="text-secondary mb-0" data-lang="vi">
            Danh sách các bài báo tạp chí khoa học và hội nghị quốc tế đã bình duyệt của <strong>Nguyễn Ngọc Trường (ntruongn)</strong>.
        </p>
        <p class="text-secondary mb-0" data-lang="en">
            Peer-reviewed journal articles and international conference papers authored by <strong>Ngoc-Truong Nguyen (ntruongn)</strong>.
        </p>
    </div>
    
    <!-- Academic Profile Badges -->
    <div class="d-flex flex-wrap align-items-center gap-2">
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-outline btn-sm">
            <i class="ai ai-google-scholar"></i> Google Scholar
        </a>
        <a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-outline btn-sm">
            <i class="ai ai-orcid"></i> ORCID
        </a>
        <a href="{{ site.author.arxiv }}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost btn-sm">
            <i class="ai ai-arxiv"></i> arXiv
        </a>
        <a href="{{ site.author.dblp }}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost btn-sm">
            <i class="ai ai-dblp"></i> DBLP
        </a>
    </div>
</div>

<!-- Academic Stats Dashboard -->
<div class="stats-dashboard">
    <div class="stat-card">
        <div class="stat-number">4</div>
        <div class="stat-label" data-lang="vi">Tổng công trình</div>
        <div class="stat-label" data-lang="en">Total Publications</div>
    </div>
    <div class="stat-card">
        <div class="stat-number text-success">1</div>
        <div class="stat-label" data-lang="vi">Tạp chí Quốc tế</div>
        <div class="stat-label" data-lang="en">Journal (Elsevier)</div>
    </div>
    <div class="stat-card">
        <div class="stat-number text-info">3</div>
        <div class="stat-label" data-lang="vi">Hội nghị Quốc tế</div>
        <div class="stat-label" data-lang="en">Conferences (IEEE/Springer)</div>
    </div>
</div>

<!-- Search and Filter Bar -->
<div class="cyber-card p-3 mb-4">
    <div class="row g-2 align-items-center">
        <div class="col-lg-5">
            <div class="search-input-box">
                <i class="bi bi-search search-icon"></i>
                <input type="text" id="pubSearchInput" placeholder="Tìm kiếm theo tiêu đề, hội nghị, tác giả, từ khóa..." autocomplete="off">
            </div>
        </div>
        <div class="col-lg-7">
            <div class="paper-filter-bar mb-0 justify-content-lg-end">
                <button class="filter-btn pub-filter-btn active" data-filter="all">
                    <span data-lang="vi">Tất cả</span>
                    <span data-lang="en">All (4)</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="journal">
                    <span data-lang="vi">Tạp chí</span>
                    <span data-lang="en">Journal</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="conference">
                    <span data-lang="vi">Hội nghị</span>
                    <span data-lang="en">Conferences</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="malware">
                    <span data-lang="vi">Mã độc Android</span>
                    <span data-lang="en">Android Malware</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="nids">
                    <span data-lang="vi">An ninh Mạng NIDS</span>
                    <span data-lang="en">NIDS</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="quantum">
                    <span data-lang="vi">Mô hình Lượng tử</span>
                    <span data-lang="en">Quantum ML</span>
                </button>
                <button class="filter-btn pub-filter-btn" data-filter="iot">
                    <span data-lang="vi">IoT</span>
                    <span data-lang="en">IoT &amp; Edge</span>
                </button>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-2 pt-2 border-top border-secondary border-opacity-25 small text-muted font-monospace">
        <div>
            <i class="bi bi-filter"></i> <span data-lang="vi">Hiển thị kết quả:</span><span data-lang="en">Matching results:</span> <strong id="pubResultsCount" class="text-info">4</strong>
        </div>
        <div>
            <i class="bi bi-info-circle"></i> <span data-lang="vi">Nhấp Abstract hoặc BibTeX để xem chi tiết</span><span data-lang="en">Click Abstract or BibTeX for details</span>
        </div>
    </div>
</div>

<!-- Empty state warning -->
<div id="pubEmptyState" class="cyber-card p-4 text-center d-none my-4">
    <i class="bi bi-search text-muted fs-2 mb-2 d-block"></i>
    <p class="text-secondary mb-0" data-lang="vi">Không tìm thấy bài báo nào phù hợp với từ khóa tìm kiếm.</p>
    <p class="text-secondary mb-0" data-lang="en">No publications matched your search query.</p>
</div>

<!-- ==============================================================================
     PUBLICATIONS LIST (DATA-DRIVEN TEMPLATE LOOP)
     ============================================================================== -->
<div class="d-flex flex-column gap-4" id="publishedPapersList">
{% for pub in site.data.publications %}
    <div class="paper-item-card pub-item-card" 
         data-doi="{{ pub.doi }}" 
         data-github="{{ pub.github }}" 
         data-preprint="{{ pub.preprint }}">
    </div>
{% endfor %}
</div>

