
import './styles/_list_product_block.scss';
import './FormSearchBar'
export default class ListProductBlock extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <form-search-bar-block></form-search-bar-block>
            <div class="list-product-block">
                <div class="list-product-block__container" data-container-width="bodytext">
                    <div class="list-product-block__wrapper" data-layout-smart="3-per-row">
                        <div class="list-product-block-item text-center" data-teaser-base-layout="grid">
                            <div class="list-product-block-item__wrapper">
                                <div class="list-product-block-item__image">
                                    <a class="decoration-animation-none" href="/">
                                        <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
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
                                        <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
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
                                        <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
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
                                        <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
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
                                        <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
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
                                        <img alt="image" src="https://www.epinova.se/globalassets/epinova.se/kundcase/case-postnord-letters.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=674&height=506&crop=23,0,2020,1499">
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