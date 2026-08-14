export function renderAbout() {
    const container = document.createElement('div');
    container.className = 'page-about';
    container.innerHTML = `
        <h1>О нас</h1>
        <p>Информация о нашей компании и команде.</p>
    `;
    return container;
}