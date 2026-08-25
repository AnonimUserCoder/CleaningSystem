export function renderHome() {
    const container = document.createElement('div');
    container.className = 'page-container page-home';

    container.innerHTML = `
        <section class="hero-section">
            <div class="hero-badge">✨ Сервис услуг для дома и помещений</div>
            <h1 class="page-title">Клининг, сборка мебели,<br><span>реставрация и переезды</span></h1>
            <p class="page-subtitle">
                Возьмём на себя бытовые задачи любой сложности. Быстрый выезд специалистов, 
                прозрачные тарифы в евро и аккуратное исполнение.
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
            <h2 class="section-title">Основные направления</h2>
            <div class="features-grid">
                
                <div class="feature-card">
                    <div class="feature-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" alt="Уборка и клининг" class="feature-img">
                        <span class="feature-badge">от 30 €/час</span>
                    </div>
                    <div class="feature-body">
                        <h3>Уборка & Клининг</h3>
                        <p>Поддерживающая, генеральная, глубокая уборка и мытье окон для дома и офиса.</p>
                        <a href="#/services" class="feature-link">Перейти в клининг →</a>
                    </div>
                </div>

                <div class="feature-card">
                    <div class="feature-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80" alt="Сборка мебели" class="feature-img">
                        <span class="feature-badge">от 20 €</span>
                    </div>
                    <div class="feature-body">
                        <h3>Сборка & Разборка мебели</h3>
                        <p>Сборка столов, стульев, комодов, кроватей и сложных гардеробных систем.</p>
                        <a href="#/services" class="feature-link">Вызвать мастера →</a>
                    </div>
                </div>

                <div class="feature-card">
                    <div class="feature-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Помощь при переезде" class="feature-img">
                        <span class="feature-badge">30-40 €/час</span>
                    </div>
                    <div class="feature-body">
                        <h3>Помощь при переезде</h3>
                        <p>Упаковка вещей, помощь с погрузкой, демонтаж мебели и уборка после переезда.</p>
                        <a href="#/services" class="feature-link">Узнать подробнее →</a>
                    </div>
                </div>

                <div class="feature-card">
                    <div class="feature-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80" alt="Реставрация декора" class="feature-img">
                        <span class="feature-badge">от 30 €</span>
                    </div>
                    <div class="feature-body">
                        <h3>Реставрация декора</h3>
                        <p>Реставрация и восстановление горшков, кашпо, скульптур и других декоративных изделий из гипса и керамики.</p>
                        <a href="#/services" class="feature-link">Узнать подробнее →</a>
                    </div>
                </div>

            </div>
        </section>
    `;

    return container;
}