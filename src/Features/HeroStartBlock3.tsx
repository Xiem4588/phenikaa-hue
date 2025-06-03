import './styles/_hero_start_block.scss';

export default class HeroStartBlock3 extends HTMLElement {
    connectedCallback() {
        const isBackgroundImage = this.getAttribute('set-hero-start-background-image');

        this.innerHTML = `
            <div class="hero-start-block hero-start-block--image-row text-center" data-hero-start-background-image="${isBackgroundImage}">
                <div class="hero-start-block__image flex justify-center flex-1 items-center w-full lg:max-h-[500px] xl:max-h-[660px] overflow-hidden">
                    <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                </div>
                <div class="hero-start-block__content">
                    <div class="hero-start-block__wrapper">
                        <div class="hero-start-block__text-container">
                            <div class="hero-start-block__heading" data-container-width="site-small">
                                <h1 class="text-3xl xl:text-5xl font-medium hero-start-block__heading-title">Phenikaa Huế - Đối tác giải pháp vật liệu toàn cầu</h1>
                            </div>
                            <div class="hero-start-block__subheading" data-container-width="site-medium">
                                <p class="h5 hero-start-block__subheading-text">Chúng tôi khai thác, chế biến và cung ứng khoáng sản công nghiệp với mạng lưới hoạt động rộng khắp, tập trung vào Cristobalite, Quartz,.... Sản phẩm của chúng tôi đáp ứng nhu cầu đa dạng trong các ngành đá nhân tạo, gốm sứ, sơn phủ, thủy tinh, xây dựng và nhiều lĩnh vực khác.</p>
                            </div>
                            <div class="flex flex-col justify-center md:flex-row text-white gap-4">
                                <a href="/" class="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600 transition " href="/no/signin.html">
                                    <span>Liên hệ ngay</span>
                                </a>
                                <a href="/" class="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600 transition " href="/no/signin.html">
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

customElements.define('hero-start-block-3', HeroStartBlock3);