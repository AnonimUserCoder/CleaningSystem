export function renderFooter() {
    const lang = localStorage.getItem('app_lang') || 'ru';

    const translations = {
        ru: { rights: 'Все права защищены.' },
        en: { rights: 'All rights reserved.' },
        fr: { rights: 'Tous droits réservés.' },
        it: { rights: 'Tutti i diritti riservati.' }
    };

    const t = translations[lang] || translations.ru;
    const currentYear = new Date().getFullYear();

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-content" style="text-align: center; padding: 20px 0;">
            <p>&copy; ${currentYear} Karlos Hakobyan. ${t.rights}</p>
        </div>
    `;

    return footer;
}