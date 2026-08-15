export function renderPortfolio() {
    const container = document.createElement('div');
    container.className = 'page-container page-portfolio';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Выполненные объекты</h1>
            <p class="page-subtitle">Реальные кейсы нашей команды с подробным описанием задач.</p>
        </div>

        <div class="portfolio-grid">
            <div class="portfolio-card">
                <span class="portfolio-tag">Клининг</span>
                <h3>Генеральная уборка квартиры 85 м²</h3>
                <p>Устранили въевшиеся загрязнения после аренды, провели химчистку мягкой мебели и отмыли панорамное остекление.</p>
                <div class="portfolio-meta">⏱ Срок выполнения: 6 часов</div>
            </div>

            <div class="portfolio-card">
                <span class="portfolio-tag">Ремонт</span>
                <h3>Косметическая отделка гостиной</h3>
                <p>Выравнивание стен, поклейка флизелиновых обоев, укладка кварцвинила и монтаж напольных плинтусов.</p>
                <div class="portfolio-meta">⏱ Срок выполнения: 4 дня</div>
            </div>

            <div class="portfolio-card">
                <span class="portfolio-tag">Монтаж</span>
                <h3>Замена сантехники в новостройке</h3>
                <p>Установка инсталляции, подключение подвесного унитаза, смесителей, гигиенического душа и водонагревателя.</p>
                <div class="portfolio-meta">⏱ Срок выполнения: 1 день</div>
            </div>
        </div>
    `;

    return container;
}