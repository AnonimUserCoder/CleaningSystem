export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="header-container">
            <a href="#/" class="logo">Business<span>Services</span></a>
            <nav>
                <a href="#/">Главная</a>
                <a href="#/services">Услуги</a>
                <a href="#/portfolio">Наши работы</a>
                <a href="#/prices">Цены</a>
                <a href="#/about">О нас</a>
                <a href="#/contacts" class="btn-nav">Оставить заявку</a>
            </nav>
        </div>
    `;
    return header;
}

export function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; ${new Date().getFullYear()} BusinessServices. (C) Karlos Hakobyan. Все права защищены.</p>
        </div>
    `;
    return footer;
}

function getCategoryBadge(category) {
    const badges = {
        'cleaning': { label: 'Клининг', class: 'badge-cleaning' },
        'furniture': { label: 'Мебель', class: 'badge-montage' },
        'restoration': { label: 'Реставрация', class: 'badge-repair' },
        'relocation': { label: 'Переезд', class: 'badge-cleaning' }
    };
    return badges[category] || { label: 'Услуга', class: 'badge-cleaning' };
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
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const badge = getCategoryBadge(service.category);
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
            <a href="#/contacts" class="btn-card">Заказать</a>
        </div>
    `;
    return card;
}