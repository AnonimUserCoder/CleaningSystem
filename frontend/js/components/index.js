export function renderHeader() {
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

    const header = document.createElement('header');
    header.innerHTML = `
        <div class="header-container" style="display: flex; align-items: center; justify-content: space-between;">
            <a href="#/" class="logo">Business<span>Services</span></a>
            <nav style="display: flex; align-items: center; gap: 12px;">
                <a href="#/">${t.home}</a>
                <a href="#/services">${t.services}</a>
                <a href="#/portfolio">${t.portfolio}</a>
                <a href="#/prices">${t.prices}</a>
                <a href="#/about">${t.about}</a>
                <a href="#/contacts" class="btn-nav">${t.btnRequest}</a>
                
                <select id="lang-select" style="
                    background: #0f172a;
                    color: #ffffff;
                    border: 1px solid #38bdf8;
                    border-radius: 6px;
                    padding: 4px 8px;
                    font-size: 14px;
                    cursor: pointer;
                    margin-left: 8px;
                ">
                    <option value="ru" ${currentLang === 'ru' ? 'selected' : ''}>RU</option>
                    <option value="en" ${currentLang === 'en' ? 'selected' : ''}>EN</option>
                    <option value="fr" ${currentLang === 'fr' ? 'selected' : ''}>FR</option>
                </select>
            </nav>
        </div>
    `;

    const langSelect = header.querySelector('#lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            localStorage.setItem('app_lang', e.target.value);
            window.location.reload();
        });
    }

    return header;
}

export function renderFooter() {
    const currentLang = localStorage.getItem('app_lang') || 'ru';
    
    const rightsMap = {
        ru: 'Все права защищены.',
        en: 'All rights reserved.',
        fr: 'Tous droits réservés.'
    };
    const rightsText = rightsMap[currentLang] || rightsMap.ru;

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; ${new Date().getFullYear()} BusinessServices. (C) Karlos Hakobyan. ${rightsText}</p>
        </div>
    `;
    return footer;
}

function getCategoryBadge(category, lang = 'ru') {
    const badges = {
        ru: {
            'cleaning': { label: 'Клининг', class: 'badge-cleaning' },
            'furniture': { label: 'Мебель', class: 'badge-montage' },
            'restoration': { label: 'Реставрация', class: 'badge-repair' },
            'relocation': { label: 'Переезд', class: 'badge-cleaning' }
        },
        en: {
            'cleaning': { label: 'Cleaning', class: 'badge-cleaning' },
            'furniture': { label: 'Furniture', class: 'badge-montage' },
            'restoration': { label: 'Restoration', class: 'badge-repair' },
            'relocation': { label: 'Relocation', class: 'badge-cleaning' }
        },
        fr: {
            'cleaning': { label: 'Nettoyage', class: 'badge-cleaning' },
            'furniture': { label: 'Meubles', class: 'badge-montage' },
            'restoration': { label: 'Restauration', class: 'badge-repair' },
            'relocation': { label: 'Déménagement', class: 'badge-cleaning' }
        }
    };

    const currentBadges = badges[lang] || badges.ru;
    const defaultLabel = lang === 'fr' ? 'Service' : (lang === 'en' ? 'Service' : 'Услуга');

    return currentBadges[category] || { label: defaultLabel, class: 'badge-cleaning' };
}

function getIconForService(category) {
    const icons = {
        'cleaning': '✨',
        'furniture': '🪑',
        'restoration': '🎨',
        'relocation': '📦'
    };
    return icons[category] || '🛠️';
}

export function renderServiceCard(service) {
    const currentLang = localStorage.getItem('app_lang') || 'ru';
    const btnTexts = { ru: 'Заказать', en: 'Book Now', fr: 'Commander' };
    const btnText = btnTexts[currentLang] || btnTexts.ru;

    const card = document.createElement('div');
    card.className = 'service-card';
    
    const badge = getCategoryBadge(service.category, currentLang);
    const icon = getIconForService(service.category);

    card.innerHTML = `
        <div class="card-header">
            <span class="service-icon" style="font-size: 1.5rem;">${icon}</span>
            <span class="badge ${badge.class}">${badge.label}</span>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.description}</p>
        <div class="card-footer">
            <span class="service-price">${service.price}</span>
            <a href="#/contacts" class="btn-card">${btnText}</a>
        </div>
    `;
    return card;
}