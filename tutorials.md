---
layout: page
title: Tutorials & Technical Guides
permalink: /tutorials/
---

<!-- Tutorials Header Banner -->
<div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
    <div>
        <h1 class="h2 text-light fw-bold mb-1">
            <i class="bi bi-code-slash text-success"></i>
            <span data-lang="vi">Hướng dẫn Kỹ thuật &amp; Nghiên cứu</span>
            <span data-lang="en">Tutorials &amp; Engineering Guides</span>
        </h1>
        <p class="text-secondary mb-0" data-lang="vi">
            Các bài viết hướng dẫn thực hành, kỹ thuật dịch ngược mã độc, bảo mật mô hình AI và cẩm nang phòng thủ mạng.
        </p>
        <p class="text-secondary mb-0" data-lang="en">
            Hands-on technical tutorials, reverse engineering writeups, AI security demonstrations, and network defense guides.
        </p>
    </div>
    <div class="cyber-badge badge-green font-monospace">
        <i class="bi bi-journal-code"></i> Technical Knowledge Base
    </div>
</div>

<!-- Search & Filter Controls -->
<div class="cyber-card p-3 mb-4">
    <div class="row g-2 align-items-center">
        <div class="col-lg-6">
            <div class="search-input-box">
                <i class="bi bi-search search-icon"></i>
                <input type="text" id="tutorialSearchInput" placeholder="Tìm kiếm bài hướng dẫn (Ghidra, Snort, PyTorch, MIA, Jadx)..." autocomplete="off">
            </div>
        </div>
        <div class="col-lg-6">
            <div class="paper-filter-bar mb-0 justify-content-lg-end">
                <button class="filter-btn tut-filter-btn active" data-filter="all">
                    <span data-lang="vi">Tất cả</span>
                    <span data-lang="en">All</span>
                </button>
                <button class="filter-btn tut-filter-btn" data-filter="re">
                    <span data-lang="vi">Dịch ngược mã</span>
                    <span data-lang="en">Reverse Eng</span>
                </button>
                <button class="filter-btn tut-filter-btn" data-filter="ai-sec">
                    <span data-lang="vi">Bảo mật AI</span>
                    <span data-lang="en">AI Security</span>
                </button>
                <button class="filter-btn tut-filter-btn" data-filter="network">
                    <span data-lang="vi">Phòng thủ mạng</span>
                    <span data-lang="en">Network</span>
                </button>
                <button class="filter-btn tut-filter-btn" data-filter="crypto">
                    <span data-lang="vi">Mật mã học</span>
                    <span data-lang="en">Crypto</span>
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Tutorials Grid -->
<div id="tutorialsListContainer" class="d-flex flex-column gap-3">
    {% assign sorted_tutorials = site.tutorials | sort: 'date' | reverse %}
    {% for p in sorted_tutorials %}
    {% if p.title and p.title != "" %}
    <div class="paper-item-card tutorial-item-card" data-tags="{{ p.tags | join: ' ' | downcase }} {{ p.category | downcase }}">
        <div class="paper-meta">
            <span class="cyber-badge badge-green">{{ p.category | default: "Guide" }}</span>
            {% if p.difficulty %}
            <span class="cyber-badge badge-cyan">{{ p.difficulty }}</span>
            {% endif %}
            <span class="text-secondary small font-monospace">
                <i class="bi bi-calendar3"></i> {{ p.date | default: site.time | date: site.ntruongn.date_format }}
            </span>
            {% if p.read_time %}
            <span class="text-secondary small font-monospace">
                <i class="bi bi-clock"></i> {{ p.read_time }}
            </span>
            {% endif %}
        </div>

        <h3 class="paper-title">
            <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
        </h3>

        <p class="paper-abstract">
            {{ p.description | default: "Step-by-step walkthrough covering environment setup, code implementation, and testing methodologies." }}
        </p>

        <!-- Tags & Read Link -->
        <div class="d-flex flex-wrap justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25 gap-2">
            <div class="d-flex flex-wrap gap-1 font-monospace small">
                {% for tag in p.tags %}
                <span class="badge bg-dark text-info border border-secondary border-opacity-25">#{{ tag }}</span>
                {% endfor %}
            </div>
            <a href="{{ p.url | relative_url }}" class="cyber-btn cyber-btn-outline btn-sm">
                <span data-lang="vi">Đọc bài viết</span>
                <span data-lang="en">Read Tutorial</span>
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
    {% endif %}
    {% endfor %}
</div>

<!-- JavaScript for Tutorial Live Search & Filters -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('tutorialSearchInput');
    const filterButtons = document.querySelectorAll('.tut-filter-btn');
    const tutorialCards = document.querySelectorAll('.tutorial-item-card');

    let currentFilter = 'all';
    let currentSearch = '';

    function filterTutorials() {
        tutorialCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardTags = card.getAttribute('data-tags') || '';
            
            const matchesSearch = currentSearch === '' || cardText.includes(currentSearch);
            let matchesFilter = true;

            if (currentFilter === 're') {
                matchesFilter = cardTags.includes('re') || cardTags.includes('reverse') || cardText.includes('ghidra') || cardText.includes('jadx') || cardText.includes('malware');
            } else if (currentFilter === 'ai-sec') {
                matchesFilter = cardTags.includes('ai-sec') || cardTags.includes('ai') || cardText.includes('pytorch') || cardText.includes('mia') || cardText.includes('inference');
            } else if (currentFilter === 'network') {
                matchesFilter = cardTags.includes('network') || cardText.includes('snort') || cardText.includes('suricata') || cardText.includes('ids');
            } else if (currentFilter === 'crypto') {
                matchesFilter = cardTags.includes('crypto') || cardText.includes('encrypted') || cardText.includes('search');
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
            filterTutorials();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter') || 'all';
            filterTutorials();
        });
    });
});
</script>
