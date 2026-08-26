export function renderPrices() {
    const lang = localStorage.getItem('app_lang') || 'ru';

    const translations = {
        ru: {
            title: 'Услуги и примерные цены',
            subtitle: 'Цены ориентировочные и могут меняться в зависимости от сложности работы, размера объекта и объёма услуг.',
            btnOrder: 'Заказать',
            popularBadge: 'Популярно',

            cleaningTitle: 'Уборка и клининг',
            cleaningPrice: 'от 30 €/час',
            cleaningList: [
                '✓ Поддерживающая уборка: <strong>30-35 €/час</strong>',
                '✓ Генеральная уборка: <strong>35-45 €/час</strong>',
                '✓ Глубокая уборка: <strong>40-50 €/час</strong>',
                '✓ Уборка после ремонта: <strong>4-10 €/м²</strong>',
                '✓ Уборка после переезда: <strong>от 150 €</strong>',
                '✓ Уборка перед сдачей/выездом: <strong>от 150 €</strong>',
                '✓ Уборка офисов: <strong>25-35 €/час</strong>',
                '✓ Мытьё окон: <strong>3-6 €/окно (30-45 €/ч)</strong>',
                '✓ Балкон / терраса: <strong>от 30-80 €</strong>'
            ],

            furnitureTitle: 'Сборка и разборка мебели',
            furniturePrice: 'от 20 €',
            furnitureList: [
                '✓ Сборка стула: <strong>от 20 €</strong>',
                '✓ Сборка небольшого стола: <strong>от 30-50 €</strong>',
                '✓ Сборка комода: <strong>от 40-70 €</strong>',
                '✓ Сборка кровати: <strong>от 50-80 €</strong>',
                '✓ Сборка шкафа: <strong>от 80-200 €</strong>',
                '✓ Большой шкаф / гардеробная: <strong>по расчёту</strong>',
                '✓ Разборка мебели: <strong>от 30-100 €</strong>',
                '✓ Сборка/разборка при переезде: <strong>30-40 €/час</strong>'
            ],

            restorationTitle: 'Реставрация декора',
            restorationPrice: 'от 30 €',
            restorationList: [
                '✓ Небольшой горшок / кашпо: <strong>от 30-50 €</strong>',
                '✓ Средний декоративный горшок: <strong>от 50-100 €</strong>',
                '✓ Небольшая скульптура: <strong>от 80-150 €</strong>',
                '✓ Большая садовая/интерьерная: <strong>от 150 €</strong>',
                '✓ Гипс, керамика: <strong>по расчёту</strong>',
                '✓ Очистка и обновление декора: <strong>по расчёту</strong>'
            ],

            relocationTitle: 'Помощь при переезде',
            relocationPrice: 'от 30 €/час',
            relocationList: [
                '✓ Помощь при переезде: <strong>30-40 €/час</strong>',
                '✓ Сборка и разборка мебели: <strong>от 35 €/час</strong>',
                '✓ Упаковка вещей: <strong>по расчёту</strong>',
                '✓ Подготовка помещения: <strong>по расчёту</strong>',
                '✓ Уборка после переезда: <strong>от 150 €</strong>'
            ]
        },
        en: {
            title: 'Services & Estimated Prices',
            subtitle: 'Prices are estimated and may vary depending on job complexity, property size, and service scope.',
            btnOrder: 'Book Now',
            popularBadge: 'Popular',

            cleaningTitle: 'Cleaning & Housekeeping',
            cleaningPrice: 'from 30 €/hr',
            cleaningList: [
                '✓ Standard cleaning: <strong>30-35 €/hr</strong>',
                '✓ Deep cleaning: <strong>35-45 €/hr</strong>',
                '✓ Heavy-duty cleaning: <strong>40-50 €/hr</strong>',
                '✓ Post-renovation cleaning: <strong>4-10 €/m²</strong>',
                '✓ Post-move cleaning: <strong>from 150 €</strong>',
                '✓ Pre-tenancy/Move-out cleaning: <strong>from 150 €</strong>',
                '✓ Office cleaning: <strong>25-35 €/hr</strong>',
                '✓ Window washing: <strong>3-6 €/window (30-45 €/hr)</strong>',
                '✓ Balcony / Terrace: <strong>from 30-80 €</strong>'
            ],

            furnitureTitle: 'Furniture Assembly & Disassembly',
            furniturePrice: 'from 20 €',
            furnitureList: [
                '✓ Chair assembly: <strong>from 20 €</strong>',
                '✓ Small table assembly: <strong>from 30-50 €</strong>',
                '✓ Dresser assembly: <strong>from 40-70 €</strong>',
                '✓ Bed assembly: <strong>from 50-80 €</strong>',
                '✓ Wardrobe assembly: <strong>from 80-200 €</strong>',
                '✓ Walk-in wardrobe / closet: <strong>by estimate</strong>',
                '✓ Furniture disassembly: <strong>from 30-100 €</strong>',
                '✓ Assembly/disassembly for moves: <strong>30-40 €/hr</strong>'
            ],

            restorationTitle: 'Decor Restoration',
            restorationPrice: 'from 30 €',
            restorationList: [
                '✓ Small pot / planter: <strong>from 30-50 €</strong>',
                '✓ Medium decorative pot: <strong>from 50-100 €</strong>',
                '✓ Small sculpture: <strong>from 80-150 €</strong>',
                '✓ Large garden/interior figure: <strong>from 150 €</strong>',
                '✓ Gypsum, ceramics: <strong>by estimate</strong>',
                '✓ Decor cleaning & renewal: <strong>by estimate</strong>'
            ],

            relocationTitle: 'Relocation Assistance',
            relocationPrice: 'from 30 €/hr',
            relocationList: [
                '✓ Moving assistance: <strong>30-40 €/hr</strong>',
                '✓ Furniture assembly & disassembly: <strong>from 35 €/hr</strong>',
                '✓ Item packing: <strong>by estimate</strong>',
                '✓ Room preparation: <strong>by estimate</strong>',
                '✓ Post-move cleaning: <strong>from 150 €</strong>'
            ]
        },
        fr: {
            title: 'Services et tarifs estimatifs',
            subtitle: 'Les prix sont indicatifs et peuvent varier selon la complexité des travaux et la superficie du local.',
            btnOrder: 'Commander',
            popularBadge: 'Populaire',

            cleaningTitle: 'Nettoyage et entretien',
            cleaningPrice: 'à partir de 30 €/h',
            cleaningList: [
                '✓ Entretien régulier: <strong>30-35 €/h</strong>',
                '✓ Nettoyage général: <strong>35-45 €/h</strong>',
                '✓ Nettoyage en profondeur: <strong>40-50 €/h</strong>',
                '✓ Nettoyage fin de chantier: <strong>4-10 €/m²</strong>',
                '✓ Nettoyage après déménagement: <strong>à partir de 150 €</strong>',
                '✓ Nettoyage état des lieux: <strong>à partir de 150 €</strong>',
                '✓ Nettoyage de bureaux: <strong>25-35 €/h</strong>',
                '✓ Lavage de vitres: <strong>3-6 €/fenêtre (30-45 €/h)</strong>',
                '✓ Balcon / terrasse: <strong>de 30 à 80 €</strong>'
            ],

            furnitureTitle: 'Montage et démontage de meubles',
            furniturePrice: 'à partir de 20 €',
            furnitureList: [
                '✓ Montage de chaise: <strong>à partir de 20 €</strong>',
                '✓ Montage de petite table: <strong>de 30 à 50 €</strong>',
                '✓ Montage de commode: <strong>de 40 à 70 €</strong>',
                '✓ Montage de lit: <strong>de 50 à 80 €</strong>',
                '✓ Montage d’armoire: <strong>de 80 à 200 €</strong>',
                '✓ Grand dressing: <strong>sur devis</strong>',
                '✓ Démontage de meubles: <strong>de 30 à 100 €</strong>',
                '✓ Montage/démontage (déménagement): <strong>30-40 €/h</strong>'
            ],

            restorationTitle: 'Restauration de décorations',
            restorationPrice: 'à partir de 30 €',
            restorationList: [
                '✓ Petit pot / cache-pot: <strong>de 30 à 50 €</strong>',
                '✓ Pot décoratif moyen: <strong>de 50 à 100 €</strong>',
                '✓ Petite sculpture: <strong>de 80 à 150 €</strong>',
                '✓ Grande sculpture d’extérieur/intérieur: <strong>à partir de 150 €</strong>',
                '✓ Plâtre, céramique: <strong>sur devis</strong>',
                '✓ Nettoyage et rénovation de décorations: <strong>sur devis</strong>'
            ],

            relocationTitle: 'Aide au déménagement',
            relocationPrice: 'à partir de 30 €/h',
            relocationList: [
                '✓ Aide au déménagement: <strong>30-40 €/h</strong>',
                '✓ Montage et démontage de meubles: <strong>à partir de 35 €/h</strong>',
                '✓ Emballage d’effets personnels: <strong>sur devis</strong>',
                '✓ Préparation des locaux: <strong>sur devis</strong>',
                '✓ Nettoyage après déménagement: <strong>à partir de 150 €</strong>'
            ]
        }
    };

    const t = translations[lang] || translations.ru;

    const container = document.createElement('div');
    container.className = 'page-container page-prices';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t.title}</h1>
            <p class="page-subtitle">${t.subtitle}</p>
        </div>

        <div class="prices-grid">
            <div class="price-card">
                <h3>${t.cleaningTitle}</h3>
                <div class="price-val">${t.cleaningPrice}</div>
                <ul>
                    ${t.cleaningList.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <a href="#/contacts" class="btn-primary">${t.btnOrder}</a>
            </div>

            <div class="price-card featured">
                <div class="popular-badge">${t.popularBadge}</div>
                <h3>${t.furnitureTitle}</h3>
                <div class="price-val">${t.furniturePrice}</div>
                <ul>
                    ${t.furnitureList.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <a href="#/contacts" class="btn-primary">${t.btnOrder}</a>
            </div>

            <div class="price-card">
                <h3>${t.restorationTitle}</h3>
                <div class="price-val">${t.restorationPrice}</div>
                <ul>
                    ${t.restorationList.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <a href="#/contacts" class="btn-primary">${t.btnOrder}</a>
            </div>

            <div class="price-card">
                <h3>${t.relocationTitle}</h3>
                <div class="price-val">${t.relocationPrice}</div>
                <ul>
                    ${t.relocationList.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <a href="#/contacts" class="btn-primary">${t.btnOrder}</a>
            </div>
        </div>
    `;

    return container;
}