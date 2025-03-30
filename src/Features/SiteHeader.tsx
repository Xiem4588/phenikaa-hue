import './styles/_header_block.scss';
import i18next from "../configs/i18n";
import "./Component/LanguageSwitcher"
import "./Component/QuickSearch"

export default class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.render();
        i18next.on("languageChanged", () => this.render());
    }

    render() {
        this.innerHTML = `
            <div class="main__header" data-container-width="header-big" aria-hidden="true">
                <div class="main-menu-header__row">
                    <div class="main-menu-header__logo-left">
                        <a class="main-menu-header__logo decoration-animation-none" href="/" title="logo">
                            <img src="./src/assets/images/logo.png" alt="Logo Phenikaa Hue">
                        </a>
                    </div>

                    <div class="main-menu-header__nav-wrapper">
                        <div class="main-menu-header__nav-center">
                            <div class="header-quick-search__on-mobile">
                                <quick-search></quick-search>
                            </div>
                            <ul class="mega-menu">
                                <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                                    <a class="mega-menu__item-button" data-item-button data-set-item-menu-active href="/home">${i18next.t("navigation.home")}</a>
                                </li>
                                <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                                    <a class="mega-menu__item-button" data-item-button data-set-item-menu-active href="/about-us">${i18next.t("navigation.aboutUs")}</a>
                                </li>
                                <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                                    <a class="mega-menu__item-button" data-item-button data-set-item-menu-active href="/product">${i18next.t("navigation.product")}</a>
                                    <div class="mega-menu__submenu" data-mega-menu-submenu data-background="default">
                                        <div class="mega-menu__submenu-container" data-container-width="header-big">
                                            <button type="button" class="mega-menu__submenu-go-back" data-button-go-back>
                                                <span class="mega-menu__title">Main menu</span>
                                                <span class="mega-menu__close">Close</span>
                                            </button>
                                            <ul class="mega-menu__submenu-list" data-container-width="header-big">
                                                <li class="mega-menu__submenu-item" data-mega-menu-submenu-item="true" aria-hidden="true">
                                                    <a class="mega-menu__submenu-item-button" data-submenu-item-button data-set-item-menu-active href="/hero-block">Danh mục sản phẩm</a>
                                                    <div class="mega-menu__submenu-item-submenu" data-mega-menu-submenu-item-submenu="true" data-background="default">
                                                        <button type="button" class="mega-menu__submenu-item-submenu-go-back" data-button-go-back>
                                                            <span class="mega-menu__title">Main menu submenu</span>
                                                            <span class="mega-menu__close">Close</span>
                                                        </button>
                                                        <ul class="mega-menu__submenu-submenu-list">
                                                            <li class="mega-menu__submenu-submenu-item"><a data-set-item-menu-active href="/product">Sản phẩm</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="mega-menu__submenu-item" data-mega-menu-submenu-item aria-hidden="true">
                                                    <a class="mega-menu__submenu-item-button" data-submenu-item-button data-set-item-menu-active href="/teaser-layout">Danh mục tài liệu</a>
                                                    <div class="mega-menu__submenu-item-submenu" data-mega-menu-submenu-item-submenu="true" data-background="default">
                                                        <button type="button" class="mega-menu__submenu-item-submenu-go-back" data-button-go-back>
                                                            <span class="mega-menu__title">Main menu submenu</span>
                                                            <span class="mega-menu__close">Close</span>
                                                        </button>
                                                        <ul class="mega-menu__submenu-submenu-list">
                                                            <li class="mega-menu__submenu-submenu-item"><a data-set-item-menu-active href="/document">Tài liệu kỹ thuật</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="mega-menu__submenu-item" data-mega-menu-submenu-item aria-hidden="true">
                                                    <a class="mega-menu__submenu-item-button" data-submenu-item-button data-set-item-menu-active href="/slider-swiper">FAQ - Câu hỏi thường gặp</a>
                                                    <div class="mega-menu__submenu-item-submenu" data-mega-menu-submenu-item-submenu="true" data-background="default">
                                                        <button type="button" class="mega-menu__submenu-item-submenu-go-back" data-button-go-back>
                                                            <span class="mega-menu__title">Main menu submenu</span>
                                                            <span class="mega-menu__close">Close</span>
                                                        </button>
                                                        <ul class="mega-menu__submenu-submenu-list">
                                                            <li class="mega-menu__submenu-submenu-item"><a data-set-item-menu-active href="/faq">Câu hỏi thường gặp</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                                    <a class="mega-menu__item-button" data-item-button data-set-item-menu-active href="/support">${i18next.t("navigation.support")}</a>
                                </li>
                                <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                                    <a class="mega-menu__item-button" data-item-button data-set-item-menu-active href="/contact">${i18next.t("navigation.contact")}</a>
                                </li>
                                <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                                    <a class="mega-menu__item-button" data-item-button data-set-item-menu-active href="/news">${i18next.t("navigation.news")}</a>
                                    <div class="mega-menu__submenu" data-mega-menu-submenu data-background="default">
                                        <div class="mega-menu__submenu-container" data-container-width="header-big">
                                            <button type="button" class="mega-menu__submenu-go-back" data-button-go-back>
                                                <span class="mega-menu__title">Main menu</span>
                                                <span class="mega-menu__close">Close</span>
                                            </button>
                                            <ul class="mega-menu__submenu-list" data-container-width="header-big">
                                                <li class="mega-menu__submenu-item">
                                                    <a class="mega-menu__submenu-item-button" data-set-item-menu-active href="/news">Tất cả tin tức - Category</a>
                                                </li>
                                                <li class="mega-menu__submenu-item">
                                                    <a class="mega-menu__submenu-item-button" data-set-item-menu-active href="/news-category">Tin tức - Category item</a>
                                                </li>
                                                <li class="mega-menu__submenu-item">
                                                    <a class="mega-menu__submenu-item-button" data-set-item-menu-active href="/news-detail">Tin tức - Detail</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="main-menu-header__nav-right">
                            <ul class="main-menu-header__nav-right-list">
                                <li class="main-menu-header__search">
                                    <a href="/search-page" class="button-quick-search__main" data-button-quick-search="false">
                                        <span class="button-quick-search__area-text">${i18next.t("common.search")}</span>
                                        <svg class="button-quick-search__area-icon" width="24" height="24" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path d="M14.2635 12.9657L19.2353 17.9375L18.1875 18.9853L13.2157 14.0135L13.2568 13.9724L13.2022 14.0124C12.7864 14.3174 12.3304 14.5565 11.8343 14.7297C11.3384 14.903 10.8105 14.9896 10.2506 14.9896C8.86405 14.9896 7.68595 14.5045 6.7157 13.5343C5.74545 12.5641 5.26042 11.3862 5.26042 10C5.26042 8.61384 5.74545 7.43595 6.7157 6.4657C7.68595 5.49545 8.86384 5.01042 10.25 5.01042C11.6362 5.01042 12.8141 5.49545 13.7843 6.4657C14.7545 7.43595 15.2396 8.61405 15.2396 10.0006C15.2396 10.5605 15.153 11.0884 14.9797 11.5843C14.8065 12.0804 14.5674 12.5364 14.2624 12.9522L14.2156 12.9178L14.2635 12.9657ZM10.25 13.5104C11.225 13.5104 12.054 13.1691 12.7365 12.4865C13.4191 11.804 13.7604 10.975 13.7604 10C13.7604 9.02505 13.4191 8.196 12.7365 7.51347C12.054 6.83094 11.225 6.48958 10.25 6.48958C9.27505 6.48958 8.446 6.83094 7.76347 7.51347C7.08094 8.196 6.73958 9.02505 6.73958 10C6.73958 10.975 7.08094 11.804 7.76347 12.4865C8.446 13.1691 9.27505 13.5104 10.25 13.5104Z" stroke-width="0.0208333"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class="main-menu-header__language">
                                    <div class="main-menu-header__select">
                                        <language-switcher></language-switcher>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="btn__menu-mb">
                        <button type="button" aria-label="Menu">
                            <span class="btn__menu-mb-icon-parent">
                                <span class="btn__menu-mb-icon-children"></span>
                            </span>
                        </button>
                    </div>
                </div>

                <div class="header-quick-search__container" aria-hidden="true" data-open-quick-search>
                    <quick-search></quick-search>
                </div>
            </div>
        `;
    }
}

customElements.define('site-header', SiteHeader);
