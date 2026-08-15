import { renderServiceCard } from '../components/index.js';

const mockServices = [
    { id: 1, title: 'Генеральная уборка', category: 'cleaning', price: 'от 4 500 ₽', description: 'Глубокая очистка всех поверхностей, обеспыливание, мытье полов и дезинфекция сантехники.' },
    { id: 2, title: 'Косметический ремонт', category: 'repair', price: 'от 12 000 ₽', description: 'Шпаклевка, поклейка обоев, покраска стен и укладка напольных покрытий.' },
    { id: 3, title: 'Монтаж сантехники', category: 'montage', price: 'от 2 500 ₽', description: 'Установка смесителей, раковин, унитазов, подключение стиральных и посудомоечных машин.' },
    { id: 4, title: 'Уборка после ремонта', category: 'cleaning', price: 'от 6 000 ₽', description: 'Устранение строительной пыли, следов краски, затирки и цемента.' },
    { id: 5, title: 'Электромонтажные работы', category: 'montage', price: 'от 1 800 ₽', description: 'Установка и замена розеток, выключателей, люстр и сборка электрощитков.' },
    { id: 6, title: 'Отделка балконов', category: 'repair', price: 'от 15 000 ₽', description: 'Утепление, обшивка вагонои или панелями, укладка чистового пола.' }
];

export function renderServices() {
    const container = document.createElement('div');
    container.className = 'page-container page-services';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Наши услуги</h1>
            <p class="page-subtitle">Полный спектр работ по уборке, ремонту и обустройству вашего дома.</p>
        </div>

        <div class="service-tabs">
            <button class="tab-btn active" data-category="all">Все услуги</button>
            <button class="tab-btn" data-category="cleaning">✨ Клининг</button>
            <button class="tab-btn" data-category="repair">🧱 Ремонт</button>
            <button class="tab-btn" data-category="montage">🔧 Монтаж</button>
        </div>

        <div id="services-list"></div>
    `;

    const listElement = container.querySelector('#services-list');

    function displayServices(category = 'all') {
        listElement.innerHTML = '';
        const filtered = category === 'all' 
            ? mockServices 
            : mockServices.filter(s => s.category === category);

        filtered.forEach(service => {
            listElement.appendChild(renderServiceCard(service));
        });
    }

    setTimeout(() => {
        const tabs = container.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                tabs.forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                displayServices(e.target.dataset.category);
            });
        });
    }, 0);

    displayServices();
    return container;
}