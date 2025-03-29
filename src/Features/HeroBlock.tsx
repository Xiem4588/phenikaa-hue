import './styles/_hero_block.scss';
import './Component/Breadcrumbs';

export default class HeroBlock extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="hero-block" data-hero-background-image="true">
                <div class="hero-block__image">
                    <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                </div>
                <div class="hero-block__content flex items-center">
                    <div class="text-center space-y-8" data-container-width="site-small">
                        <h1 class="hero-block__heading-title">TÀI LIỆU KỸ THUẬT</h1>
                        <p className="mt-6 max-w-2xl text-sm text-gray-700">
                            Cung cấp các tài liệu chuyên sâu về sản phẩm và cách sử dụng, giúp khách hàng hiểu rõ và tối ưu hiệu quả khi sử dụng sản phẩm của Phenikaa Chemical.
                        </p>
                        <div className="relative flex flex-col items-center p-6 text-center">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-block', HeroBlock);