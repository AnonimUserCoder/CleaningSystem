export function renderAbout() {
    const container = document.createElement('div');
    container.className = 'page-container page-about';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">О нашей компании</h1>
            <p class="page-subtitle">Предоставляем бытовые и ремонтные услуги высокого уровня с 2020 года.</p>
        </div>

        <div class="portfolio-card" style="max-width: 800px; margin: 0 auto;">
            <p style="font-size: 1.05rem; line-height: 1.8; color: #475569; margin-bottom: 16px;">
                Мы объединили специалистов по клинингу, строительной отделке и инженерному монтажу, чтобы предоставлять комплексный сервис в одном окне.
            </p>
            <p style="font-size: 1.05rem; line-height: 1.8; color: #475569;">
                Наш приоритет — прозрачное ценообразование, аккуратность во всем и соблюдение согласованных сроков.
            </p>
        </div>
    `;

    return container;
}