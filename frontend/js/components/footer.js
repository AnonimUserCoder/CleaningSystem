export function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; ${new Date().getFullYear()} Мой Проект. Все права защищены.</p>
        </div>
    `;
    return footer;
}