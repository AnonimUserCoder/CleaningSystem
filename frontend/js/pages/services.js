import { fetchApi } from '../api.js';
import { renderServiceCard } from '../components/serviceCard.js';

export function renderServices() {
    const container = document.createElement('div');
    container.className = 'page-container page-services';
    
    container.innerHTML = `
        <h1 class="page-title">Наши услуги</h1>
        <p class="page-subtitle">Ремонт, клининг и монтажные работы любого уровня сложности.</p>
        
        <!-- Вкладки-категории согласно схеме -->
        <div class="service-tabs">
            <button class="tab-btn active" data-category="all">Все услуги</button>
            <button class="tab-btn" data-category="repair">Косметический ремонт</button>
            <button class="tab-btn" data-category="cleaning">Клининг</button>
            <button class="tab-btn" data-category="montage">Установка / монтаж</button>
        </div>

        <div id="services-list">Загрузка...</div>
    `;

    // Список услуг по категориям из твоей схемы
    const mockServices = [
        // Косметический ремонт
        { category: 'repair', title: 'Покраска стен и потолков', description: 'Качественная шпаклевка и покраска помещений.', price: 'от 500 ₽/м²' },
        { category: 'repair', title: 'Укладка ламината / плинтусов', description: 'Быстрый демонтаж и укладка напольных покрытий.', price: 'от 700 ₽/м²' },
        
        // Клининг
        { category: 'cleaning', title: 'Генеральная уборка', description: 'Глубокая очистка всех поверхностей и сантехники.', price: 'от 6 000 ₽' },
        { category: 'cleaning', title: 'Уборка после ремонта', description: 'Удаление строительной пыли, следов краски и затирки.', price: 'от 10 000 ₽' },
        
        // Установка / монтаж
        { category: 'montage', title: 'Монтаж сантехники', description: 'Установка смесителей, раковин, унитазов.', price: 'от 2 500 ₽' },
        { category: 'montage', title: 'Сборка и монтаж мебели', description: 'Профессиональная сборка кухонь и шкафов.', price: 'от 3 000 ₽' }
    ];

    fetchApi('/services')
        .then(data => renderFilteredList(container, data, 'all'))
        .catch(() => renderFilteredList(container, mockServices, 'all'));

    // Логика переключения категорий
    container.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-category');
            renderFilteredList(container, mockServices, category);
        });
    });

    return container;
}

function renderFilteredList(container, items, category) {
    const list = container.querySelector('#services-list');
    if (!list) return;
    list.innerHTML = '';

    const filtered = category === 'all' 
        ? items 
        : items.filter(item => item.category === category);

    filtered.forEach(service => {
        list.appendChild(renderServiceCard(service));
    });
}