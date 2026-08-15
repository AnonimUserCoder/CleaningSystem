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
            <p>&copy; ${new Date().getFullYear()} BusinessServices. Все права защищены.</p>
        </div>
    `;
    return footer;
}

function getCategoryBadge(category) {
    const badges = {
        'repair': { label: 'Ремонт', class: 'badge-repair' },
        'cleaning': { label: 'Клининг', class: 'badge-cleaning' },
        'montage': { label: 'Монтаж', class: 'badge-montage' }
    };
    return badges[category] || { label: 'Услуга', class: 'badge-cleaning' };
}

export function renderServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const badge = getCategoryBadge(service.category);

    card.innerHTML = `
        <div class="card-header">
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

export function renderOrderForm() {
    const wrapper = document.createElement('div');
    wrapper.className = 'contacts-wrapper';
    wrapper.innerHTML = `
        <form class="order-form" id="service-order-form">
            <h3>Оставить заявку</h3>
            <div class="form-grid-2">
                <div class="form-group">
                    <label for="client-name">Ваше имя</label>
                    <input type="text" id="client-name" name="name" placeholder="Иван Иванов" required>
                </div>
                <div class="form-group">
                    <label for="client-phone">Телефон</label>
                    <input type="tel" id="client-phone" name="phone" placeholder="+7 (999) 000-00-00" required>
                </div>
            </div>
            <div class="form-group">
                <label for="service-select">Выберите услугу</label>
                <select id="service-select" name="service" required>
                    <option value="">-- Выберите категорию --</option>
                    <option value="cleaning">Клининг и уборка</option>
                    <option value="repair">Косметический ремонт</option>
                    <option value="montage">Установка и монтаж</option>
                </select>
            </div>
            <div class="form-group">
                <label for="client-comment">Комментарий к заказу</label>
                <textarea id="client-comment" name="comment" rows="4" placeholder="Опишите объём работ..."></textarea>
            </div>
            <button type="submit" class="btn-primary">Отправить заявку</button>
        </form>

        <div class="contacts-info">
            <h3>Контакты</h3>
            <p><strong>Телефон:</strong> +7 (800) 555-35-35</p>
            <p><strong>Email:</strong> info@business-services.ru</p>
            <p><strong>Режим работы:</strong> Пн-Вс: 08:00 – 21:00</p>
            <p><strong>Адрес:</strong> г. Москва, ул. Центральная, д. 10</p>
        </div>
    `;

    setTimeout(() => {
        const form = wrapper.querySelector('#service-order-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Спасибо! Ваша заявка принята. Наш менеджер свяжется с вами в течение 15 минут.');
                form.reset();
            });
        }
    }, 0);

    return wrapper;
}