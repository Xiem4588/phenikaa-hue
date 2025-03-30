import './styles/_hot_news_block.scss';

export default class HotNewsBlock extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="grid md:grid-cols-4 gap-4 my-10" data-container-width="site">
                <div class="md:col-span-3">
                    <div class="hot-news-block">
                        <div class="hot-news-block__image">
                            <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                        </div>
                        <div class="hot-news-block__content flex items-end">
                            <div class="space-y-4 md:space-y-8">
                                <div class="flex items-center gap-5">
                                    <span class="bg-gradient p-2">Tin tức công ty</span>
                                    <span class="small f-montserrat">Nov 18, 2025</span>
                                </div>
                                <h2 class="h1">Tin hot</h2>
                                <p class="line-clamp-3">
                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="md:col-span-1 grid grid-cols-3 md:grid-cols-1 gap-4">
                    <div class="hot-news-block">
                        <div class="hot-news-block__image">
                            <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                        </div>
                        <div class="hot-news-block__content text-center flex items-center justify-center">
                            <h2 class="h3">Tin tức công ty</h2>
                        </div>
                    </div>
                    <div class="hot-news-block">
                        <div class="hot-news-block__image">
                            <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                        </div>
                        <div class="hot-news-block__content text-center flex items-center justify-center">
                            <h2 class="h3">Tin tức ngành</h2>
                        </div>
                    </div>
                    <div class="hot-news-block">
                        <div class="hot-news-block__image">
                            <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                        </div>
                        <div class="hot-news-block__content text-center flex items-center justify-center">
                            <h2 class="h3">Đối tác & Khách hàng</h2>
                        </div>
                    </div>
                </div>
            </div>
            
        `;
    }
}

customElements.define('hot-news-block', HotNewsBlock);