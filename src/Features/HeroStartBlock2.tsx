import './styles/_hero_start_block.scss';

export default class HeroStartBlock2 extends HTMLElement {
    connectedCallback() {
        const isBackgroundImage = this.getAttribute('set-hero-start-background-image');

        this.innerHTML = `
            <div class="hero-start-block hero-start-block--2-per-row" data-hero-start-background-image="${isBackgroundImage}">
                <div class="hero-start-block__image md:w-1/2 aspect-[4/3]">
                    <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                </div>
                <div class="hero-start-block__content md:w-1/2">
                    <div class="hero-start-block__wrapper" data-container-width="site-large">
                        <div class="hero-start-block__text-container">
                            <div class="hero-start-block__heading">
                                <h1 class="text-3xl xl:text-5xl font-medium hero-start-block__heading-title">Phenikaa Huế - Đối tác giải pháp vật liệu toàn cầu</h1>
                            </div>
                            <div class="hero-start-block__subheading">
                                <p class="h5 hero-start-block__subheading-text">Chúng tôi khai thác, chế biến và cung ứng khoáng sản công nghiệp với mạng lưới hoạt động rộng khắp, tập trung vào Cristobalite, Quartz,.... Sản phẩm của chúng tôi đáp ứng nhu cầu đa dạng trong các ngành đá nhân tạo, gốm sứ, sơn phủ, thủy tinh, xây dựng và nhiều lĩnh vực khác.</p>
                            </div>
                            <div class="hero-start-block__button">
                                <a href="/" class="btn button--primary decoration-animation-none" href="/no/signin.html">
                                    <span>Liên hệ ngay</span>
                                </a>
                                <a href="/" class="btn decoration-animation-none" href="/no/signin.html">
                                    <span>Tìm hiểu thêm</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-start-block-2', HeroStartBlock2);