//
const handleActiveItemMenu = () => {
    const LANGUAGES = ['vn'];

    let pathSegments = window.location.pathname.split('/').filter(Boolean);

    if (pathSegments.length && LANGUAGES.includes(pathSegments[0])) {
        pathSegments = pathSegments.slice(1);
    }

    document.querySelectorAll('[data-set-item-menu-active]').forEach(link => {
        const href = link.getAttribute('href')?.split('/').filter(Boolean);

        if (href && href.some(segment => pathSegments.includes(segment))) {
            link.setAttribute('data-set-item-menu-active', 'true');
        } else {
            link.setAttribute('data-set-item-menu-active', 'false');
        }
    });
}


export default handleActiveItemMenu;