
import './styles/_product_applications_block.scss';

export default class ProductApplications extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="product-applications-block">
                <div class="product-applications-grid" data-container-width="bodytext">
                    <div class="flex flex-col gap-8 pb-8 text-center">
                        <h2 class="text-3xl xl:text-5xl font-medium">Ứng dụng của sản phẩm</h2>
                    </div>
                    <div class="product-applications-block__wrapper" data-layout-smart="3-per-row">
                        <div class="product-applications-item" data-background-item="true" data-teaser-base-layout="grid">
                            <div class="product-applications-item__wrapper">
                                <div class="product-applications-item__image">
                                    <a class="" href="/">
                                        <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                                    </a>
                                </div>
                                <div class="product-applications-item__content">
                                    <a class="product-applications-item__content-text  text-center" href="/">
                                        <div class="product-applications-item__heading">
                                            <h3 class="h4 product-applications-item__title">Sản xuất đá nhân tạo</h3>
                                        </div>
                                        <div class="product-applications-item__preamble text-gray-500">
                                            Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product-applications-item" data-background-item="true" data-teaser-base-layout="grid">
                            <div class="product-applications-item__wrapper">
                                <div class="product-applications-item__image">
                                    <a class="" href="/">
                                        <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                                    </a>
                                </div>
                                <div class="product-applications-item__content">
                                    <a class="product-applications-item__content-text  text-center" href="/">
                                        <div class="product-applications-item__heading">
                                            <h3 class="h4 product-applications-item__title"> Sản xuất đá vật liệu xây dựng</h3>
                                        </div>
                                        <div class="product-applications-item__preamble text-gray-500">
                                            Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product-applications-item" data-background-item="true" data-teaser-base-layout="grid">
                            <div class="product-applications-item__wrapper">
                                <div class="product-applications-item__image">
                                    <a class="" href="/">
                                        <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                                    </a>
                                </div>
                                <div class="product-applications-item__content">
                                    <a class="product-applications-item__content-text  text-center" href="/">
                                        <div class="product-applications-item__heading">
                                            <h3 class="h4 product-applications-item__title"> Sản xuất vật liệu abc</h3>
                                        </div>
                                        <div class="product-applications-item__preamble text-gray-500">
                                            Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('product-applications', ProductApplications);