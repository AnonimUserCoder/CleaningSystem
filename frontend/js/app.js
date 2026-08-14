import { initRouter } from './router.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header-container').appendChild(renderHeader());
    document.getElementById('footer-container').appendChild(renderFooter());

    initRouter();

    // Функция для подсветки активной ссылки
    const updateActiveLink = () => {
        const hash = window.location.hash || '#home';
        const links = document.querySelectorAll('header nav a');
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash || (hash === '#home' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('hashchange', updateActiveLink);
    updateActiveLink(); // Вызвать один раз при загрузке
});