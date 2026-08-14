export function renderHome() {
    const container = document.createElement('div');
    container.className = 'page-container page-home';
    container.innerHTML = `
        <div class="home-hero-content">
            <h1 class="page-title">Веб-разработка<br>полного цикла</h1>
            <p class="page-subtitle">Создаем современные SPA сайты на JavaScript и C# для вашего бизнеса.</p>
            <a href="#services" class="btn-primary">Наши услуги</a>
        </div>
    `;
    return container;
}