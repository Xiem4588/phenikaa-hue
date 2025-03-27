import './styles/_hero_block.scss';
import './Component/Breadcrumbs';

export default class HeroBlock extends HTMLElement {
    connectedCallback() {
        const isBackgroundImage = this.getAttribute('set-hero-background-image');
        const backgroundColorName = this.getAttribute('set-hero-background-color');

        this.innerHTML = `
            <div class="hero-block" data-hero-background-image="${isBackgroundImage}" data-background="${backgroundColorName ? backgroundColorName : ''}">
                ${isBackgroundImage === 'true' ? `
                    <div class="hero-block__image">
                        <img alt="image" src="https://integration.epinova.se/globalassets/epinova.se/bildbank/detaljbilder/epinova-laptop-figma-svkom-retusch-2000px.jpg?mode=crop&amp;scale=both&amp;format=webp&amp;f.sharpen=25&amp;down.filter=robidoux_sharp&amp;up.filter=robidoux_sharp&amp;">
                    </div>
                ` : ''}
                <div class="hero-block__content">
                    <div class="hero-block__wrapper" data-container-width="site-large">
                        <breadcrumbs-component></breadcrumbs-component>
                        <div class="hero-block__text-container">
                            <div class="hero-block__heading">
                                <h1 class="hero-block__heading-title">Kundcase</h1>
                            </div>
                            <div class="hero-block__preamble">
                                <p class="hero-block__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-block', HeroBlock);