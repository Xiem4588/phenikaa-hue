
import './styles/_article_list_block.scss';
import './Component/TeaserBaseItem';

export default class ArticleListBlock extends HTMLElement {
    connectedCallback() {
        const pageTitle = this.getAttribute('set-article-page-title');
        const titleBlock = this.getAttribute('set-article-list-title');
        const layoutItem = this.getAttribute('set-article-list-teaser-layout');
        const dataBackground = this.getAttribute('set-article-list-background');
        const dataLayoutSmart = this.getAttribute('set-article-list-layout-smart');
        const dataContainerWidth = this.getAttribute('set-article-list-container-width');
        const isBreadcrumbs = this.getAttribute('set-set-article-list-breadcrumbs');
        const teaserLayoutImageStand = this.getAttribute('set-article-list-teaser-layout-image-stand');

        this.innerHTML = `
            <div class="article-list-block" data-background="${dataBackground}">
                <div class="article-list-block__container" data-container-width="${dataContainerWidth ? dataContainerWidth : 'site'}">
                    ${titleBlock !== "false" ? `
                        <div class="article-list-block__heading">
                            <h2 class="article-list-block__title">${pageTitle}</h2>
                        </div>
                    ` : ''}
                    <div class="article-list-block__wrapper" data-layout-smart="${dataLayoutSmart}">
                        <teaser-base-item set-teaser-layout="${layoutItem}" set-teaser-layout-image-stand="${teaserLayoutImageStand}" set-teaser-background="true" set-teaser-breadcrumbs="${isBreadcrumbs}"></teaser-base-item>
                        <teaser-base-item set-teaser-layout="${layoutItem}" set-teaser-layout-image-stand="${teaserLayoutImageStand}" set-teaser-background="true" set-teaser-breadcrumbs="${isBreadcrumbs}"></teaser-base-item>
                        <teaser-base-item set-teaser-layout="${layoutItem}" set-teaser-layout-image-stand="${teaserLayoutImageStand}" set-teaser-background="true" set-teaser-breadcrumbs="${isBreadcrumbs}"></teaser-base-item>
                        <teaser-base-item set-teaser-layout="${layoutItem}" set-teaser-layout-image-stand="${teaserLayoutImageStand}" set-teaser-background="true" set-teaser-breadcrumbs="${isBreadcrumbs}"></teaser-base-item>
                        <teaser-base-item set-teaser-layout="${layoutItem}" set-teaser-layout-image-stand="${teaserLayoutImageStand}" set-teaser-background="true" set-teaser-breadcrumbs="${isBreadcrumbs}"></teaser-base-item>
                        <teaser-base-item set-teaser-layout="${layoutItem}" set-teaser-layout-image-stand="${teaserLayoutImageStand}" set-teaser-background="true" set-teaser-breadcrumbs="${isBreadcrumbs}"></teaser-base-item>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('article-list-block', ArticleListBlock);