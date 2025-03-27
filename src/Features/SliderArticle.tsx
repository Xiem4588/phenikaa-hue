
import './styles/_article_list_block.scss';
import './styles/_slider-swiper-block.scss';
import './Component/TeaserBaseItem';

export default class SliderArticle extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="slider-article-block">
                <div class="slider-article-grid" data-container-width="bodytext">
                    <div class="hero-block__text-container py-8">
                        <div class="hero-block__heading">
                            <h2 class="h1 hero-block__heading-title">
                                Sản phẩm tiêu biểu (Sản phẩm nhựa polyester không no) (Sản phẩm Cristobalite)
                            </h2>
                        </div>
                        <div class="hero-block__preamble">
                            <p class="hero-block__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                        </div>
                    </div>
                    <div class="swiper" data-slider-article>
                        <div class="swiper-wrapper">
                            <teaser-base-item class="swiper-slide" set-teaser-layout="grid" set-teaser-breadcrumbs="false"></teaser-base-item>
                            <teaser-base-item class="swiper-slide" set-teaser-layout="grid" set-teaser-breadcrumbs="false"></teaser-base-item>
                            <teaser-base-item class="swiper-slide" set-teaser-layout="grid" set-teaser-breadcrumbs="false"></teaser-base-item>
                            <teaser-base-item class="swiper-slide" set-teaser-layout="grid" set-teaser-breadcrumbs="false"></teaser-base-item>
                            <teaser-base-item class="swiper-slide" set-teaser-layout="grid" set-teaser-breadcrumbs="false"></teaser-base-item>
                            <teaser-base-item class="swiper-slide" set-teaser-layout="grid" set-teaser-breadcrumbs="false"></teaser-base-item>
                        </div>
                        <div class="swiper-button-next">
                            <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.362 7.84495L28.0586 18.3333H7.12451V21.6666H28.0586L18.362 32.1549L20.5407 34.5116L33.957 19.9999L20.5407 5.48828L18.362 7.84495Z"/>
                            </svg>                                                      
                        </div>
                        <div class="swiper-button-prev">
                            <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5964 7.84491L17.4192 5.48657L3.98291 19.9999L17.4192 34.5116L19.5964 32.1532L9.88747 21.6666H30.8169V18.3332H9.88593L19.5964 7.84491Z"/>
                            </svg>                            
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('slider-article', SliderArticle);