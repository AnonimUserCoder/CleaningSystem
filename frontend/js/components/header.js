export function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    const currentLang = localStorage.getItem('app_lang') || 'ru';

    const translations = {
        ru: {
            home: 'Главная',
            services: 'Услуги',
            portfolio: 'Наши работы',
            prices: 'Цены',
            about: 'О нас',
            btnRequest: 'Оставить заявку'
        },
        en: {
            home: 'Home',
            services: 'Services',
            portfolio: 'Portfolio',
            prices: 'Prices',
            about: 'About Us',
            btnRequest: 'Book Now'
        },
        fr: {
            home: 'Accueil',
            services: 'Services',
            portfolio: 'Portfolio',
            prices: 'Tarifs',
            about: 'À propos',
            btnRequest: 'Demander un devis'
        }
    };

    const t = translations[currentLang] || translations.ru;

    headerContainer.innerHTML = `
        <header class="site-header">
            <div class="header-container" style="display: flex; align-items: center; justify-content: space-between;">
                <a href="#/" class="logo">Business<span>Services</span></a>
                
                <nav class="main-nav" style="display: flex; align-items: center; gap: 15px;">
                    <a href="#/">${t.home}</a>
                    <a href="#/services">${t.services}</a>
                    <a href="#/portfolio">${t.portfolio}</a>
                    <a href="#/prices">${t.prices}</a>
                    <a href="#/about">${t.about}</a>
                    <a href="#/contacts" class="btn-primary" style="margin-left: 10px;">${t.btnRequest}</a>
                    
                    <select id="lang-select" style="
                        background: #0f172a;
                        color: #ffffff;
                        border: 1px solid #38bdf8;
                        border-radius: 6px;
                        padding: 6px 10px;
                        font-size: 14px;
                        cursor: pointer;
                        margin-left: 10px;
                        display: inline-block;
                        z-index: 999;
                    ">
                        <option value="ru" ${currentLang === 'ru' ? 'selected' : ''}>RU</option>
                        <option value="en" ${currentLang === 'en' ? 'selected' : ''}>EN</option>
                        <option value="fr" ${currentLang === 'fr' ? 'selected' : ''}>FR</option>
                    </select>
                </nav>
            </div>
        </header>
    `;

    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            localStorage.setItem('app_lang', e.target.value);
            window.location.reload();
        });
    }
}