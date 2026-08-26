import { renderServiceCard } from '../components/index.js';

const mockServicesData = {
    ru: [
        // УБОРКА И КЛИНИНГ
        { id: 1, title: 'Поддерживающая уборка квартир и домов', category: 'cleaning', price: '30-35 €/час', description: 'Регулярная поддержание чистоты, пылесос, влажная уборка поверхностей и сантехники.' },
        { id: 2, title: 'Генеральная уборка', category: 'cleaning', price: '35-45 €/час', description: 'Тщательная очистка всех труднодоступных мест, кухонного гарнитура и бытовой техники.' },
        { id: 3, title: 'Глубокая уборка', category: 'cleaning', price: '40-50 €/час', description: 'Максимально подробная дезинфекция и глубокое удаление застарелых загрязнений.' },
        { id: 4, title: 'Уборка после ремонта', category: 'cleaning', price: '4-10 €/м²', description: 'Удаление строительной пыли, следов красок, затирки и цемента.' },
        { id: 5, title: 'Уборка после переезда', category: 'cleaning', price: 'от 150 €', description: 'Полная уборка помещения после выезда и транспортировки вещей.' },
        { id: 6, title: 'Уборка перед сдачей или после выезда жильцов', category: 'cleaning', price: 'от 150 €', description: 'Комплексная подготовка объекта к новым арендаторам.' },
        { id: 7, title: 'Уборка офисов и коммерческих помещений', category: 'cleaning', price: '25-35 €/час', description: 'Поддержание порядка на рабочих местах, в зонах отдыха и с/у.' },
        { id: 8, title: 'Мытьё окон', category: 'cleaning', price: '3-6 € за окно / 30-45 €/час', description: 'Профессиональная мойка рам, стёкол и подоконников.' },
        { id: 9, title: 'Уборка балкона или террасы', category: 'cleaning', price: 'от 30-80 €', description: 'Очистка балконов, лоджий и террас от пыли и загрязнений.' },

        // СБОРКА И РАЗБОРКА МЕБЕЛИ
        { id: 10, title: 'Сборка стула', category: 'furniture', price: 'от 20 €', description: 'Сборка барных, офисных и кухонных стульев.' },
        { id: 11, title: 'Сборка небольшого стола', category: 'furniture', price: 'от 30-50 €', description: 'Сборка журнальных, письменных и обеденных столов.' },
        { id: 12, title: 'Сборка комода', category: 'furniture', price: 'от 40-70 €', description: 'Сборка каркаса, установка и регулировка выдвижных ящиков.' },
        { id: 13, title: 'Сборка кровати', category: 'furniture', price: 'от 50-80 €', description: 'Сборка основания, изголовья и подъемных механизмов.' },
        { id: 14, title: 'Сборка шкафа', category: 'furniture', price: 'от 80-200 €', description: 'Сборка корпуса, установка дверей и настройка фурнитуры.' },
        { id: 15, title: 'Большой шкаф / гардеробная', category: 'furniture', price: 'по предварительному расчёту', description: 'Монтаж сложной модульной мебели и гардеробных систем.' },
        { id: 16, title: 'Разборка мебели', category: 'furniture', price: 'от 30-100 €', description: 'Аккуратный демонтаж мебели перед транспортировкой или ремонтом.' },
        { id: 17, title: 'Сборка и разборка мебели при переезде', category: 'furniture', price: '30-40 €/час', description: 'Оперативные работы по сборке/разборке в процессе переезда.' },

        // РЕСТАВРАЦИЯ ДЕКОРАТИВНЫХ ИЗДЕЛИЙ
        { id: 18, title: 'Реставрация небольшого горшка или кашпо', category: 'restoration', price: 'от 30-50 €', description: 'Восстановление мелких трещин, сколов и покраска.' },
        { id: 19, title: 'Реставрация среднего декоративного горшка', category: 'restoration', price: 'от 50-100 €', description: 'Восстановление целостности и декоративного слоя.' },
        { id: 20, title: 'Восстановление небольшой декоративной скульптуры', category: 'restoration', price: 'от 80-150 €', description: 'Точечная реставрация и укрепительные работы.' },
        { id: 21, title: 'Реставрация большой садовой или интерьерной скульптуры', category: 'restoration', price: 'от 150 €', description: 'Комплексное обновление крупногабаритных фигур.' },
        { id: 22, title: 'Сложная реставрация изделий из гипса, керамики и других материалов', category: 'restoration', price: 'по предварительному расчёту', description: 'Индивидуальное восстановление ценных и хрупких изделий.' },
        { id: 23, title: 'Очистка, подготовка и обновление декоративных изделий', category: 'restoration', price: 'по предварительному расчёту', description: 'Профессиональная бережная очистка и нанесение защитных покрытий.' },

        // ПОМОЩЬ ПРИ ПЕРЕЕЗДЕ
        { id: 24, title: 'Помощь при переезде', category: 'relocation', price: '30-40 €/час', description: 'Погрузочно-разгрузочные работы и сопровождение переезда.' },
        { id: 25, title: 'Сборка и разборка мебели при переезде', category: 'relocation', price: 'от 35 €/час', description: 'Подготовка мебели к перевозке и её сборка на новом месте.' },
        { id: 26, title: 'Упаковка вещей', category: 'relocation', price: 'по предварительному расчёту', description: 'Безопасная упаковывание коробок и хрупких предметов.' },
        { id: 27, title: 'Подготовка помещения к переезду', category: 'relocation', price: 'по предварительному расчёту', description: 'Освобождение комнат, расстановка и организация пространства.' },
        { id: 28, title: 'Уборка после переезда', category: 'relocation', price: 'от 150 €', description: 'Чистка и уборка помещения после выноса всех вещей.' }
    ],
    en: [
        // CLEANING
        { id: 1, title: 'Standard Cleaning for Apartments & Houses', category: 'cleaning', price: '30-35 €/hr', description: 'Regular maintenance cleaning, vacuuming, wet wiping of surfaces and plumbing.' },
        { id: 2, title: 'Deep Cleaning', category: 'cleaning', price: '35-45 €/hr', description: 'Thorough cleaning of hard-to-reach places, kitchen sets, and home appliances.' },
        { id: 3, title: 'Heavy-Duty Deep Cleaning', category: 'cleaning', price: '40-50 €/hr', description: 'Detailed disinfection and deep removal of stubborn stains.' },
        { id: 4, title: 'Post-Renovation Cleaning', category: 'cleaning', price: '4-10 €/m²', description: 'Removal of construction dust, paint marks, grout, and cement.' },
        { id: 5, title: 'Post-Move Cleaning', category: 'cleaning', price: 'from 150 €', description: 'Full room cleaning after move-out and item transportation.' },
        { id: 6, title: 'Pre-Tenancy / Move-Out Cleaning', category: 'cleaning', price: 'from 150 €', description: 'Comprehensive property preparation for new tenants.' },
        { id: 7, title: 'Office & Commercial Cleaning', category: 'cleaning', price: '25-35 €/hr', description: 'Maintaining order in workplaces, lounge areas, and restrooms.' },
        { id: 8, title: 'Window Washing', category: 'cleaning', price: '3-6 € per window / 30-45 €/hr', description: 'Professional cleaning of frames, glass, and sills.' },
        { id: 9, title: 'Balcony or Terrace Cleaning', category: 'cleaning', price: 'from 30-80 €', description: 'Cleaning balconies, loggias, and terraces from dust and dirt.' },

        // FURNITURE ASSEMBLY
        { id: 10, title: 'Chair Assembly', category: 'furniture', price: 'from 20 €', description: 'Assembly of bar, office, and kitchen chairs.' },
        { id: 11, title: 'Small Table Assembly', category: 'furniture', price: 'from 30-50 €', description: 'Assembly of coffee, writing, and dining tables.' },
        { id: 12, title: 'Dresser / Chest of Drawers Assembly', category: 'furniture', price: 'from 40-70 €', description: 'Frame assembly, installation, and adjustment of drawers.' },
        { id: 13, title: 'Bed Assembly', category: 'furniture', price: 'from 50-80 €', description: 'Assembly of base, headboard, and lifting mechanisms.' },
        { id: 14, title: 'Wardrobe Assembly', category: 'furniture', price: 'from 80-200 €', description: 'Carcass assembly, door installation, and hardware adjustment.' },
        { id: 15, title: 'Large Closet / Walk-in Wardrobe', category: 'furniture', price: 'by individual estimate', description: 'Installation of complex modular furniture and wardrobe systems.' },
        { id: 16, title: 'Furniture Disassembly', category: 'furniture', price: 'from 30-100 €', description: 'Careful disassembly of furniture before transport or renovation.' },
        { id: 17, title: 'Furniture Assembly & Disassembly (Moving)', category: 'furniture', price: '30-40 €/hr', description: 'Quick assembly/disassembly during the moving process.' },

        // RESTORATION
        { id: 18, title: 'Restoration of Small Pots & Planters', category: 'restoration', price: 'from 30-50 €', description: 'Repair of minor cracks, chips, and painting.' },
        { id: 19, title: 'Restoration of Medium Decorative Pots', category: 'restoration', price: 'from 50-100 €', description: 'Restoration of structural integrity and decorative finish.' },
        { id: 20, title: 'Restoration of Small Decorative Sculptures', category: 'restoration', price: 'from 80-150 €', description: 'Targeted restoration and strengthening work.' },
        { id: 21, title: 'Restoration of Large Garden / Interior Sculptures', category: 'restoration', price: 'from 150 €', description: 'Comprehensive restoration of large figures.' },
        { id: 22, title: 'Complex Restoration of Gypsum & Ceramics', category: 'restoration', price: 'by individual estimate', description: 'Custom restoration of valuable and fragile items.' },
        { id: 23, title: 'Cleaning & Renewal of Decorative Items', category: 'restoration', price: 'by individual estimate', description: 'Professional gentle cleaning and protective coating application.' },

        // RELOCATION
        { id: 24, title: 'Moving Assistance', category: 'relocation', price: '30-40 €/hr', description: 'Loading, unloading, and full moving support.' },
        { id: 25, title: 'Furniture Assembly/Disassembly for Moves', category: 'relocation', price: 'from 35 €/hr', description: 'Preparing furniture for transport and assembly at new location.' },
        { id: 26, title: 'Packing Services', category: 'relocation', price: 'by individual estimate', description: 'Safe packing of boxes and fragile items.' },
        { id: 27, title: 'Room Preparation for Moving', category: 'relocation', price: 'by individual estimate', description: 'Clearing rooms, arranging, and space organization.' },
        { id: 28, title: 'Post-Move Cleaning', category: 'relocation', price: 'from 150 €', description: 'Cleaning and clearing space after moving all belongings out.' }
    ],
    fr: [
        // NETTOYAGE
        { id: 1, title: 'Nettoyage entretien (appartements et maisons)', category: 'cleaning', price: '30-35 €/h', description: 'Entretien régulier, passage de l’aspirateur, nettoyage humide des surfaces et sanitaires.' },
        { id: 2, title: 'Nettoyage général', category: 'cleaning', price: '35-45 €/h', description: 'Nettoyage minutieux de toutes les zones difficiles d’accès, de la cuisine et de l’électroménager.' },
        { id: 3, title: 'Nettoyage en profondeur', category: 'cleaning', price: '40-50 €/h', description: 'Désinfection complète et élimination des taches tenaces.' },
        { id: 4, title: 'Nettoyage après travaux', category: 'cleaning', price: '4-10 €/m²', description: 'Élimination de la poussière de chantier, traces de peinture, joint et ciment.' },
        { id: 5, title: 'Nettoyage après déménagement', category: 'cleaning', price: 'à partir de 150 €', description: 'Nettoyage complet du logement après le départ et le transport des meubles.' },
        { id: 6, title: 'Nettoyage état des lieux (entrée/sortie)', category: 'cleaning', price: 'à partir de 150 €', description: 'Préparation complète du bien pour les nouveaux locataires.' },
        { id: 7, title: 'Nettoyage de bureaux et locaux commerciaux', category: 'cleaning', price: '25-35 €/h', description: 'Maintien de la propreté des espaces de travail, espaces détente et sanitaires.' },
        { id: 8, title: 'Lavage de vitres', category: 'cleaning', price: '3-6 € par vitre / 30-45 €/h', description: 'Lavage professionnel des châssis, vitres et rebords de fenêtres.' },
        { id: 9, title: 'Nettoyage de balcon ou terrasse', category: 'cleaning', price: 'de 30 à 80 €', description: 'Dépoussiérage et nettoyage complet des balcons, loggias et terrasses.' },

        // MONTAGE DE MEUBLES
        { id: 10, title: 'Montage de chaise', category: 'furniture', price: 'à partir de 20 €', description: 'Montage de chaises de bar, de bureau et de cuisine.' },
        { id: 11, title: 'Montage de petite table', category: 'furniture', price: 'de 30 à 50 €', description: 'Montage de tables basses, bureaux et tables à manger.' },
        { id: 12, title: 'Montage de commode', category: 'furniture', price: 'de 40 à 70 €', description: 'Assemblage de la structure, pose et ajustement des tiroirs.' },
        { id: 13, title: 'Montage de lit', category: 'furniture', price: 'de 50 à 80 €', description: 'Montage du sommier, de la tête de lit et des mécanismes de levage.' },
        { id: 14, title: 'Montage d’armoire', category: 'furniture', price: 'de 80 à 200 €', description: 'Assemblage du caisson, pose des portes et réglage de la quincaillerie.' },
        { id: 15, title: 'Grande armoire / Dressing modulable', category: 'furniture', price: 'sur devis', description: 'Montage de systèmes de rangement complexes et dressings sur mesure.' },
        { id: 16, title: 'Démontage de meubles', category: 'furniture', price: 'de 30 à 100 €', description: 'Démontage soigné avant transport ou rénovation.' },
        { id: 17, title: 'Montage et démontage pendant le déménagement', category: 'furniture', price: '30-40 €/h', description: 'Services rapides d’assemblage/démontage lors d’un déménagement.' },

        // RESTAURATION
        { id: 18, title: 'Restauration de petit pot ou cache-pot', category: 'restoration', price: 'de 30 à 50 €', description: 'Réparation de petites fissures, éclats et mise en peinture.' },
        { id: 19, title: 'Restauration de pot décoratif moyen', category: 'restoration', price: 'de 50 à 100 €', description: 'Restauration de la structure et de la finition décorative.' },
        { id: 20, title: 'Restauration de petite sculpture décorative', category: 'restoration', price: 'de 80 à 150 €', description: 'Restauration ciblée et renforcement des zones fragilisées.' },
        { id: 21, title: 'Restauration de grande sculpture de jardin ou d’intérieur', category: 'restoration', price: 'à partir de 150 €', description: 'Rénovation complète de pièces de grande taille.' },
        { id: 22, title: 'Restauration complexe (plâtre, céramique, etc.)', category: 'restoration', price: 'sur devis', description: 'Restauration sur mesure d’objets précieux et fragiles.' },
        { id: 23, title: 'Nettoyage et rénovation d’objets décoratifs', category: 'restoration', price: 'sur devis', description: 'Nettoyage doux professionnel et application de revêtements protecteurs.' },

        // DÉMÉNAGEMENT
        { id: 24, title: 'Aide au déménagement', category: 'relocation', price: '30-40 €/h', description: 'Manutention, chargement, déchargement et accompagnement.' },
        { id: 25, title: 'Montage et démontage pour déménagement', category: 'relocation', price: 'à partir de 35 €/h', description: 'Préparation des meubles au transport et re-montage sur le nouveau site.' },
        { id: 26, title: 'Service d’emballage', category: 'relocation', price: 'sur devis', description: 'Emballage sécurisé des cartons et objets fragiles.' },
        { id: 27, title: 'Préparation des locaux au déménagement', category: 'relocation', price: 'sur devis', description: 'Dégagement des pièces, rangement et organisation de l’espace.' },
        { id: 28, title: 'Nettoyage après déménagement', category: 'relocation', price: 'à partir de 150 €', description: 'Remise en état et nettoyage après enlèvement complet des effets.' }
    ]
};

const translations = {
    ru: {
        pageTitle: 'Услуги для дома и помещений',
        pageSubtitle: 'Полный перечень бытовых, клининговых и реставрационных услуг.',
        tabAll: 'Все услуги',
        tabCleaning: '✨ Уборка и клининг',
        tabFurniture: '🪑 Сборка мебели',
        tabRestoration: '🎨 Реставрация',
        tabRelocation: '📦 Помощь при переезде'
    },
    en: {
        pageTitle: 'Home & Property Services',
        pageSubtitle: 'Full range of household, cleaning, and restoration services.',
        tabAll: 'All Services',
        tabCleaning: '✨ Cleaning',
        tabFurniture: '🪑 Furniture Assembly',
        tabRestoration: '🎨 Restoration',
        tabRelocation: '📦 Relocation Assistance'
    },
    fr: {
        pageTitle: 'Services pour la maison et les locaux',
        pageSubtitle: 'Gamme complète de services ménagers, de nettoyage et de restauration.',
        tabAll: 'Tous les services',
        tabCleaning: '✨ Nettoyage',
        tabFurniture: '🪑 Montage de meubles',
        tabRestoration: '🎨 Restauration',
        tabRelocation: '📦 Aide au déménagement'
    }
};

export function renderServices() {
    const lang = localStorage.getItem('app_lang') || 'ru';
    const t = translations[lang] || translations.ru;
    const mockServices = mockServicesData[lang] || mockServicesData.ru;

    const container = document.createElement('div');
    container.className = 'page-container page-services';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t.pageTitle}</h1>
            <p class="page-subtitle">${t.pageSubtitle}</p>
        </div>

        <div class="service-tabs">
            <button class="tab-btn active" data-category="all">${t.tabAll} (${mockServices.length})</button>
            <button class="tab-btn" data-category="cleaning">${t.tabCleaning}</button>
            <button class="tab-btn" data-category="furniture">${t.tabFurniture}</button>
            <button class="tab-btn" data-category="restoration">${t.tabRestoration}</button>
            <button class="tab-btn" data-category="relocation">${t.tabRelocation}</button>
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