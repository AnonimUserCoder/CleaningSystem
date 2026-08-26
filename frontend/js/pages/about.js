export function renderAbout() {
    const lang = localStorage.getItem('app_lang') || 'ru';

    const translations = {
        ru: {
            title: 'О нашей компании',
            subtitle: 'Предоставляем бытовые и ремонтные услуги высокого уровня с 2020 года.',
            paragraph1: 'Мы объединили специалистов по клинингу, строительной отделке и инженерному монтажу, чтобы предоставлять комплексный сервис в одном окне.',
            paragraph2: 'Наш приоритет — прозрачное ценообразование, аккуратность во всем и соблюдение согласованных сроков.'
        },
        en: {
            title: 'About Our Company',
            subtitle: 'Providing high-quality household and repair services since 2020.',
            paragraph1: 'We have brought together specialists in cleaning, interior finishing, and technical installation to provide comprehensive all-in-one solutions.',
            paragraph2: 'Our top priorities are transparent pricing, meticulous execution, and strict adherence to agreed deadlines.'
        },
        fr: {
            title: 'À propos de notre entreprise',
            subtitle: 'Services ménagers et de réparation de haute qualité depuis 2020.',
            paragraph1: 'Nous avons réuni des spécialistes du nettoyage, de la finition intérieure et de l’installation technique pour vous offrir un service complet à un seul endroit.',
            paragraph2: 'Notre priorité est la transparence des prix, le soin apporté aux travaux et le respect strict des délais convenus.'
        }
    };

    const t = translations[lang] || translations.ru;

    const container = document.createElement('div');
    container.className = 'page-container page-about';

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t.title}</h1>
            <p class="page-subtitle">${t.subtitle}</p>
        </div>

        <div class="portfolio-card" style="max-width: 800px; margin: 0 auto;">
            <p style="font-size: 1.05rem; line-height: 1.8; color: #475569; margin-bottom: 16px;">
                ${t.paragraph1}
            </p>
            <p style="font-size: 1.05rem; line-height: 1.8; color: #475569;">
                ${t.paragraph2}
            </p>
        </div>
    `;

    return container;
}