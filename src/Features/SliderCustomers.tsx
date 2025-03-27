
import './styles/_slider_customers_block.scss';
import './styles/_slider-swiper-block.scss';

export default class SliderCustomersBlock extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="slider-customers-block" data-background="dark">
                <div class="slider-customers-block__container" data-container-width="bodytext">
                    <div class="slider-customers-block__heading text-center">
                        <h2 class="slider-customers-block__title">Khách hàng tiêu biểu</h2>
                    </div>
                    <div class="swiper" data-slider-customers>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide customers-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="customers-teaser-base-item__wrapper">
                                    <div class="customers-teaser-base-item__image">
                                        <a class="decoration-animation-none" href="/">
                                            <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
                                        </a>
                                    </div>
                                    <div class="customers-teaser-base-item__content">
                                        <a class="customers-teaser-base-item__content-text decoration-animation-none" href="/">
                                            <div class="customers-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide customers-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="customers-teaser-base-item__wrapper">
                                    <div class="customers-teaser-base-item__image">
                                        <a class="decoration-animation-none" href="/">
                                            <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
                                        </a>
                                    </div>
                                    <div class="customers-teaser-base-item__content">
                                        <a class="customers-teaser-base-item__content-text decoration-animation-none" href="/">
                                            <div class="customers-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide customers-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="customers-teaser-base-item__wrapper">
                                    <div class="customers-teaser-base-item__image">
                                        <a class="decoration-animation-none" href="/">
                                            <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
                                        </a>
                                    </div>
                                    <div class="customers-teaser-base-item__content">
                                        <a class="customers-teaser-base-item__content-text decoration-animation-none" href="/">
                                            <div class="customers-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide customers-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="customers-teaser-base-item__wrapper">
                                    <div class="customers-teaser-base-item__image">
                                        <a class="decoration-animation-none" href="/">
                                            <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
                                        </a>
                                    </div>
                                    <div class="customers-teaser-base-item__content">
                                        <a class="customers-teaser-base-item__content-text decoration-animation-none" href="/">
                                            <div class="customers-teaser-base-item__heading">
                                                <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide customers-teaser-base-item text-center" data-teaser-base-layout="grid">
                                <div class="customers-teaser-base-item__wrapper">
                                    <div class="customers-teaser-base-item__image">
                                        <a class="decoration-animation-none" href="/">
                                            <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
                                        </a>
                                    </div>
                                    <div class="customers-teaser-base-item__content">
                                        <a class="customers-teaser-base-item__content-text decoration-animation-none" href="/">
                                            <div class="customers-teaser-base-item__heading">
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

customElements.define('slider-customers', SliderCustomersBlock);