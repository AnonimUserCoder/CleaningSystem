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
    
    const btnTexts = {
        ru: 'Заказать',
        en: 'Book Now',
        fr: 'Commander'
    };
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