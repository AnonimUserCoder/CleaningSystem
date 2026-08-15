export function renderHome() {
    const container = document.createElement('div');
    container.className = 'page-container page-home';

    container.innerHTML = `
        <section class="hero-section">
            <div class="hero-badge">✨ Профессиональный сервис уюта и ремонта</div>
            <h1 class="page-title">Идеальный порядок и ремонт<br><span>для дома и офиса</span></h1>
            <p class="page-subtitle">
                Возьмём на себя клининг, косметическую отделку и монтаж оборудования. 
                Быстрый выезд мастера, фиксированная стоимость и гарантия.
            </p>
            <div class="hero-actions">
                <a href="#/contacts" class="btn-primary">Заказать услугу</a>
                <a href="#/services" class="btn-secondary">Смотреть все услуги →</a>
            </div>

            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-num">500+</span>
                    <span class="stat-desc">Выполненных заказов</span>
                </div>
                <div class="stat-item">
                    <span class="stat-num">4.9 ★</span>
                    <span class="stat-desc">Средний рейтинг</span>
                </div>
                <div class="stat-item">
                    <span class="stat-num">15 мин</span>
                    <span class="stat-desc">Расчёт стоимости</span>
                </div>
            </div>
        </section>

        <section class="features-section">
            <h2 class="section-title">Основной спектр услуг</h2>
            <div class="features-grid">
                
                <div class="feature-card">
                    <div class="feature-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" alt="Клининг и уборка" class="feature-img">
                        <span class="feature-badge">Клининг</span>
                    </div>
                    <div class="feature-body">
                        <h3>Клининг & Уборка</h3>
                        <p>Поддерживающая, генеральная и уборка после ремонта. Мойка окон и эко-средства.</p>
                        <a href="#/services" class="feature-link">Перейти в клининг →</a>
                    </div>
                </div>

                <div class="feature-card">
                    <div class="feature-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" alt="Косметический ремонт" class="feature-img">
                        <span class="feature-badge badge-repair">Ремонт</span>
                    </div>
                    <div class="feature-body">
                        <h3>Косметический ремонт</h3>
                        <p>Покраска стен, укладка ламината, поклейка обоев и подготовка поверхностей.</p>
                        <a href="#/services" class="feature-link">Смотреть отделку →</a>
                    </div>
                </div>

                <div class="feature-card">
                    <div class="feature-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80" alt="Установка и монтаж" class="feature-img">
                        <span class="feature-badge badge-montage">Монтаж</span>
                    </div>
                    <div class="feature-body">
                        <h3>Установка & Монтаж</h3>
                        <p>Сантехника, электрика, сборка мебели и подключение бытовой техники.</p>
                        <a href="#/services" class="feature-link">Вызвать мастера →</a>
                    </div>
                </div>

            </div>
        </section>
    `;

    return container;
}