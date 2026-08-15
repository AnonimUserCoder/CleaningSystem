export function renderPrices() {
    const container = document.createElement('div');
    container.className = 'page-container page-prices';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Тарифы и цены</h1>
            <p class="page-subtitle">Фиксированная стоимость. Никаких скрытых наценок после начала работ.</p>
        </div>

        <div class="prices-grid">
            <div class="price-card">
                <h3>Минимум</h3>
                <div class="price-val">от 2 500 ₽</div>
                <p>Для небольших разовых задач и мелкого ремонта.</p>
                <ul>
                    <li>✓ Выезд мастера в течение часа</li>
                    <li>✓ Устранение мелких поломок</li>
                    <li>✓ Быстрый поддерживающий клининг</li>
                </ul>
                <a href="#/contacts" class="btn-primary">Заказать</a>
            </div>

            <div class="price-card featured">
                <div class="popular-badge">Популярно</div>
                <h3>Комплекс</h3>
                <div class="price-val">от 8 000 ₽</div>
                <p>Оптимальный выбор для обновления интерьера или клининга.</p>
                <ul>
                    <li>✓ Генеральная уборка помещений</li>
                    <li>✓ Косметический ремонт комнат</li>
                    <li>✓ Монтаж оборудования и электрики</li>
                </ul>
                <a href="#/contacts" class="btn-primary">Заказать</a>
            </div>
        </div>
    `;

    return container;
}