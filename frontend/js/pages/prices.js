export function renderPrices() {
    const container = document.createElement('div');
    container.className = 'page-container page-prices';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Услуги и примерные цены</h1>
            <p class="page-subtitle">Цены ориентировочные и могут меняться в зависимости от сложности работы, размера объекта и объёма услуг.</p>
        </div>

        <div class="prices-grid">
            <div class="price-card">
                <h3>Уборка и клининг</h3>
                <div class="price-val">от 30 €/час</div>
                <ul>
                    <li>✓ Поддерживающая уборка: <strong>30-35 €/час</strong></li>
                    <li>✓ Генеральная уборка: <strong>35-45 €/час</strong></li>
                    <li>✓ Глубокая уборка: <strong>40-50 €/час</strong></li>
                    <li>✓ Уборка после ремонта: <strong>4-10 €/м²</strong></li>
                    <li>✓ Уборка после переезда: <strong>от 150 €</strong></li>
                    <li>✓ Уборка перед сдачей/выездом: <strong>от 150 €</strong></li>
                    <li>✓ Уборка офисов: <strong>25-35 €/час</strong></li>
                    <li>✓ Мытьё окон: <strong>3-6 €/окно (30-45 €/ч)</strong></li>
                    <li>✓ Балкон / терраса: <strong>от 30-80 €</strong></li>
                </ul>
                <a href="#/contacts" class="btn-primary">Заказать</a>
            </div>

            <div class="price-card featured">
                <div class="popular-badge">Популярно</div>
                <h3>Сборка и разборка мебели</h3>
                <div class="price-val">от 20 €</div>
                <ul>
                    <li>✓ Сборка стула: <strong>от 20 €</strong></li>
                    <li>✓ Сборка небольшого стола: <strong>от 30-50 €</strong></li>
                    <li>✓ Сборка комода: <strong>от 40-70 €</strong></li>
                    <li>✓ Сборка кровати: <strong>от 50-80 €</strong></li>
                    <li>✓ Сборка шкафа: <strong>от 80-200 €</strong></li>
                    <li>✓ Большой шкаф / гардеробная: <strong>по расчёту</strong></li>
                    <li>✓ Разборка мебели: <strong>от 30-100 €</strong></li>
                    <li>✓ Сборка/разборка при переезде: <strong>30-40 €/час</strong></li>
                </ul>
                <a href="#/contacts" class="btn-primary">Заказать</a>
            </div>

            <div class="price-card">
                <h3>Реставрация декора</h3>
                <div class="price-val">от 30 €</div>
                <ul>
                    <li>✓ Небольшой горшок / кашпо: <strong>от 30-50 €</strong></li>
                    <li>✓ Средний декоративный горшок: <strong>от 50-100 €</strong></li>
                    <li>✓ Небольшая скульптура: <strong>от 80-150 €</strong></li>
                    <li>✓ Большая садовая/интерьерная: <strong>от 150 €</strong></li>
                    <li>✓ Гипс, керамика: <strong>по расчёту</strong></li>
                    <li>✓ Очистка и обновление декора: <strong>по расчёту</strong></li>
                </ul>
                <a href="#/contacts" class="btn-primary">Заказать</a>
            </div>

            <div class="price-card">
                <h3>Помощь при переезде</h3>
                <div class="price-val">от 30 €/час</div>
                <ul>
                    <li>✓ Помощь при переезде: <strong>30-40 €/час</strong></li>
                    <li>✓ Сборка и разборка мебели: <strong>от 35 €/час</strong></li>
                    <li>✓ Упаковка вещей: <strong>по расчёту</strong></li>
                    <li>✓ Подготовка помещения: <strong>по расчёту</strong></li>
                    <li>✓ Уборка после переезда: <strong>от 150 €</strong></li>
                </ul>
                <a href="#/contacts" class="btn-primary">Заказать</a>
            </div>
        </div>
    `;

    return container;
}