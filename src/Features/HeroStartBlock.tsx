import './styles/_hero_start_block.scss';

export default class HeroStartBlock extends HTMLElement {
    connectedCallback() {
        const isBackgroundImage = this.getAttribute('set-hero-start-background-image');

        this.innerHTML = `
            <div class="hero-start-block hero-start-block--2-per-row" data-hero-start-background-image="${isBackgroundImage}">
                ${isBackgroundImage === 'true' ? `
                    <div class="hero-start-block__image">
                        <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                    </div>
                ` : ''}
                <div class="hero-start-block__content">
                    <div class="hero-start-block__wrapper" data-container-width="site-large">
                        <div class="hero-start-block__text-container">
                            <div class="hero-start-block__heading">
                                <h1 class="text-3xl xl:text-5xl font-medium hero-start-block__heading-title">Giới thiệu tổng quan Phenikaa Cristobalite</h1>
                            </div>
                            <div class="hero-start-block__subheading">
                                <p class="h5 hero-start-block__subheading-text">We will help to thing into a big one for your company, We will help thing into a big We will help to develop every smallest thing into a big  your company, We will help to develop every smallest thing into a big</p>
                            </div>
                            <div class="hero-start-block__button">
                                <a href="/" class="btn button--primary decoration-animation-none" href="/no/signin.html">
                                    <span>Liên hệ ngay</span>
                                </a>
                                <a href="/" class="btn decoration-animation-none" href="/no/signin.html">
                                    <span>Tìm hiểu thêm</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-start-block', HeroStartBlock);