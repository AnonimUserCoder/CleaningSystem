const TRANSLATIONS = {
    ru: {
        heroBadge: '✨ Сервис услуг для дома и помещений',
        heroTitle: 'Клининг, сборка мебели,<br><span>реставрация и переезды</span>',
        heroSubtitle: 'Возьмём на себя бытовые задачи любой сложности. Быстрый выезд специалистов, прозрачные тарифы в евро и аккуратное исполнение.',
        btnOrder: 'Заказать услугу',
        btnServices: 'Смотреть все услуги →',
        stats: [
            { num: '500+', desc: 'Выполненных заказов' },
            { num: '4.9 ★', desc: 'Средний рейтинг' },
            { num: '15 мин', desc: 'Расчёт стоимости' }
        ],
        sectionTitle: 'Основные направления',
        cards: [
            {
                price: 'от 30 €/час',
                title: 'Уборка & Клининг',
                desc: 'Поддерживающая, генеральная, глубокая уборка и мытье окон для дома и офиса.',
                link: 'Перейти в клининг →',
                img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: 'от 20 €',
                title: 'Сборка & Разборка мебели',
                desc: 'Сборка столов, стульев, комодов, кроватей и сложных гардеробных систем.',
                link: 'Вызвать мастера →',
                img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: '30-40 €/час',
                title: 'Помощь при переезде',
                desc: 'Упаковка вещей, помощь с погрузкой, демонтаж мебели и уборка после переезда.',
                link: 'Узнать подробнее →',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: 'от 30 €',
                title: 'Реставрация декора',
                desc: 'Реставрация и восстановление горшков, кашпо, скульптур и других декоративных изделий из гипса и керамики.',
                link: 'Узнать подробнее →',
                img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80'
            }
        ]
    },
    en: {
        heroBadge: '✨ Home & Property Services',
        heroTitle: 'Cleaning, furniture assembly,<br><span>restoration & relocation</span>',
        heroSubtitle: 'We take care of household tasks of any complexity. Fast arrival of specialists, transparent rates in euros, and neat execution.',
        btnOrder: 'Book Service',
        btnServices: 'View All Services →',
        stats: [
            { num: '500+', desc: 'Completed Orders' },
            { num: '4.9 ★', desc: 'Average Rating' },
            { num: '15 min', desc: 'Cost Estimation' }
        ],
        sectionTitle: 'Main Services',
        cards: [
            {
                price: 'from 30 €/hr',
                title: 'Cleaning & Housekeeping',
                desc: 'Regular, deep cleaning, and window washing for home and office.',
                link: 'Go to cleaning →',
                img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: 'from 20 €',
                title: 'Furniture Assembly & Disassembly',
                desc: 'Assembly of tables, chairs, dressers, beds, and complex wardrobe systems.',
                link: 'Call a specialist →',
                img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: '30-40 €/hr',
                title: 'Relocation Assistance',
                desc: 'Packing, loading assistance, furniture disassembly, and post-move cleaning.',
                link: 'Learn more →',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: 'from 30 €',
                title: 'Decor Restoration',
                desc: 'Restoration and repair of flower pots, planters, sculptures, and other decorative gypsum and ceramic items.',
                link: 'Learn more →',
                img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80'
            }
        ]
    },
    fr: {
        heroBadge: '✨ Services à domicile et espaces',
        heroTitle: 'Nettoyage, montage de meubles,<br><span>restauration et déménagement</span>',
        heroSubtitle: 'Nous prenons en charge vos tâches ménagères de toute complexité. Interventions rapides, tarifs transparents en euros et travail soigné.',
        btnOrder: 'Commander un service',
        btnServices: 'Voir tous les services →',
        stats: [
            { num: '500+', desc: 'Commandes réalisées' },
            { num: '4.9 ★', desc: 'Note moyenne' },
            { num: '15 min', desc: 'Calcul du devis' }
        ],
        sectionTitle: 'Nos services principaux',
        cards: [
            {
                price: 'dès 30 €/h',
                title: 'Nettoyage & Entretien',
                desc: 'Nettoyage régulier, grand nettoyage, nettoyage en profondeur et lavage de vitres pour maison et bureau.',
                link: 'Accéder au nettoyage →',
                img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: 'dès 20 €',
                title: 'Montage & Démontage de meubles',
                desc: 'Montage de tables, chaises, commodes, lits et systèmes de dressing complexes.',
                link: 'Appeler un spécialiste →',
                img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: '30-40 €/h',
                title: 'Aide au déménagement',
                desc: 'Emballage, aide au chargement, démontage de meubles et nettoyage après déménagement.',
                link: 'En savoir plus →',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: 'dès 30 €',
                title: 'Restauration de décoration',
                desc: 'Restauration et réparation de pots de fleurs, cache-pots, sculptures et autres objets décoratifs en plâtre et céramique.',
                link: 'En savoir plus →',
                img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80'
            }
        ]
    },
    it: {
        heroBadge: '✨ Servizi per la casa e ambienti',
        heroTitle: 'Pulizie, montaggio mobili,<br><span>restauro e traslochi</span>',
        heroSubtitle: 'Ci occupiamo di faccende domestiche di qualsiasi complessità. Intervento rapido dei professionisti, tariffe trasparenti in euro ed esecuzione accurata.',
        btnOrder: 'Prenota un servizio',
        btnServices: 'Vedi tutti i servizi →',
        stats: [
            { num: '500+', desc: 'Ordini completati' },
            { num: '4.9 ★', desc: 'Valutazione media' },
            { num: '15 min', desc: 'Calcolo del preventivo' }
        ],
        sectionTitle: 'Servizi principali',
        cards: [
            {
                price: 'da 30 €/ora',
                title: 'Pulizia & Sanificazione',
                desc: 'Pulizie ordinarie, di fondo, approfondite e lavaggio finestre per casa e ufficio.',
                link: 'Vai alle pulizie →',
                img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: 'da 20 €',
                title: 'Montaggio & Smontaggio Mobili',
                desc: 'Montaggio di tavoli, sedie, cassettiere, letti e sistemi di cabine armadio complesse.',
                link: 'Chiama un tecnico →',
                img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: '30-40 €/ora',
                title: 'Assistenza al Trasloco',
                desc: 'Imballaggio, aiuto nel carico, smontaggio mobili e pulizie post-trasloco.',
                link: 'Scopri di più →',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
            },
            {
                price: 'da 30 €',
                title: 'Restauro Decorazioni',
                desc: 'Restauro e riparazione di vasi, portavasi, sculture e altri articoli decorativi in gesso e ceramica.',
                link: 'Scopri di più →',
                img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80'
            }
        ]
    }
};

export function renderHome() {
    const lang = localStorage.getItem('app_lang') || 'ru';
    const t = TRANSLATIONS[lang] || TRANSLATIONS.ru;

    const container = document.createElement('div');
    container.className = 'page-container page-home';

    const statsHtml = t.stats.map(stat => `
        <div class="stat-item">
            <span class="stat-num">${stat.num}</span>
            <span class="stat-desc">${stat.desc}</span>
        </div>
    `).join('');

    const cardsHtml = t.cards.map(card => `
        <div class="feature-card">
            <div class="feature-img-wrapper">
                <img src="${card.img}" alt="${card.title}" class="feature-img" loading="lazy">
                <span class="feature-badge">${card.price}</span>
            </div>
            <div class="feature-body">
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
                <a href="#/services" class="feature-link">${card.link}</a>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <section class="hero-section">
            <div class="hero-badge">${t.heroBadge}</div>
            <h1 class="page-title">${t.heroTitle}</h1>
            <p class="page-subtitle">${t.heroSubtitle}</p>
            <div class="hero-actions">
                <a href="#/contacts" class="btn-primary">${t.btnOrder}</a>
                <a href="#/services" class="btn-secondary">${t.btnServices}</a>
            </div>
            <div class="hero-stats">${statsHtml}</div>
        </section>

        <section class="features-section">
            <h2 class="section-title">${t.sectionTitle}</h2>
            <div class="features-grid">${cardsHtml}</div>
        </section>
    `;

    return container;
}