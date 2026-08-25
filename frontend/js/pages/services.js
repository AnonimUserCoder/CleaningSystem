import { renderServiceCard } from '../components/index.js';

const mockServices = [
    // УБОРКА И КЛИНИНГ (9 позиций)
    { id: 1, title: 'Поддерживающая уборка квартир и домов', category: 'cleaning', price: '30-35 €/час', description: 'Регулярная поддержание чистоты, пылесос, влажная уборка поверхностей и сантехники.' },
    { id: 2, title: 'Генеральная уборка', category: 'cleaning', price: '35-45 €/час', description: 'Тщательная очистка всех труднодоступных мест, кухонного гарнитура и бытовой техники.' },
    { id: 3, title: 'Глубокая уборка', category: 'cleaning', price: '40-50 €/час', description: 'Максимально подробная дезинфекция и глубокое удаление застарелых загрязнений.' },
    { id: 4, title: 'Уборка после ремонта', category: 'cleaning', price: '4-10 €/м²', description: 'Удаление строительной пыли, следов красок, затирки и цемента.' },
    { id: 5, title: 'Уборка после переезда', category: 'cleaning', price: 'от 150 €', description: 'Полная уборка помещения после выезда и транспортировки вещей.' },
    { id: 6, title: 'Уборка перед сдачей или после выезда жильцов', category: 'cleaning', price: 'от 150 €', description: 'Комплексная подготовка объекта к новым арендаторам.' },
    { id: 7, title: 'Уборка офисов и коммерческих помещений', category: 'cleaning', price: '25-35 €/час', description: 'Поддержание порядка на рабочих местах, в зонах отдыха и с/у.' },
    { id: 8, title: 'Мытьё окон', category: 'cleaning', price: '3-6 € за окно / 30-45 €/час', description: 'Профессиональная мойка рам, стёкол и подоконников.' },
    { id: 9, title: 'Уборка балкона или террасы', category: 'cleaning', price: 'от 30-80 €', description: 'Очистка балконов, лоджий и террас от пыли и загрязнений.' },

    // СБОРКА И РАЗБОРКА МЕБЕЛИ (8 позиций)
    { id: 10, title: 'Сборка стула', category: 'furniture', price: 'от 20 €', description: 'Сборка барных, офисных и кухонных стульев.' },
    { id: 11, title: 'Сборка небольшого стола', category: 'furniture', price: 'от 30-50 €', description: 'Сборка журнальных, письменных и обеденных столов.' },
    { id: 12, title: 'Сборка комода', category: 'furniture', price: 'от 40-70 €', description: 'Сборка каркаса, установка и регулировка выдвижных ящиков.' },
    { id: 13, title: 'Сборка кровати', category: 'furniture', price: 'от 50-80 €', description: 'Сборка основания, изголовья и подъемных механизмов.' },
    { id: 14, title: 'Сборка шкафа', category: 'furniture', price: 'от 80-200 €', description: 'Сборка корпуса, установка дверей и настройка фурнитуры.' },
    { id: 15, title: 'Большой шкаф / гардеробная', category: 'furniture', price: 'по предварительному расчёту', description: 'Монтаж сложной модульной мебели и гардеробных систем.' },
    { id: 16, title: 'Разборка мебели', category: 'furniture', price: 'от 30-100 €', description: 'Аккуратный демонтаж мебели перед транспортировкой или ремонтом.' },
    { id: 17, title: 'Сборка и разборка мебели при переезде', category: 'furniture', price: '30-40 €/час', description: 'Оперативные работы по сборке/разборке в процессе переезда.' },

    // РЕСТАВРАЦИЯ ДЕКОРАТИВНЫХ ИЗДЕЛИЙ (6 позиций)
    { id: 18, title: 'Реставрация небольшого горшка или кашпо', category: 'restoration', price: 'от 30-50 €', description: 'Восстановление мелких трещин, сколов и покраска.' },
    { id: 19, title: 'Реставрация среднего декоративного горшка', category: 'restoration', price: 'от 50-100 €', description: 'Восстановление целостности и декоративного слоя.' },
    { id: 20, title: 'Восстановление небольшой декоративной скульптуры', category: 'restoration', price: 'от 80-150 €', description: 'Точечная реставрация и укрепительные работы.' },
    { id: 21, title: 'Реставрация большой садовой или интерьерной скульптуры', category: 'restoration', price: 'от 150 €', description: 'Комплексное обновление крупногабаритных фигур.' },
    { id: 22, title: 'Сложная реставрация изделий из гипса, керамики и других материалов', category: 'restoration', price: 'по предварительному расчёту', description: 'Индивидуальное восстановление ценных и хрупких изделий.' },
    { id: 23, title: 'Очистка, подготовка и обновление декоративных изделий', category: 'restoration', price: 'по предварительному расчёту', description: 'Профессиональная бережная очистка и нанесение защитных покрытий.' },

    // ПОМОЩЬ ПРИ ПЕРЕЕЗДЕ (5 позиций)
    { id: 24, title: 'Помощь при переезде', category: 'relocation', price: '30-40 €/час', description: 'Погрузочно-разгрузочные работы и сопровождение переезда.' },
    { id: 25, title: 'Сборка и разборка мебели при переезде', category: 'relocation', price: 'от 35 €/час', description: 'Подготовка мебели к перевозке и её сборка на новом месте.' },
    { id: 26, title: 'Упаковка вещей', category: 'relocation', price: 'по предварительному расчёту', description: 'Безопасная упаковывание коробок и хрупких предметов.' },
    { id: 27, title: 'Подготовка помещения к переезду', category: 'relocation', price: 'по предварительному расчёту', description: 'Освобождение комнат, расстановка и организация пространства.' },
    { id: 28, title: 'Уборка после переезда', category: 'relocation', price: 'от 150 €', description: 'Чистка и уборка помещения после выноса всех вещей.' }
];

export function renderServices() {
    const container = document.createElement('div');
    container.className = 'page-container page-services';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Услуги для дома и помещений</h1>
            <p class="page-subtitle">Полный перечень бытовых, клининговых и реставрационных услуг.</p>
        </div>

        <div class="service-tabs">
            <button class="tab-btn active" data-category="all">Все услуги (${mockServices.length})</button>
            <button class="tab-btn" data-category="cleaning">✨ Уборка и клининг</button>
            <button class="tab-btn" data-category="furniture">🪑 Сборка мебели</button>
            <button class="tab-btn" data-category="restoration">🎨 Реставрация</button>
            <button class="tab-btn" data-category="relocation">📦 Помощь при переезде</button>
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