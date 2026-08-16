/**
 * Interactive Script for Academic Researcher Portfolio (ntruongn)
 * Author: Ngoc-Truong Nguyen (@ntruongn)
 * Features: 
 * - Bilingual i18n (VI/EN) without reload
 * - Cyber Dark / Modern Light Mode with memory
 * - Interactive Terminal with multiple tabs
 * - Real-time publication & tutorial search & filtering
 * - Collapsible Abstract and BibTeX drawers
 * - 1-Click Clipboard copy for BibTeX and Email with Toast alert
 * - Smooth Back-to-Top and Navbar scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. Toast Notification Helper
    // =========================================================================
    const cyberToast = document.getElementById('cyberToast');
    const cyberToastMsg = document.getElementById('cyberToastMsg');
    let toastTimeout = null;

    window.showToast = function(message) {
        if (!cyberToast) return;
        if (cyberToastMsg) cyberToastMsg.textContent = message;
        
        cyberToast.classList.add('show');
        if (toastTimeout) clearTimeout(toastTimeout);
        
        toastTimeout = setTimeout(() => {
            cyberToast.classList.remove('show');
        }, 2600);
    };

    // =========================================================================
    // 2. Bilingual (VI / EN) Language Switcher
    // =========================================================================
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langFlag = document.getElementById('langFlag');
    const langLabel = document.getElementById('langLabel');

    function updateLanguageUI(lang) {
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('site_lang', lang);

        if (langFlag && langLabel) {
            if (lang === 'vi') {
                langFlag.textContent = '🇻🇳';
                langLabel.textContent = 'VI';
                langToggleBtn?.setAttribute('title', 'Đang dùng Tiếng Việt (Click để chuyển sang English)');
            } else {
                langFlag.textContent = '🇬🇧';
                langLabel.textContent = 'EN';
                langToggleBtn?.setAttribute('title', 'Currently English (Click to switch to Tiếng Việt)');
            }
        }

        // Update search placeholders dynamically if present
        const pubSearch = document.getElementById('pubSearchInput');
        if (pubSearch) {
            pubSearch.placeholder = lang === 'vi' 
                ? 'Tìm kiếm theo tiêu đề, hội nghị, tác giả, từ khóa (MIA, Android, IDS)...' 
                : 'Search by title, conference, authors, keywords (e.g. MIA, Android, IDS)...';
        }

        const tutSearch = document.getElementById('tutorialSearchInput');
        if (tutSearch) {
            tutSearch.placeholder = lang === 'vi'
                ? 'Tìm kiếm bài hướng dẫn (Ghidra, Snort, PyTorch, MIA, Jadx)...'
                : 'Search tutorials & guides (e.g. Ghidra, Snort, PyTorch, MIA, Jadx)...';
        }
    }

    const currentLang = localStorage.getItem('site_lang') || 'vi';
    updateLanguageUI(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const activeLang = document.documentElement.getAttribute('data-lang') || 'vi';
            const nextLang = activeLang === 'vi' ? 'en' : 'vi';
            updateLanguageUI(nextLang);
            const msg = nextLang === 'vi' ? 'Đã chuyển sang Tiếng Việt 🇻🇳' : 'Switched to English 🇬🇧';
            window.showToast(msg);
        });
    }

    // =========================================================================
    // 3. Dark / Light Theme Toggle Handler
    // =========================================================================
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'light') {
            themeIcon.className = 'bi bi-moon-stars-fill';
            themeToggleBtn?.setAttribute('title', 'Switch to Dark Cyber Mode');
        } else {
            themeIcon.className = 'bi bi-sun-fill';
            themeToggleBtn?.setAttribute('title', 'Switch to Light Clean Mode');
        }
    }

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateThemeIcon(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            window.showToast(newTheme === 'dark' ? 'Dark Cyber Mode Activated' : 'Light Mode Activated');
        });
    }

    // =========================================================================
    // 4. Navbar Scroll Effect & Back-To-Top
    // =========================================================================
    const navbar = document.querySelector('.navbar-cyber');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        if (backToTopBtn) {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =========================================================================
    // 5. Interactive Terminal Tabs (Home Page)
    // =========================================================================
    const terminalTabs = document.querySelectorAll('.terminal-tab-btn');
    const terminalPanels = document.querySelectorAll('.terminal-tab-panel');

    terminalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            
            terminalTabs.forEach(t => t.classList.remove('active'));
            terminalPanels.forEach(p => p.classList.add('d-none'));

            tab.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.remove('d-none');
            }
        });
    });

    // =========================================================================
    // 6. Publications Live Filter & Search Engine
    // =========================================================================
    const pubSearch = document.getElementById('pubSearchInput');
    const pubFilters = document.querySelectorAll('.pub-filter-btn');
    const pubCounter = document.getElementById('pubResultsCount');
    const pubEmptyState = document.getElementById('pubEmptyState');

    let currentPubFilter = 'all';
    let currentPubQuery = '';

    window.applyPubFilter = function() {
        const pubCards = document.querySelectorAll('.pub-item-card');
        if (!pubCards.length) return;
        let visibleCount = 0;

        pubCards.forEach(card => {
            const text = (card.innerText || card.textContent).toLowerCase();
            const type = (card.getAttribute('data-type') || '').toLowerCase();
            const cat = (card.getAttribute('data-category') || '').toLowerCase();
            const tags = (card.getAttribute('data-tags') || '').toLowerCase();

            const matchesQuery = currentPubQuery === '' || text.includes(currentPubQuery);
            let matchesCategory = true;

            if (currentPubFilter === 'journal') {
                matchesCategory = (type === 'journal' || tags.includes('journal') || tags.includes('elsevier'));
            } else if (currentPubFilter === 'conference') {
                matchesCategory = (type === 'conference' || tags.includes('conference') || tags.includes('ieee') || tags.includes('springer'));
            } else if (currentPubFilter === 'malware') {
                matchesCategory = (cat.includes('malware') || tags.includes('malware') || tags.includes('android'));
            } else if (currentPubFilter === 'nids') {
                matchesCategory = (cat.includes('nids') || tags.includes('nids') || tags.includes('intrusion') || tags.includes('network'));
            } else if (currentPubFilter === 'quantum') {
                matchesCategory = (cat.includes('quantum') || tags.includes('quantum') || tags.includes('qml'));
            } else if (currentPubFilter === 'iot') {
                matchesCategory = (cat.includes('iot') || tags.includes('iot') || tags.includes('wireless'));
            }

            if (matchesQuery && matchesCategory) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (pubCounter) {
            pubCounter.textContent = visibleCount;
        }

        if (pubEmptyState) {
            if (visibleCount === 0) {
                pubEmptyState.classList.remove('d-none');
            } else {
                pubEmptyState.classList.add('d-none');
            }
        }
    };

    if (pubSearch) {
        pubSearch.addEventListener('input', (e) => {
            currentPubQuery = e.target.value.toLowerCase().trim();
            window.applyPubFilter();
        });
    }

    pubFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            pubFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPubFilter = btn.getAttribute('data-filter') || 'all';
            window.applyPubFilter();
        });
    });

    // =========================================================================
    // 6.1 DOI Auto-Fetcher & Dynamic Publication Engine
    // =========================================================================
    function cleanDoiString(input) {
        if (!input) return '';
        let str = String(input).trim();
        str = str.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
        str = str.replace(/^doi:\s*/i, '');
        return str.split('?')[0].replace(/\/+$/, '').trim();
    }

    // Fetch with cache and retry support
    window.fetchDoiMetadata = async function(rawDoi, skipCache = false) {
        const cleanDoi = cleanDoiString(rawDoi);
        if (!cleanDoi) throw new Error("Invalid DOI format");

        const cacheKey = `doi_cache_v2_${cleanDoi}`;
        if (!skipCache) {
            try {
                const cached = localStorage.getItem(cacheKey);
                if (cached) {
                    const parsed = JSON.parse(cached);
                    if (parsed.timestamp && (Date.now() - parsed.timestamp < 7 * 24 * 60 * 60 * 1000)) {
                        return parsed.data;
                    }
                }
            } catch (e) {
                console.warn("localStorage cache read error:", e);
            }
        }

        let crossrefData = null;
        let s2Data = null;
        let bibtexStr = '';

        // 1. Fetch Crossref API (with 1 retry)
        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                const crRes = await fetch(`https://api.crossref.org/works/${encodeURIComponent(cleanDoi)}`);
                if (crRes.ok) {
                    const crJson = await crRes.json();
                    crossrefData = crJson.message;
                    break;
                }
            } catch (e) {
                console.warn(`Crossref attempt ${attempt + 1} error:`, e);
                if (attempt === 0) await new Promise(r => setTimeout(r, 400));
            }
        }

        // 2. Fetch Semantic Scholar API (with 1 retry)
        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                const s2Res = await fetch(`https://api.semanticscholar.org/graph/v1/paper/DOI:${cleanDoi}?fields=title,abstract,authors,venue,year,externalIds,publicationTypes,journal`);
                if (s2Res.ok) {
                    s2Data = await s2Res.json();
                    break;
                }
            } catch (e) {
                console.warn(`Semantic Scholar attempt ${attempt + 1} error:`, e);
                if (attempt === 0) await new Promise(r => setTimeout(r, 400));
            }
        }

        // 3. Fetch Official BibTeX from Crossref Transform API
        try {
            const bibRes = await fetch(`https://api.crossref.org/works/${encodeURIComponent(cleanDoi)}/transform/application/x-bibtex`);
            if (bibRes.ok) {
                bibtexStr = await bibRes.text();
            }
        } catch (e) {
            console.warn("BibTeX fetch error:", e);
        }

        if (!crossrefData && !s2Data) {
            throw new Error(`Could not fetch metadata for DOI: ${cleanDoi}`);
        }

        const rawTitle = crossrefData?.title?.[0] || s2Data?.title || "Untitled Paper";
        const title = rawTitle.replace(/<[^>]*>?/gm, '').trim();

        let authors = [];
        if (crossrefData?.author && Array.isArray(crossrefData.author)) {
            authors = crossrefData.author.map(a => {
                const family = a.family || '';
                const given = a.given || '';
                return given ? `${given} ${family}` : family;
            });
        } else if (s2Data?.authors && Array.isArray(s2Data.authors)) {
            authors = s2Data.authors.map(a => a.name);
        }

        const authorsHTML = authors.map(name => {
            if (/Nguyen.*Truong|Truong.*Nguyen|NT Nguyen|Ngoc-Truong Nguyen/i.test(name)) {
                return `<span class="author-highlight">NT Nguyen</span> (${name})`;
            }
            return name;
        }).join(', ');

        const containerTitle = crossrefData?.['container-title']?.[0] || s2Data?.venue || s2Data?.journal?.name || '';
        const publisher = crossrefData?.publisher || '';
        const volume = crossrefData?.volume || '';
        const issue = crossrefData?.issue || '';
        const page = crossrefData?.page || crossrefData?.['article-number'] || '';
        const year = crossrefData?.issued?.['date-parts']?.[0]?.[0] || s2Data?.year || new Date().getFullYear();

        let venueParts = [];
        if (containerTitle) venueParts.push(containerTitle);
        if (volume) venueParts.push(`Vol. ${volume}`);
        if (issue) venueParts.push(`No. ${issue}`);
        if (page) venueParts.push(`pp. ${page}`);
        if (publisher && !containerTitle.includes(publisher)) venueParts.push(publisher);
        if (year) venueParts.push(`(${year})`);
        const venueStr = venueParts.join(', ');

        const typeStr = (crossrefData?.type || '').includes('journal') || (s2Data?.publicationTypes || []).includes('JournalArticle') ? 'journal' : 'conference';

        let abstract = s2Data?.abstract || crossrefData?.abstract || '';
        if (abstract) {
            abstract = abstract.replace(/<[^>]*>?/gm, '').trim();
        }

        if (!bibtexStr || !bibtexStr.trim()) {
            const firstAuthor = (crossrefData?.author?.[0]?.family || authors[0] || 'author').toLowerCase().replace(/[^a-z]/g, '');
            const bibKey = `${firstAuthor}${year}${title.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '')}`;
            bibtexStr = `@${typeStr === 'journal' ? 'article' : 'inproceedings'}{${bibKey},\n  title={${title}},\n  author={${authors.join(' and ')}},\n  journal={${containerTitle || publisher}},\n  year={${year}},\n  doi={${cleanDoi}}\n}`;
        }

        const resultData = {
            doi: cleanDoi,
            doiUrl: `https://doi.org/${cleanDoi}`,
            title,
            authors,
            authorsHTML,
            venue: venueStr,
            containerTitle,
            publisher,
            year,
            type: typeStr,
            abstract,
            bibtex: bibtexStr.trim()
        };

        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                timestamp: Date.now(),
                data: resultData
            }));
        } catch (e) {
            console.warn("localStorage cache write error:", e);
        }

        return resultData;
    };

    window.createPaperCardHTML = function(paper, customId = null) {
        const cardId = customId || `pub-doi-${Math.random().toString(36).substring(2, 9)}`;
        
        let typeBadge = `<span class="cyber-badge badge-cyan font-monospace">Conference Paper</span>`;
        if (paper.type === 'journal') {
            typeBadge = `<span class="cyber-badge badge-green font-monospace">Journal Article</span>`;
        } else if (paper.type === 'preprint') {
            typeBadge = `<span class="cyber-badge badge-violet font-monospace"><i class="ai ai-arxiv me-1"></i> Preprint</span>`;
        }
        
        const venueBadge = paper.containerTitle 
            ? `<span class="cyber-badge badge-violet">${paper.containerTitle} ${paper.year}</span>`
            : `<span class="cyber-badge badge-cyan">${paper.year}</span>`;

        const abstractSection = paper.abstract ? `
        <!-- Collapsible Abstract -->
        <div id="abs-${cardId}" class="abstract-collapse-box">
            <strong class="text-light d-block mb-1">Abstract:</strong>
            <p class="mb-1">${paper.abstract}</p>
        </div>` : '';

        const bibtexSection = paper.bibtex ? `
        <!-- Collapsible BibTeX Drawer -->
        <div id="bibbox-${cardId}" class="bibtex-drawer">
            <div class="bibtex-header">
                <span>BibTeX Citation</span>
                <button class="btn btn-sm btn-link text-info text-decoration-none p-0 font-monospace" onclick="copyBibtex('bibtex-${cardId}', this)">
                    <i class="bi bi-clipboard"></i> Copy
                </button>
            </div>
            <pre class="bibtex-pre" id="bibtex-${cardId}">${paper.bibtex}</pre>
        </div>` : '';

        // Buttons
        const doiBtn = paper.doi ? `
            <a href="${paper.doiUrl || 'https://doi.org/' + paper.doi}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost btn-sm text-info">
                <i class="bi bi-link-45deg"></i> DOI: ${paper.doi}
            </a>` : '';

        const githubBtn = paper.github ? `
            <a href="${paper.github}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost btn-sm">
                <i class="bi bi-github me-1"></i> Code / Repository
            </a>` : '';

        const preprintBtn = paper.preprint ? `
            <a href="${paper.preprint}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost btn-sm text-warning">
                <i class="ai ai-arxiv me-1"></i> Preprint / arXiv
            </a>` : '';

        const pdfBtn = paper.pdf ? `
            <a href="${paper.pdf}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost btn-sm text-danger">
                <i class="bi bi-file-earmark-pdf me-1"></i> PDF
            </a>` : '';

        const scholarBtn = paper.scholar ? `
            <a href="${paper.scholar}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-ghost btn-sm">
                <i class="ai ai-google-scholar me-1"></i> Google Scholar
            </a>` : '';

        return `
    <div class="paper-item-card pub-item-card" data-doi="${paper.doi || ''}" data-github="${paper.github || ''}" data-preprint="${paper.preprint || ''}" data-type="${paper.type}" data-category="${paper.category || paper.type}" data-tags="${paper.type} ${(paper.title || '').toLowerCase()} ${(paper.venue || '').toLowerCase()}">
        <div class="paper-meta">
            ${typeBadge}
            ${venueBadge}
            <span class="text-secondary small font-monospace"><i class="bi bi-calendar3"></i> ${paper.year}</span>
        </div>
        
        <h3 class="paper-title">
            <a href="${paper.doiUrl || paper.preprint || paper.scholar || '#'}" target="_blank" rel="noopener noreferrer">${paper.title}</a>
        </h3>

        <p class="small text-secondary mb-2 font-monospace">
            ${paper.authorsHTML || paper.authors?.join(', ') || ''}
        </p>

        <div class="paper-venue-tag">
            <i class="bi bi-${paper.type === 'journal' ? 'journal-check' : 'award-fill'}"></i> <em>${paper.venue}</em>
        </div>

        <!-- Action Buttons -->
        <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
            ${paper.abstract ? `<button class="cyber-btn cyber-btn-outline btn-sm" onclick="toggleAbstract('abs-${cardId}', this)"><i class="bi bi-text-paragraph"></i> Abstract</button>` : ''}
            ${paper.bibtex ? `<button class="cyber-btn cyber-btn-outline btn-sm" onclick="toggleBibtex('bibbox-${cardId}', this)"><i class="bi bi-code-square"></i> BibTeX</button>` : ''}
            ${doiBtn}
            ${preprintBtn}
            ${githubBtn}
            ${pdfBtn}
            ${scholarBtn}
        </div>

        ${abstractSection}
        ${bibtexSection}
    </div>`;
    };

    // Auto-load and enrich publication cards with data-doi on page load
    async function initDoiPublications() {
        const cards = Array.from(document.querySelectorAll('.pub-item-card'));
        if (!cards.length) return;

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const doi = card.getAttribute('data-doi');
            const github = card.getAttribute('data-github');
            const preprint = card.getAttribute('data-preprint');

            if (doi && (!card.children.length || card.innerHTML.trim() === '')) {
                card.innerHTML = `
                    <div class="p-3 text-center text-muted font-monospace">
                        <div class="spinner-border spinner-border-sm text-info me-2" role="status"></div>
                        <span>Loading paper details from DOI: ${doi}...</span>
                    </div>`;
                try {
                    if (i > 0) await new Promise(r => setTimeout(r, 150));
                    
                    const paper = await window.fetchDoiMetadata(doi);
                    if (github) paper.github = github;
                    if (preprint) paper.preprint = preprint;
                    const html = window.createPaperCardHTML(paper);
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html.trim();
                    const newCard = tempDiv.firstElementChild;
                    card.replaceWith(newCard);
                    window.applyPubFilter();
                } catch (e) {
                    console.error("Failed to auto-load DOI card:", e);
                    card.innerHTML = `<div class="p-3 text-danger font-monospace"><i class="bi bi-exclamation-triangle-fill me-2"></i> Error loading metadata for DOI: ${doi}</div>`;
                }
            } else {
                const btnContainer = card.querySelector('.d-flex.flex-wrap.align-items-center.gap-2');
                if (btnContainer) {
                    if (doi && !btnContainer.querySelector('a[href*="doi.org"]')) {
                        const clean = cleanDoiString(doi);
                        const doiLink = document.createElement('a');
                        doiLink.href = `https://doi.org/${clean}`;
                        doiLink.target = '_blank';
                        doiLink.rel = 'noopener noreferrer';
                        doiLink.className = 'cyber-btn cyber-btn-ghost btn-sm text-info';
                        doiLink.innerHTML = `<i class="bi bi-link-45deg"></i> DOI: ${clean}`;
                        btnContainer.appendChild(doiLink);
                    }
                    if (github && !btnContainer.querySelector('a[href*="github.com"]')) {
                        const ghBtn = document.createElement('a');
                        ghBtn.href = github;
                        ghBtn.target = '_blank';
                        ghBtn.rel = 'noopener noreferrer';
                        ghBtn.className = 'cyber-btn cyber-btn-ghost btn-sm';
                        ghBtn.innerHTML = `<i class="bi bi-github me-1"></i> Code / Repository`;
                        btnContainer.appendChild(ghBtn);
                    }
                    if (preprint && !btnContainer.querySelector('a[href*="arxiv.org"]')) {
                        const preBtn = document.createElement('a');
                        preBtn.href = preprint;
                        preBtn.target = '_blank';
                        preBtn.rel = 'noopener noreferrer';
                        preBtn.className = 'cyber-btn cyber-btn-ghost btn-sm text-warning';
                        preBtn.innerHTML = `<i class="ai ai-arxiv me-1"></i> Preprint / arXiv`;
                        btnContainer.appendChild(preBtn);
                    }
                }
            }
        }
    }

    initDoiPublications();

    // Setup Interactive DOI Widget
    const doiInput = document.getElementById('doiInput');
    const fetchDoiBtn = document.getElementById('fetchDoiBtn');
    const doiResultBox = document.getElementById('doiResultBox');
    const doiPreviewContainer = document.getElementById('doiPreviewContainer');
    const addDoiToListBtn = document.getElementById('addDoiToListBtn');
    const copyDoiHtmlBtn = document.getElementById('copyDoiHtmlBtn');

    let currentFetchedPaper = null;
    let currentFetchedHTML = '';

    if (fetchDoiBtn && doiInput) {
        const handleDoiFetch = async () => {
            const val = doiInput.value.trim();
            if (!val) {
                window.showToast('Vui lòng nhập mã DOI hoặc link DOI!');
                return;
            }

            fetchDoiBtn.disabled = true;
            fetchDoiBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-1" role="status"></span> Đang tải...`;
            
            if (doiResultBox) doiResultBox.classList.remove('d-none');
            if (doiPreviewContainer) {
                doiPreviewContainer.innerHTML = `
                    <div class="p-4 text-center text-info font-monospace">
                        <div class="spinner-border text-info mb-2" role="status"></div>
                        <div>Đang truy vấn Crossref &amp; Semantic Scholar API...</div>
                    </div>`;
            }

            try {
                const paper = await window.fetchDoiMetadata(val);
                currentFetchedPaper = paper;
                currentFetchedHTML = window.createPaperCardHTML(paper);

                if (doiPreviewContainer) {
                    doiPreviewContainer.innerHTML = `
                        <div class="alert alert-success bg-success bg-opacity-10 border-success text-success p-2 mb-3 small font-monospace">
                            <i class="bi bi-check-circle-fill me-1"></i> Tải thông tin DOI thành công! Xem trước bên dưới:
                        </div>
                        ${currentFetchedHTML}`;
                }

                window.showToast('Đã lấy thông tin bài báo thành công!');
            } catch (err) {
                console.error(err);
                if (doiPreviewContainer) {
                    doiPreviewContainer.innerHTML = `
                        <div class="alert alert-danger bg-danger bg-opacity-10 border-danger text-danger p-3 font-monospace">
                            <i class="bi bi-exclamation-diamond-fill me-2"></i> Không tìm thấy bài báo với DOI này hoặc lỗi kết nối API.
                            <div class="small mt-1 text-secondary">${err.message || ''}</div>
                        </div>`;
                }
                window.showToast('Không lấy được dữ liệu DOI');
            } finally {
                fetchDoiBtn.disabled = false;
                fetchDoiBtn.innerHTML = `<i class="bi bi-cloud-download me-1"></i> <span data-lang="vi">Tải dữ liệu DOI</span><span data-lang="en">Fetch Paper Data</span>`;
            }
        };

        fetchDoiBtn.addEventListener('click', handleDoiFetch);
        doiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleDoiFetch();
        });
    }

    if (addDoiToListBtn) {
        addDoiToListBtn.addEventListener('click', () => {
            if (!currentFetchedHTML) return;
            const list = document.getElementById('publishedPapersList');
            if (list) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = currentFetchedHTML.trim();
                const newCard = tempDiv.firstElementChild;
                list.insertBefore(newCard, list.firstChild);
                window.applyPubFilter();
                window.showToast('Đã thêm bài báo vào danh sách hiển thị!');
                newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    if (copyDoiHtmlBtn) {
        copyDoiHtmlBtn.addEventListener('click', () => {
            if (!currentFetchedHTML) return;
            window.copyToClipboard(currentFetchedHTML.trim(), copyDoiHtmlBtn);
        });
    }

    // =========================================================================
    // 7. Tutorials Live Filter & Search Engine
    // =========================================================================
    const tutSearch = document.getElementById('tutorialSearchInput');
    const tutFilters = document.querySelectorAll('.tut-filter-btn');
    const tutCards = document.querySelectorAll('.tutorial-item-card');

    let currentTutFilter = 'all';
    let currentTutQuery = '';

    function applyTutFilter() {
        if (!tutCards.length) return;
        tutCards.forEach(card => {
            const text = (card.innerText || card.textContent).toLowerCase();
            const tags = (card.getAttribute('data-tags') || '').toLowerCase();

            const matchesQuery = currentTutQuery === '' || text.includes(currentTutQuery);
            let matchesCategory = true;

            if (currentTutFilter === 're') {
                matchesCategory = tags.includes('ghidra') || tags.includes('android') || tags.includes('reverse');
            } else if (currentTutFilter === 'ai-sec') {
                matchesCategory = tags.includes('mia') || tags.includes('ai-security') || tags.includes('pytorch') || tags.includes('diffusion');
            } else if (currentTutFilter === 'network') {
                matchesCategory = tags.includes('snort') || tags.includes('suricata') || tags.includes('ids');
            } else if (currentTutFilter === 'crypto') {
                matchesCategory = tags.includes('crypto') || tags.includes('encryption');
            }

            if (matchesQuery && matchesCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (tutSearch) {
        tutSearch.addEventListener('input', (e) => {
            currentTutQuery = e.target.value.toLowerCase().trim();
            applyTutFilter();
        });
    }

    tutFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            tutFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTutFilter = btn.getAttribute('data-filter') || 'all';
            applyTutFilter();
        });
    });

    // =========================================================================
    // 8. Academic Toggle Drawers: Abstract & BibTeX
    // =========================================================================
    window.toggleAbstract = function(targetId, btnElement) {
        const box = document.getElementById(targetId);
        if (!box) return;
        box.classList.toggle('show');
        if (btnElement) {
            btnElement.classList.toggle('active');
        }
    };

    window.toggleBibtex = function(targetId, btnElement) {
        const box = document.getElementById(targetId);
        if (!box) return;
        box.classList.toggle('show');
        if (btnElement) {
            btnElement.classList.toggle('active');
        }
    };

    window.copyBibtex = function(textareaId, btnElement) {
        const textarea = document.getElementById(textareaId);
        if (!textarea) return;
        
        const code = textarea.value || textarea.textContent || '';
        navigator.clipboard.writeText(code.trim()).then(() => {
            window.showToast('BibTeX citation copied to clipboard!');
            if (btnElement) {
                const originalHtml = btnElement.innerHTML;
                btnElement.innerHTML = '<i class="bi bi-check2"></i> Copied!';
                btnElement.classList.add('text-success');
                setTimeout(() => {
                    btnElement.innerHTML = originalHtml;
                    btnElement.classList.remove('text-success');
                }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy BibTeX: ', err);
            window.showToast('Could not copy BibTeX automatically');
        });
    };

    // =========================================================================
    // 9. Global Copy to Clipboard Helper
    // =========================================================================
    window.copyToClipboard = function(text, element) {
        navigator.clipboard.writeText(text).then(() => {
            window.showToast(`Copied "${text}" to clipboard!`);
            if (element) {
                const originalHtml = element.innerHTML;
                element.innerHTML = '<i class="bi bi-check2"></i> Copied!';
                element.classList.add('text-success');
                setTimeout(() => {
                    element.innerHTML = originalHtml;
                    element.classList.remove('text-success');
                }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            window.showToast('Failed to copy to clipboard');
        });
    };
});

