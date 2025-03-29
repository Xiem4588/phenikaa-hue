import './styles/_article_hero_block.scss';
import './Component/Breadcrumbs';

export default class ArticleHeroBlock extends HTMLElement {
    connectedCallback() {
        const isBackgroundImage = this.getAttribute('set-article-hero-background-image');
        const backgroundColorName = this.getAttribute('set-article-hero-background-color');

        this.innerHTML = `
            <div class="article-hero-block" data-article-hero-background-image="${isBackgroundImage}" data-background="${backgroundColorName}">
                ${isBackgroundImage === 'true' ? `
                    <div class="article-hero-block__image">
                        <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                    </div>
                ` : ''}
                <div class="article-hero-block__content">
                    <div class="article-hero-block__wrapper" data-container-width="site-large">
                        <breadcrumbs-component></breadcrumbs-component>
                        <div class="article-hero-block__text-container">
                            <div class="article-hero-block__heading">
                                <h1 class="article-hero-block__heading">Kundcase</h1>
                                <h2 class="article-hero-block__subheading h3">Utforska vår uppskattade kunskapsblogg</h2>
                            </div>
                            <div class="article-hero-block__preamble">
                                <p class="article-hero-block__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('article-hero-block', ArticleHeroBlock);