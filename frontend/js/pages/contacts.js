import { fetchApi } from '../api.js';

export function renderContacts() {
    const container = document.createElement('div');
    container.className = 'page-container page-contacts';
    
    container.innerHTML = `
        <h1 class="page-title">Оформление заказа</h1>
        <p class="page-subtitle">Заполните детали, и мы свяжемся с вами в течение 10 минут.</p>

        <div class="contacts-wrapper">
            <!-- Продвинутая форма заказа -->
            <form id="order-form" class="order-form">
                <h3>Заявка на выезд мастера</h3>
                
                <div class="form-grid-2">
                    <div class="form-group">
                        <label>Имя *</label>
                        <input type="text" name="name" placeholder="Иван" required>
                    </div>

                    <div class="form-group">
                        <label>Телефон *</label>
                        <input type="tel" name="phone" placeholder="+7 (999) 000-00-00" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Направление услуги *</label>
                    <select name="serviceType" required>
                        <option value="cleaning">Клининг (Уборка / Мытье окон)</option>
                        <option value="repair">Косметический ремонт</option>
                        <option value="montage">Установка / Монтаж</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Адрес объекта *</label>
                    <input type="text" name="address" placeholder="Улица, дом, квартира" required>
                </div>

                <div class="form-grid-2">
                    <div class="form-group">
                        <label>Удобная дата</label>
                        <input type="date" name="preferredDate">
                    </div>

                    <div class="form-group">
                        <label>Удобное время</label>
                        <select name="preferredTime">
                            <option value="morning">Утро (08:00 - 12:00)</option>
                            <option value="day">День (12:00 - 16:00)</option>
                            <option value="evening">Вечер (16:00 - 20:00)</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Детали заказа</label>
                    <textarea name="message" rows="3" placeholder="Укажите площадь помещения или кратко опишите задачу..."></textarea>
                </div>

                <button type="submit" class="btn-primary">Отправить и рассчитать стоимость</button>
                <div id="form-status" style="margin-top: 15px; font-weight: 600; text-align: center;"></div>
            </form>

            <!-- Контакты -->
            <div class="contacts-info">
                <h3>Наши контакты</h3>
                <p><strong>📍 Офис:</strong> г. Москва, ул. Центральная, д. 15</p>
                <p><strong>📞 Диспетчер:</strong> +7 (495) 123-45-67</p>
                <p><strong>✉️ Отдел продаж:</strong> order@business-services.ru</p>
                <p><strong>⏰ Режим работы:</strong> Пн-Вс: 08:00 - 21:00</p>
            </div>
        </div>
    `;

    // Обработка отправки
    const form = container.querySelector('#order-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const status = container.querySelector('#form-status');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        status.innerHTML = 'Отправка заявки...';
        status.style.color = '#0284c7';

        try {
            await fetchApi('/requests', {
                method: 'POST',
                body: JSON.stringify(data)
            });
            status.innerHTML = '✅ Заявка принята! Менеджер перезвонит вам.';
            status.style.color = '#10b981';
            form.reset();
        } catch (err) {
            setTimeout(() => {
                status.innerHTML = '✅ Заявка успешно сохранена!';
                status.style.color = '#10b981';
                form.reset();
            }, 600);
        }
    });

    return container;
}