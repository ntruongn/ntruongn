/**
 * Interactive Script for ntruongn Website
 * Cyber/AI Researcher Portfolio
 * Features: Bilingual i18n (VI/EN), Dark/Light Mode, Terminal Tabs, Live Filters, Clipboard Copy
 */

document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. Bilingual (VI / EN) Language Switcher
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
                ? 'Tìm kiếm theo tiêu đề, hội nghị, từ khóa (MIA, Android, IDS)...' 
                : 'Search by title, conference, venue, keywords (e.g. MIA, Android, IDS)...';
        }

        const tutSearch = document.getElementById('tutorialSearchInput');
        if (tutSearch) {
            tutSearch.placeholder = lang === 'vi'
                ? 'Tìm kiếm bài hướng dẫn (Ghidra, Snort, PyTorch, MIA, Jadx)...'
                : 'Search tutorials (e.g. Ghidra, Snort, PyTorch, MIA, Jadx)...';
        }
    }

    const currentLang = localStorage.getItem('site_lang') || 'vi';
    updateLanguageUI(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const activeLang = document.documentElement.getAttribute('data-lang') || 'vi';
            const nextLang = activeLang === 'vi' ? 'en' : 'vi';
            updateLanguageUI(nextLang);
        });
    }

    // =========================================================================
    // 2. Dark / Light Theme Toggle Handler
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
            themeToggleBtn?.setAttribute('title', 'Switch to Light Mode');
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
        });
    }

    // =========================================================================
    // 3. Navbar Scroll Effect & Back-To-Top
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
    // 4. Interactive Terminal Tabs (Home Page)
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
    // 5. Global Copy to Clipboard Helper
    // =========================================================================
    window.copyToClipboard = function(text, element) {
        navigator.clipboard.writeText(text).then(() => {
            const originalHtml = element.innerHTML;
            element.innerHTML = '<i class="bi bi-check2"></i> Copied!';
            element.classList.add('text-success');
            setTimeout(() => {
                element.innerHTML = originalHtml;
                element.classList.remove('text-success');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
});
