
import './styles/_list_product_block.scss';
export default class ListProductBlock extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="list-product-block">
                <div class="list-product-block__container" data-container-width="bodytext">
                    <div class="list-product-block__wrapper" data-layout-smart="3-per-row">
                        <div class="list-product-block-item text-center" data-teaser-base-layout="grid">
                            <div class="list-product-block-item__wrapper">
                                <div class="list-product-block-item__image">
                                    <a class="decoration-animation-none" href="/">
                                        <img alt="image" src="./src/assets/images/image-item.png">
                                    </a>
                                </div>
                                <div class="list-product-block-item__content">
                                    <a class="list-product-block-item__content-text decoration-animation-none" href="/">
                                        <div class="list-product-block-item__heading">
                                            <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="list-product-block-item text-center" data-teaser-base-layout="grid">
                            <div class="list-product-block-item__wrapper">
                                <div class="list-product-block-item__image">
                                    <a class="decoration-animation-none" href="/">
                                        <img alt="image" src="./src/assets/images/image-item.png">
                                    </a>
                                </div>
                                <div class="list-product-block-item__content">
                                    <a class="list-product-block-item__content-text decoration-animation-none" href="/">
                                        <div class="list-product-block-item__heading">
                                            <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="list-product-block-item text-center" data-teaser-base-layout="grid">
                            <div class="list-product-block-item__wrapper">
                                <div class="list-product-block-item__image">
                                    <a class="decoration-animation-none" href="/">
                                        <img alt="image" src="./src/assets/images/image-item.png">
                                    </a>
                                </div>
                                <div class="list-product-block-item__content">
                                    <a class="list-product-block-item__content-text decoration-animation-none" href="/">
                                        <div class="list-product-block-item__heading">
                                            <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="list-product-block-item text-center" data-teaser-base-layout="grid">
                            <div class="list-product-block-item__wrapper">
                                <div class="list-product-block-item__image">
                                    <a class="decoration-animation-none" href="/">
                                        <img alt="image" src="./src/assets/images/image-item.png">
                                    </a>
                                </div>
                                <div class="list-product-block-item__content">
                                    <a class="list-product-block-item__content-text decoration-animation-none" href="/">
                                        <div class="list-product-block-item__heading">
                                            <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="list-product-block-item text-center" data-teaser-base-layout="grid">
                            <div class="list-product-block-item__wrapper">
                                <div class="list-product-block-item__image">
                                    <a class="decoration-animation-none" href="/">
                                        <img alt="image" src="./src/assets/images/image-item.png">
                                    </a>
                                </div>
                                <div class="list-product-block-item__content">
                                    <a class="list-product-block-item__content-text decoration-animation-none" href="/">
                                        <div class="list-product-block-item__heading">
                                            <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="list-product-block-item text-center" data-teaser-base-layout="grid">
                            <div class="list-product-block-item__wrapper">
                                <div class="list-product-block-item__image">
                                    <a class="decoration-animation-none" href="/">
                                        <img alt="image" src="./src/assets/images/image-item.png">
                                    </a>
                                </div>
                                <div class="list-product-block-item__content">
                                    <a class="list-product-block-item__content-text decoration-animation-none" href="/">
                                        <div class="list-product-block-item__heading">
                                            <h3 class="h4 teaser-base-item__title">Bred Binder</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="justify-center mt-15">
                        <a href="/" class="btn decoration-animation-none" href="/no/signin.html">
                            <span>Xem thêm</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('list-product-block', ListProductBlock);