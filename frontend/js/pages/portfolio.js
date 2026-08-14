export function renderPortfolio() {
    const container = document.createElement('div');
    container.className = 'page-container page-portfolio';
    
    container.innerHTML = `
        <h1 class="page-title">Наши работы</h1>
        <p class="page-subtitle">Реальные примеры выполненных заказов по ремонту, клинингу и монтажу.</p>
        
        <div class="portfolio-grid">
            <div class="portfolio-card">
                <div class="portfolio-tag">Клининг</div>
                <h3>Генеральная уборка квартиры 85м²</h3>
                <p>Устранили пыль после черновых работ, отмыли панорамное остекление и сантехнику.</p>
                <div class="portfolio-meta">⏱ Время: 6 часов</div>
            </div>

            <div class="portfolio-card">
                <div class="portfolio-tag">Ремонт</div>
                <h3>Косметический ремонт гостиной</h3>
                <p>Шпаклевка стен, поклейка дизайнерских обоев, укладка кварцвинила и монтаж плинтусов.</p>
                <div class="portfolio-meta">⏱ Время: 4 дня</div>
            </div>

            <div class="portfolio-card">
                <div class="portfolio-tag">Монтаж</div>
                <h3>Установка комплекта сантехники</h3>
                <p>Монтаж инсталляции, подвесного унитаза, смесителей и подключение стиральной машины.</p>
                <div class="portfolio-meta">⏱ Время: 5 часов</div>
            </div>
        </div>
    `;
    return container;
}