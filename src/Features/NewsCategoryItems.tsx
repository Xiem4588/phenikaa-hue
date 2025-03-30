import './styles/_teaser_base_item.scss';

export default class NewsCategoryItems extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-20 p-5 lg:py-10 container-type" data-container-width="site">
                <div class="teaser-base-item">
                    <div class="teaser-base-item__wrapper">
                        <div class="teaser-base-item__image">
                            <a class="decoration-animation-none" href="/">
                                <img alt="image" src="./src/assets/images/image-item-6.png">
                            </a>
                        </div>
                        <div class="teaser-base-item__content">
                            <a class="teaser-base-item__content-text decoration-animation-none" href="/">
                                <div class="teaser-base-item__heading">
                                    <h3 class="teaser-base-item__title">Tin tức 1</h3>
                                </div>
                                <div class="teaser-base-item__time">
                                    <time class="teaser-base-item__date">14/02/2024</time>
                                </div>
                                <div class="teaser-base-item__preamble">
                                    <p class="teaser-base-item__preamble-text">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="teaser-base-item">
                    <div class="teaser-base-item__wrapper">
                        <div class="teaser-base-item__image">
                            <a class="decoration-animation-none" href="/">
                                <img alt="image" src="./src/assets/images/image-item-6.png">
                            </a>
                        </div>
                        <div class="teaser-base-item__content">
                            <a class="teaser-base-item__content-text decoration-animation-none" href="/">
                                <div class="teaser-base-item__heading">
                                    <h3 class="teaser-base-item__title">Tin tức 1</h3>
                                </div>
                                <div class="teaser-base-item__time">
                                    <time class="teaser-base-item__date">14/02/2024</time>
                                </div>
                                <div class="teaser-base-item__preamble">
                                    <p class="teaser-base-item__preamble-text">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="teaser-base-item">
                    <div class="teaser-base-item__wrapper">
                        <div class="teaser-base-item__image">
                            <a class="decoration-animation-none" href="/">
                                <img alt="image" src="./src/assets/images/image-item-6.png">
                            </a>
                        </div>
                        <div class="teaser-base-item__content">
                            <a class="teaser-base-item__content-text decoration-animation-none" href="/">
                                <div class="teaser-base-item__heading">
                                    <h3 class="teaser-base-item__title">Tin tức 1</h3>
                                </div>
                                <div class="teaser-base-item__time">
                                    <time class="teaser-base-item__date">14/02/2024</time>
                                </div>
                                <div class="teaser-base-item__preamble">
                                    <p class="teaser-base-item__preamble-text">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="teaser-base-item">
                    <div class="teaser-base-item__wrapper">
                        <div class="teaser-base-item__image">
                            <a class="decoration-animation-none" href="/">
                                <img alt="image" src="./src/assets/images/image-item-6.png">
                            </a>
                        </div>
                        <div class="teaser-base-item__content">
                            <a class="teaser-base-item__content-text decoration-animation-none" href="/">
                                <div class="teaser-base-item__heading">
                                    <h3 class="teaser-base-item__title">Tin tức 1</h3>
                                </div>
                                <div class="teaser-base-item__time">
                                    <time class="teaser-base-item__date">14/02/2024</time>
                                </div>
                                <div class="teaser-base-item__preamble">
                                    <p class="teaser-base-item__preamble-text">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="teaser-base-item">
                    <div class="teaser-base-item__wrapper">
                        <div class="teaser-base-item__image">
                            <a class="decoration-animation-none" href="/">
                                <img alt="image" src="./src/assets/images/image-item-6.png">
                            </a>
                        </div>
                        <div class="teaser-base-item__content">
                            <a class="teaser-base-item__content-text decoration-animation-none" href="/">
                                <div class="teaser-base-item__heading">
                                    <h3 class="teaser-base-item__title">Tin tức 1</h3>
                                </div>
                                <div class="teaser-base-item__time">
                                    <time class="teaser-base-item__date">14/02/2024</time>
                                </div>
                                <div class="teaser-base-item__preamble">
                                    <p class="teaser-base-item__preamble-text">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('news-category-item', NewsCategoryItems);
