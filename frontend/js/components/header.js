export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="header-container">
            <a href="#" class="logo">Business<span>Services</span></a>
            <nav>
                <a href="#">Главная</a>
                <a href="#services">Услуги</a>
                <a href="#portfolio">Наши работы</a>
                <a href="#prices">Цены</a>
                <a href="#about">О нас</a>
                <a href="#contacts" class="btn-nav">Оставить заявку</a>
            </nav>
        </div>
    `;
    return header;
}