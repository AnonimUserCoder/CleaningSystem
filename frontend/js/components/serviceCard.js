function getCategoryBadge(category) {
    const badges = {
        'repair': { label: 'Ремонт', class: 'badge-repair' },
        'cleaning': { label: 'Клининг', class: 'badge-cleaning' },
        'montage': { label: 'Монтаж', class: 'badge-montage' }
    };
    return badges[category] || { label: 'Услуга', class: '' };
}

function getIconForService(category) {
    const icons = {
        'repair': '🧱',
        'cleaning': '✨',
        'montage': '🔧'
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
            <span class="service-icon">${icon}</span>
            <span class="badge ${badge.class}">${badge.label}</span>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.description}</p>
        <div class="card-footer">
            <span class="service-price">${service.price}</span>
            <a href="#contacts" class="btn-card">Заказать</a>
        </div>
    `;
    return card;
}