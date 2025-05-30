
import './styles/_slider_certification_block.scss';
import './styles/_slider-swiper-block.scss';

export default class AboutSliderCertification extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="slider-certification-block container-type" data-background="default">
                <div class="slider-certification-block__container" data-container-width="bodytext">
                    <div class="slider-certification-block__heading">
                        <h2 class="text-2xl xl:text-4xl font-medium slider-certification-block__title">Chứng nhận công nghệ giải thưởng</h2>
                    </div>
                    <div class="swiper" data-slider-certification>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide certification-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="certification-teaser-base-item__wrapper">
                                    <div class="certification-teaser-base-item__image">
                                        <a class="" href="/">
                                            <img alt="image" src="./src/assets/images/image-item-4.png">
                                        </a>
                                    </div>
                                    <div class="certification-teaser-base-item__content">
                                        <a class="certification-teaser-base-item__content-text " href="/">
                                            <div class="certification-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide certification-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="certification-teaser-base-item__wrapper">
                                    <div class="certification-teaser-base-item__image">
                                        <a class="" href="/">
                                            <img alt="image" src="./src/assets/images/image-item-4.png">
                                        </a>
                                    </div>
                                    <div class="certification-teaser-base-item__content">
                                        <a class="certification-teaser-base-item__content-text " href="/">
                                            <div class="certification-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide certification-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="certification-teaser-base-item__wrapper">
                                    <div class="certification-teaser-base-item__image">
                                        <a class="" href="/">
                                            <img alt="image" src="./src/assets/images/image-item-4.png">
                                        </a>
                                    </div>
                                    <div class="certification-teaser-base-item__content">
                                        <a class="certification-teaser-base-item__content-text " href="/">
                                            <div class="certification-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide certification-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="certification-teaser-base-item__wrapper">
                                    <div class="certification-teaser-base-item__image">
                                        <a class="" href="/">
                                            <img alt="image" src="./src/assets/images/image-item-4.png">
                                        </a>
                                    </div>
                                    <div class="certification-teaser-base-item__content">
                                        <a class="certification-teaser-base-item__content-text " href="/">
                                            <div class="certification-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide certification-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="certification-teaser-base-item__wrapper">
                                    <div class="certification-teaser-base-item__image">
                                        <a class="" href="/">
                                            <img alt="image" src="./src/assets/images/image-item-4.png">
                                        </a>
                                    </div>
                                    <div class="certification-teaser-base-item__content">
                                        <a class="certification-teaser-base-item__content-text " href="/">
                                            <div class="certification-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-next">
                            <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.362 7.84495L28.0586 18.3333H7.12451V21.6666H28.0586L18.362 32.1549L20.5407 34.5116L33.957 19.9999L20.5407 5.48828L18.362 7.84495Z"/>
                            </svg>
                        </div>
                        <div class="swiper-button-prev">
                            <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5964 7.84491L17.4192 5.48657L3.98291 19.9999L17.4192 34.5116L19.5964 32.1532L9.88747 21.6666H30.8169V18.3332H9.88593L19.5964 7.84491Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('about-slider-certification', AboutSliderCertification);