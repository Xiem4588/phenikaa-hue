import './styles/_slider-swiper-block.scss';

export default class SliderHeroProductBanner extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="slider-hero-product-banner">
                <div class="swiper mySwiper2" data-slide-product-banner-large>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="./src/assets/images/epinova-kontorsarbete-ove-emil.png" />
                        </div>
                        <div class="swiper-slide">
                            <img src="./src/assets/images/start-hero-banner.jpg" />
                        </div>
                    </div>
                </div>
                <div class="swiper mySwiper" data-slide-product-banner-thumb>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            CRISTOBALITE DẠNG BỘT
                        </div>
                        <div class="swiper-slide">
                            CRISTOBALITE DẠNG HẠT
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('slider-hero-product-banner', SliderHeroProductBanner);