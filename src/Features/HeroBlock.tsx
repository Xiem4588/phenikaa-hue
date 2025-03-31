import './styles/_hero_block.scss';

export default class HeroBlock extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="hero-block" data-hero-background-image="true">
                <div class="hero-block__image">
                    <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                </div>
                <div class="hero-block__content flex items-center">
                    <div class="text-center space-y-8" data-container-width="site-small">
                        <h1 class="text-2xl xl:text-4xl font-medium">TÀI LIỆU KỸ THUẬT</h1>
                        <p class="line-clamp-3">
                            Cung cấp các tài liệu chuyên sâu về sản phẩm và cách sử dụng, giúp khách hàng hiểu rõ và tối ưu hiệu quả khi sử dụng sản phẩm của Phenikaa Chemical.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-block', HeroBlock);