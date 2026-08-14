import { renderHome } from './pages/home.js';
import { renderServices } from './pages/services.js';
import { renderPortfolio } from './pages/portfolio.js';
import { renderPrices } from './pages/prices.js';
import { renderAbout } from './pages/about.js';
import { renderContacts } from './pages/contacts.js';

const routes = {
    '': renderHome,
    '#home': renderHome,
    '#services': renderServices,
    '#portfolio': renderPortfolio,
    '#prices': renderPrices,
    '#about': renderAbout,
    '#contacts': renderContacts,
};

export function initRouter() {
    const handleRoute = () => {
        const hash = window.location.hash || '';
        const app = document.getElementById('app');
        
        const renderPage = routes[hash] || renderHome;
        
        app.innerHTML = '';
        app.appendChild(renderPage());
    };

    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('DOMContentLoaded', handleRoute);
}