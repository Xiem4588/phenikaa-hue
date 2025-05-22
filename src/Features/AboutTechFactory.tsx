
import './styles/_slider_sector_block.scss';
import './styles/_slider-swiper-block.scss';

export default class AboutTechFactory extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="p-5 flex flex-col gap-5 lg:gap-10" data-container-width="bodytext">
                <h2 class="text-2xl xl:text-4xl font-medium">Công nghệ và năng lực nhà máy</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-20 lg:py-10 container-type">
                    <div class="sector-teaser-base-item text-center" data-teaser-base-layout="grid">
                        <div class="sector-teaser-base-item__wrapper">
                            <div class="sector-teaser-base-item__image">
                                <a class="" href="/">
                                    <img alt="image" src="./src/assets/images/image-item-8.png">
                                </a>
                            </div>
                            <div class="sector-teaser-base-item__content">
                                <a class="sector-teaser-base-item__content-text " href="/">
                                    <div class="sector-teaser-base-item__heading">
                                        <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="sector-teaser-base-item text-center" data-teaser-base-layout="grid">
                        <div class="sector-teaser-base-item__wrapper">
                            <div class="sector-teaser-base-item__image">
                                <a class="" href="/">
                                    <img alt="image" src="./src/assets/images/image-item-8.png">
                                </a>
                            </div>
                            <div class="sector-teaser-base-item__content">
                                <a class="sector-teaser-base-item__content-text " href="/">
                                    <div class="sector-teaser-base-item__heading">
                                        <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="sector-teaser-base-item text-center" data-teaser-base-layout="grid">
                        <div class="sector-teaser-base-item__wrapper">
                            <div class="sector-teaser-base-item__image">
                                <a class="" href="/">
                                    <img alt="image" src="./src/assets/images/image-item-8.png">
                                </a>
                            </div>
                            <div class="sector-teaser-base-item__content">
                                <a class="sector-teaser-base-item__content-text " href="/">
                                    <div class="sector-teaser-base-item__heading">
                                        <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('about-tech-factory', AboutTechFactory);