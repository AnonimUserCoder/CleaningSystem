export function renderPrices() {
    const container = document.createElement('div');
    container.className = 'page-container page-prices';
    
    container.innerHTML = `
        <h1 class="page-title">Прозрачные цены</h1>
        <p class="page-subtitle">Фиксированная стоимость без скрытых наценок и переплат.</p>
        
        <div class="prices-grid">
            <div class="price-card">
                <h3>Экспресс</h3>
                <div class="price-val">от 2 500 ₽</div>
                <p>Мелкий монтаж и быстрое обслуживание</p>
                <ul>
                    <li>✓ Замена смесителей / розеток</li>
                    <li>✓ Поддерживающая уборка</li>
                    <li>✓ Выезд в день обращения</li>
                </ul>
                <a href="#contacts" class="btn-primary">Заказать</a>
            </div>

            <div class="price-card featured">
                <div class="popular-badge">Популярно</div>
                <h3>Комплекс</h3>
                <div class="price-val">от 7 500 ₽</div>
                <p>Полный порядок и обновление интерьера</p>
                <ul>
                    <li>✓ Генеральная уборка</li>
                    <li>✓ Косметическая отделка</li>
                    <li>✓ Проверка коммуникаций</li>
                </ul>
                <a href="#contacts" class="btn-primary">Заказать</a>
            </div>
        </div>
    `;
    return container;
}