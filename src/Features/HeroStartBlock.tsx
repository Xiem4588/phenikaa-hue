import './styles/_hero_start_block.scss';

export default class HeroStartBlock extends HTMLElement {
    connectedCallback() {
        const isBackgroundImage = this.getAttribute('set-hero-start-background-image');

        this.innerHTML = `
            <div class="hero-start-block hero-start-block--2-per-row" data-hero-start-background-image="${isBackgroundImage}">
                <div class="hero-start-block__image flex-1 lg:w-1/2 aspect-[4/3]">
                    <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                </div>
                <div class="hero-start-block__content lg:w-1/2">
                    <div class="hero-start-block__wrapper" data-container-width="site-large">
                        <div class="hero-start-block__text-container">
                            <div class="hero-start-block__heading">
                                <h1 class="text-3xl xl:text-5xl font-medium hero-start-block__heading-title">Phenikaa Huế – Khai mở giá trị khoáng sản Việt</h1>
                            </div>
                            <div class="hero-start-block__subheading">
                                <p>Với công suất 86.000 tấn/năm, Phenikaa Huế tự hào là nhà sản xuất Cristobalite cung cấp nguồn nguyên liệu chất lượng cao cho cả thị trường trong nước và quốc tế. Được thành lập vào 21/12/2016, Phenikaa Huế không ngừng mở rộng quy mô, trở thành đơn vị tiên phong trong khai thác và chế biến khoáng sản.</p>
                                <p>Sở hữu công nghệ tiên tiến từ Grenzebach (Đức), nhà máy Phenikaa Huế chính thức đi vào vận hành từ tháng 01/2019, đánh dấu bước đột phá quan trọng trong chiến lược nội địa hóa nguồn nguyên liệu Cristobalite. Nhờ đó, Việt Nam đã vươn lên trở thành một trong số ít quốc gia trên thế giới sản xuất thành công Cristobalite, cùng với Mỹ, Đức, Bỉ, Tây Ban Nha và Trung Quốc.</p>
                            </div>
                            <div class="flex flex-col md:flex-row text-white  gap-4">
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

customElements.define('hero-start-block', HeroStartBlock);