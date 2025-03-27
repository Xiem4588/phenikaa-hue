import '../styles/_slider_product_item.scss';

export default class SliderProductItem extends HTMLElement {
    connectedCallback() {
        const layoutItem = this.getAttribute('set-teaser-layout');
        const isBackgroundItem = this.getAttribute('set-teaser-background');
        const layoutStand = this.getAttribute('set-teaser-layout-image-stand');

        this.innerHTML = `
            <div class="slider-product-item" data-teaser-base-background="${isBackgroundItem}" data-teaser-base-layout="${layoutItem}" data-teaser-base-layout-image-stand="${layoutStand}">
                <div class="slider-product-item__wrapper">
                    <div class="slider-product-item__image">
                        <a class="decoration-animation-none" href="/">
                            <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
                        </a>
                    </div>
                    <div class="slider-product-item__content">
                        <a class="slider-product-item__content-text decoration-animation-none text-center" href="/">
                            <div class="slider-product-item__heading">
                                <h3 class="h4 slider-product-item__title">Sản phẩm 01</h3>
                            </div>
                            <div class="slider-product-item__preamble text-gray-500">
                                Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.
                            </div>
                            <div class="slider-product-item__preamble text-amber-500">
                                Tìm hiểu thêm
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('slider-product-item', SliderProductItem);
