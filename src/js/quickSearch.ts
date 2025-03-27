const handleQuickSearch = () => {
    const buttonQuickSearch = document.querySelector('[data-button-quick-search]');
    const openQuickSearch = document.querySelector('[data-open-quick-search]');

    const toggleQuickSearch = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        const isQuickSearch = buttonQuickSearch?.getAttribute('data-button-quick-search') === 'true';
        buttonQuickSearch?.setAttribute('data-button-quick-search', isQuickSearch ? 'false' : 'true');

        const isHidden = openQuickSearch?.getAttribute('aria-hidden') === 'true';
        openQuickSearch?.setAttribute('aria-hidden', isHidden ? 'false' : 'true');

        if (!isQuickSearch) {
            document.querySelectorAll('[data-item-button], [data-submenu-item-button]').forEach(el => {
                el.parentElement?.setAttribute('aria-hidden', 'true');
            });
            document.documentElement.setAttribute('data-mega-menu-visible', 'false');
        }
    };

    const closeQuickSearch = (e: Event) => {
        if (
            !buttonQuickSearch?.contains(e.target as Element) &&
            !openQuickSearch?.contains(e.target as Element)
        ) {
            buttonQuickSearch?.setAttribute('data-button-quick-search', 'false');
            openQuickSearch?.setAttribute('aria-hidden', 'true');
        }
    };

    buttonQuickSearch?.addEventListener('click', toggleQuickSearch);
    document.addEventListener('click', closeQuickSearch);
};

export default handleQuickSearch;
