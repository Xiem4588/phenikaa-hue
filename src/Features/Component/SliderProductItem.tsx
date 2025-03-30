import '../styles/_slider_product_item.scss';

export default class SliderProductItem extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="slider-product-item" data-background-item="true" data-teaser-base-layout="grid" data-teaser-base-layout-image-stand="left">
                <div class="slider-product-item__wrapper">
                    <div class="slider-product-item__image">
                        <a class="decoration-animation-none" href="/">
                            <img alt="image" src="./src/assets/images/image-item-3.png">
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
