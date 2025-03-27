import './styles/_footer_block.scss';
import i18next from "../configs/i18n";

export default class SiteFooter extends HTMLElement {connectedCallback() {
    this.render();
    i18next.on("languageChanged", () => this.render());
}

    render() {
        this.innerHTML = `
            <div class="main__footer" data-container-width="footer-big">
                <div class="main__footer--nav">
                    <nav class="main__footer--navlinks">
                        <ul class="main__footer--navlist" data-layout-smart="6-per-row">
                            <li class="main__footer--navlist-item">
                                <ul class="main__footer--sublist">
                                    <li class="main__footer--sublist-item-title">
                                        <h2 class="h4">Envato Market</h2>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Terms</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Licenses</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Market API</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Become an affiliate</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Cookies</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="main__footer--navlist-item">
                                <ul class="main__footer--sublist">
                                    <li class="main__footer--sublist-item-title">
                                        <h2 class="h4">Help</h2>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Help Center</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Authors</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="main__footer--navlist-item">
                                <ul class="main__footer--sublist">
                                    <li class="main__footer--sublist-item-title">
                                        <h2 class="h4">Our Community</h2>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Community</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Blog</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Forums</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Meetups</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="main__footer--navlist-item">
                                <ul class="main__footer--sublist">
                                    <li class="main__footer--sublist-item-title">
                                        <h2 class="h4">Meet Envato</h2>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">About Envato</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Careers</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Privacy Policy</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Do not sell or share my personal information</a>
                                    </li>
                                    <li class="main__footer--sublist-item">
                                        <a class="main__footer-text-link" href="#">Sitemap</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="main__footer--navlist-item">
                                <div class="main__footer--stats">
                                    <div class="main__footer--stats-content">
                                        <ul class="main__footer--stats-list">
                                            <li class="main__footer--sublist-item-title">
                                                <img class="main__footer-logo" src="./src/assets/images/logo-white.png" alt="Logo Phenikaa Hue">
                                            </li>
                                            <li class="main__footer--stats-list-item">
                                                Lô CN 15, KCN, Phong Điền, Thành phố Huế
                                            </li>
                                            <li class="main__footer--stats-list-item">
                                                Emai:
                                                <a class="decoration-animation-none" href="#">Cristobalite@sale.com</a>
                                            </li>
                                            <li class="main__footer--stats-list-item">
                                                Tel:
                                                <a class="decoration-animation-none" href="#">099xxxxxxxxxxxx</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="main__footer-social-media-list">
                                        <div class="link-area">
                                            <div class="main__footer-social-media-link">
                                                <a class="decoration-animation-none" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="23" viewBox="0 0 22 23" width="22"><script xmlns=""/><path clip-rule="evenodd" d="m11 .269531c-6.05 0-11 4.949999-11 10.999969 0 6.05 4.95 11 11 11s11-4.95 11-11c0-6.04997-4.95-10.999969-11-10.999969zm4.8583 8.616709v.275c0 3.20836-2.3833 6.87496-6.87495 6.87496-1.375 0-2.65833-.3666-3.66666-1.1 1.28333.1834 2.56666-.1833 3.57499-1.0083-1.1 0-1.925-.7333-2.29166-1.65.36666.0917.73333.0917 1.1 0-1.1-.1833-1.925-1.1917-1.925-2.38333.36667.18333.73333.27503 1.1.27503-.64167-.45836-1.1-1.1917-1.1-2.0167 0-.45833.09166-.825.36667-1.19166 1.19166 1.46666 2.93333 2.38333 4.95001 2.56666-.0917-.275-.0917-.45833-.0917-.64166 0-1.375 1.1-2.38334 2.3834-2.38334.7333 0 1.2833.275 1.7416.73334.55-.09167 1.8333-.275 1.8333-.275-.3666.55-.6416 1.55833-1.1 1.925z" fill="currentColor" fill-rule="evenodd"/><script xmlns=""/></svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="link-area">
                                            <div class="main__footer-social-media-link">
                                                <a class="decoration-animation-none" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="23" viewBox="0 0 22 23" width="22"><script xmlns=""/><path clip-rule="evenodd" d="m11 .269531c-6.05 0-11 4.949999-11 10.999969 0 6.05 4.95 11 11 11s11-4.95 11-11c0-6.04997-4.95-10.999969-11-10.999969zm3.3 10.541669h-1.925v6.4166h-2.74999v-6.4166h-1.83334v-1.83337h1.83334v-1.1c0-1.00834.36666-2.56667 2.38329-2.56667h2.2v2.10833h-1.2833c-.1833 0-.55.09167-.55.55v.91667h2.1083z" fill="currentColor" fill-rule="evenodd"/><script xmlns=""/></svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="link-area">
                                            <div class="main__footer-social-media-link">
                                                <a class="decoration-animation-none" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="23" viewBox="0 0 22 23" width="22"><script xmlns=""/><path clip-rule="evenodd" d="m11 .269531c-6.05 0-11 4.949999-11 10.999969 0 6.05 4.95 11 11 11s11-4.95 11-11c0-6.04997-4.95-10.999969-11-10.999969zm7.4937 11.549969c0 1.1688-.1375 2.3375-.1375 2.3375s-.1375.9625-.6187 1.4438c-.4457.4457-.9817.5302-1.3153.5828-.0781.0123-.145.0229-.1972.0359-2.1313.1375-5.225.1375-5.225.1375s-3.91875 0-5.0875-.1375c-.061-.0122-.13499-.0222-.21852-.0335-.38714-.0525-.97908-.1328-1.43148-.5852-.48125-.4125-.61875-1.4438-.61875-1.4438s-.1375-1.1687-.1375-2.3375v-1.1c0-1.16872.1375-2.33747.1375-2.33747s.1375-.9625.61875-1.44375c.46011-.46011.96833-.53531 1.32342-.58785.06937-.01026.1329-.01966.18908-.0309 2.0625-.1375 5.225-.1375 5.225-.1375s3.1625 0 5.225.1375c.275 0 .9625.06875 1.5125.61875.4812.4125.6187 1.44375.6187 1.44375s.1375 1.16875.1375 2.33747zm-5.0187-.6875-4.05625 1.9938v-4.05627z" fill="currentColor" fill-rule="evenodd"/><script xmlns=""/></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="main__footer--copyright" data-border-top="true">
                    <ul class="main__footer--copyright-menu">
                        <li>${i18next.t("common.copyright")}</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
