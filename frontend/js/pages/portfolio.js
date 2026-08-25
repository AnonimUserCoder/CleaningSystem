export function renderPortfolio() {
    const container = document.createElement('div');
    container.className = 'page-container page-portfolio';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Выполненные объекты</h1>
            <p class="page-subtitle">Реальные кейсы нашей команды по уборке, сборке и реставрации.</p>
        </div>

        <div class="portfolio-grid">
            <div class="portfolio-card">
                <span class="portfolio-tag">Клининг</span>
                <h3>Генеральная уборка дома 120 м²</h3>
                <p>Глубокая очистка кухни, удаление налёта в сантехнике, влажная уборка всех комнат и мытье балкона.</p>
                <div class="portfolio-meta">⏱ Срок выполнения: 5 часов (35 €/час)</div>
            </div>

            <div class="portfolio-card">
                <span class="portfolio-tag">Сборка мебели</span>
                <h3>Сборка большой гардеробной и кровати</h3>
                <p>Сборка двуспальной кровати с подъёмным механизмом и установка модульного шкафа-купе с выравниванием дверей.</p>
                <div class="portfolio-meta">⏱ Срок выполнения: 1 день</div>
            </div>

            <div class="portfolio-card">
                <span class="portfolio-tag">Реставрация</span>
                <h3>Восстановление садовой скульптуры</h3>
                <p>Устранение сколов гипса, зачистка, грунтовка и нанесение защитного покрытия для скульптуры.</p>
                <div class="portfolio-meta">⏱ Срок выполнения: 2 дня</div>
            </div>
        </div>
    `;

    return container;
}