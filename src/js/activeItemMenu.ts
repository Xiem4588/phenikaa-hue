//
const handleActiveItemMenu = () => {
    const LANGUAGES = ['vn', 'en'];

    let pathSegments = window.location.pathname.split('/').filter(Boolean);

    if (pathSegments.length && pathSegments[0] && LANGUAGES.includes(pathSegments[0])) {
        pathSegments = pathSegments.slice(1);
    }

    const currentLastSegment = pathSegments[pathSegments.length - 1];

    document.querySelectorAll('[data-set-item-menu-active]').forEach(link => {
        const hrefSegments = link.getAttribute('href')?.split('/').filter(Boolean);
        const hrefLastSegment = hrefSegments?.[hrefSegments.length - 1];

        if (hrefLastSegment === currentLastSegment) {
            link.setAttribute('data-set-item-menu-active', 'true');
        } else {
            link.setAttribute('data-set-item-menu-active', 'false');
        }
    });
}


export default handleActiveItemMenu;