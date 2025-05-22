import '../styles/_teaser_base_item.scss';
import './Breadcrumbs';

export default class TeaserBaseItem extends HTMLElement {
    connectedCallback() {
        const layoutItem = this.getAttribute('set-teaser-layout');
        const isBackgroundItem = this.getAttribute('set-teaser-background');
        const isBreadcrumbs = this.getAttribute('set-teaser-breadcrumbs');
        const layoutStand = this.getAttribute('set-teaser-layout-image-stand');

        this.innerHTML = `
            <div class="teaser-base-item" data-background-item="${isBackgroundItem}" data-teaser-base-layout="${layoutItem}" data-teaser-base-layout-image-stand="${layoutStand}">
                <div class="teaser-base-item__wrapper">
                    <div class="teaser-base-item__image">
                        <a class="" href="/">
                            <img alt="image" src="./src/assets/images/start-hero-banner.jpg">
                        </a>
                    </div>
                    <div class="teaser-base-item__content">
                        <a class="teaser-base-item__content-text " href="/">
                            <div class="teaser-base-item__heading">
                                <h3 class="h4 teaser-base-item__title">Epinova AI Assistant 2.0 för Optimizely – nu med Nya smarta verktyg</h3>
                            </div>
                            <div class="teaser-base-item__time">
                                <time class="teaser-base-item__date" datetime="@Model.Content.StartPublish?.ToString("yyyy-MM-ddTHH:mm:ss")">27 nov. 2024</time>
                                <time class="teaser-base-item__reading-time" datetime="PT@(Model.ReadingTime)M">Lästid: 1 min</time>
                            </div>
                            <div class="teaser-base-item__preamble">
                                <p class="teaser-base-item__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                            </div>
                        </a>
                        ${isBreadcrumbs === "true" ? '<breadcrumbs-component set-breadcrumbs-size="small"></breadcrumbs-component>' : ''}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('teaser-base-item', TeaserBaseItem);
