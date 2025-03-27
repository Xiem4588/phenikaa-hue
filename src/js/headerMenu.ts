const handleHeaderMenu = () => {
    // Button Menu MB
    document.querySelector('.btn__menu-mb button')?.addEventListener('click', (e) => {
        e.stopPropagation();
        const mainHeader = document.querySelector('.main__header');
        const isHidden = mainHeader?.getAttribute('aria-hidden') === 'true';
        mainHeader?.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
        document.documentElement.setAttribute('data-mega-menu-visible', isHidden ? 'true' : 'false');
    });

    // Go Back
    document.querySelectorAll('[data-button-go-back]').forEach(item =>
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            item.closest('[aria-hidden]')?.setAttribute('aria-hidden', 'true');
            document.documentElement.setAttribute('data-mega-menu-visible', 'false');
        })
    );

    // Mega Menu
    document.querySelectorAll('[data-mega-menu-item] [data-mega-menu-submenu], [data-mega-menu-submenu-item] [data-mega-menu-submenu-item-submenu]')
        .forEach(el => el.parentElement?.setAttribute('aria-hidden', 'true'));

    document.addEventListener('click', (e) => {
        const targetElement = e.target as Element;
        const subMenu = targetElement.closest('[data-item-button]') || targetElement.closest('[data-submenu-item-button]');
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

        const hideAll = (isSubMenu: boolean) => {
            document.querySelectorAll(isSubMenu ? '[data-submenu-item-button]' : '[data-item-button]').forEach(
                el => el.parentElement?.setAttribute('aria-hidden', 'true')
            );
            document.documentElement.setAttribute('data-mega-menu-visible', 'false');
        };

        if (subMenu) {
            const parentElement = subMenu.parentElement;
            const hasMegaMenuSubmenu = parentElement?.querySelector(
                `[data-mega-menu-submenu]${!isDesktop ? ', [data-mega-menu-submenu-item-submenu]' : ''}`
            );
            const isVisible = parentElement?.getAttribute('aria-hidden') === 'false';

            if (hasMegaMenuSubmenu) {
                e.preventDefault();
                e.stopPropagation();
            }

            hideAll(!!targetElement.closest('[data-submenu-item-button]'));
            parentElement?.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
            document.documentElement.setAttribute('data-mega-menu-visible', !isVisible ? 'true' : 'false');

        } else if (!targetElement.closest('[data-mega-menu-submenu]')) {
            hideAll(false);
        }
    });

    // Height ...PX
    const checkHeightHeader = () => {
        const headerFixedTop = document.querySelector('[data-header-height]');
        if (headerFixedTop) {
            document.documentElement.style.setProperty('--main-header-height', `${(headerFixedTop as HTMLElement).offsetHeight}px`);
        } else {
            document.documentElement.style.setProperty('--main-header-height', `0px`);
        }
    };

    checkHeightHeader(); // Initial calculation
    window.addEventListener('resize', checkHeightHeader); // Recalculate on window resize

    // Scroll Content
    const scrollContent = () => {
        let lastScrollTop = 0;
        const dataHeaderScroll = document.querySelector('[data-header-scroll]') as HTMLElement;
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            dataHeaderScroll.classList.toggle('header-scroll-down', scrollTop > lastScrollTop);
            dataHeaderScroll.classList.toggle('header-scroll-up', scrollTop <= lastScrollTop && scrollTop > 0);
            lastScrollTop = scrollTop;
        });
    };

    scrollContent();
}

export default handleHeaderMenu;