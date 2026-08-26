export function renderPortfolio() {
    const lang = localStorage.getItem('app_lang') || 'ru';

    const translations = {
        ru: {
            title: 'Выполненные объекты',
            subtitle: 'Реальные кейсы нашей команды по уборке, сборке и реставрации.',
            tagCleaning: 'Клининг',
            tagFurniture: 'Сборка мебели',
            tagRestoration: 'Реставрация',

            card1Title: 'Генеральная уборка дома 120 м²',
            card1Desc: 'Глубокая очистка кухни, удаление налёта в сантехнике, влажная уборка всех комнат и мытье балкона.',
            card1Meta: '⏱ Срок выполнения: 5 часов (35 €/час)',

            card2Title: 'Сборка большой гардеробной и кровати',
            card2Desc: 'Сборка двуспальной кровати с подъёмным механизмом и установка модульного шкафа-купе с выравниванием дверей.',
            card2Meta: '⏱ Срок выполнения: 1 день',

            card3Title: 'Восстановление садовой скульптуры',
            card3Desc: 'Устранение сколов гипса, зачистка, грунтовка и нанесение защитного покрытия для скульптуры.',
            card3Meta: '⏱ Срок выполнения: 2 дня'
        },
        en: {
            title: 'Completed Projects',
            subtitle: 'Real case studies of our cleaning, assembly, and restoration work.',
            tagCleaning: 'Cleaning',
            tagFurniture: 'Furniture Assembly',
            tagRestoration: 'Restoration',

            card1Title: 'Deep Cleaning of 120 m² House',
            card1Desc: 'Deep kitchen cleaning, limescale removal in bathrooms, wet wiping of all rooms, and balcony washing.',
            card1Meta: '⏱ Time: 5 hours (35 €/hr)',

            card2Title: 'Assembly of Large Wardrobe & Bed',
            card2Desc: 'Assembly of a double bed with a lifting mechanism and installation of a modular sliding wardrobe with door alignment.',
            card2Meta: '⏱ Time: 1 day',

            card3Title: 'Restoration of Garden Sculpture',
            card3Desc: 'Repairing plaster chips, sanding, priming, and applying a protective outdoor coating for the sculpture.',
            card3Meta: '⏱ Time: 2 days'
        },
        fr: {
            title: 'Projets réalisés',
            subtitle: 'Exemples réels de nos travaux de nettoyage, de montage et de restauration.',
            tagCleaning: 'Nettoyage',
            tagFurniture: 'Montage de meubles',
            tagRestoration: 'Restauration',

            card1Title: 'Grand nettoyage d’une maison de 120 m²',
            card1Desc: 'Nettoyage en profondeur de la cuisine, détartrage des sanitaires, essuyage humide de toutes les pièces et lavage du balcon.',
            card1Meta: '⏱ Durée: 5 heures (35 €/h)',

            card2Title: 'Montage d’un grand dressing et d’un lit',
            card2Desc: 'Montage d’un lit double avec mécanisme de levage et installation d’une armoire coulissante modulable avec alignement des portes.',
            card2Meta: '⏱ Durée: 1 jour',

            card3Title: 'Restauration d’une sculpture de jardin',
            card3Desc: 'Réparation des éclats de plâtre, ponçage, application d’une sous-couche et d’un revêtement de protection extérieur.',
            card3Meta: '⏱ Durée: 2 jours'
        }
    };

    const t = translations[lang] || translations.ru;

    const container = document.createElement('div');
    container.className = 'page-container page-portfolio';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t.title}</h1>
            <p class="page-subtitle">${t.subtitle}</p>
        </div>

        <div class="portfolio-grid">
            <div class="portfolio-card">
                <span class="portfolio-tag">${t.tagCleaning}</span>
                <h3>${t.card1Title}</h3>
                <p>${t.card1Desc}</p>
                <div class="portfolio-meta">${t.card1Meta}</div>
            </div>

            <div class="portfolio-card">
                <span class="portfolio-tag">${t.tagFurniture}</span>
                <h3>${t.card2Title}</h3>
                <p>${t.card2Desc}</p>
                <div class="portfolio-meta">${t.card2Meta}</div>
            </div>

            <div class="portfolio-card">
                <span class="portfolio-tag">${t.tagRestoration}</span>
                <h3>${t.card3Title}</h3>
                <p>${t.card3Desc}</p>
                <div class="portfolio-meta">${t.card3Meta}</div>
            </div>
        </div>
    `;

    return container;
}