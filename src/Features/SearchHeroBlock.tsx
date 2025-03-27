import './styles/search-hero-block/index.scss';

export default class SearchHeroBlock extends HTMLElement {
    setupCheckboxBehavior() {
        const showAllCheckbox = this.querySelector("#filteroption-contentType-") as HTMLInputElement;
        const otherCheckboxes = this.querySelectorAll<HTMLInputElement>(".filteroption__input:not(#filteroption-contentType-)");

        otherCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    showAllCheckbox.checked = false;
                }
                const anyChecked = Array.from(otherCheckboxes).some(cb => cb.checked);
                if (!anyChecked) {
                    showAllCheckbox.checked = true;
                }
            });
        });

        showAllCheckbox.addEventListener("change", () => {
            if (showAllCheckbox.checked) {
                otherCheckboxes.forEach(checkbox => (checkbox.checked = false));
            }
        });
    }

    connectedCallback() {

        this.innerHTML = `
            <div class="search-page__hero">
                <div class="search-page__hero-container" data-container-width="site-large">
                    <div class="search-page__heading">
                        <h1>Search page</h1>
                        <p>Use our search function to more easily find what you are looking for.</p>
                    </div>
                    <form class="filter-list-block__form" method="get" role="search" data-filter-customfilter="none">
                        <div class="filters">
                            <div class="filter" data-filter-appearance="tag" data-filter-type="freetext" data-filter-selectiontype="freetext" aria-hidden="false">
                                <div class="filter__content" role="group" aria-labelledby="term-1227">
                                    <div id="term-1227" class="filter__wrapper"></div>
                                    <div class="filter__optioncontainer">
                                        <div class="filter-input__quick-search">
                                            <label for="filteroption-term-ai" class="filter-input__label"></label>
                                            <svg class="search-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"/></svg>
                                            <input class="filter-input__quick-search-input" id="filteroption-term-ai" type="text" name="term" placeholder="" tabindex="0" checked="" value="ai">
                                        </div>
                                        <div class="filter-text">
                                            <div class="filter-list-block__resultlisttext">Your search for "ai" returned 25 hits.</div>
                                            <p class="filter__heading">Filter your search</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="filter" data-filter-appearance="tag" data-filter-type="contenttype" data-filter-selectiontype="multiplechoice" aria-hidden="false">
                                <div class="filter__content" role="group" aria-labelledby="contentType-1227">
                                    <div id="contentType-1227" class="filter__wrapper">
                                        <legend class="filter__legend">Content type</legend>
                                    </div>
                                    <div class="filter__optioncontainer">
                                        <div class="filteroption">
                                            <input class="filteroption__input" id="filteroption-contentType-" type="checkbox" name="contentType" checked value="">
                                            <label for="filteroption-contentType-" class="filteroption__label">Show all</label>
                                        </div>
                                        <div class="filteroption">
                                            <input class="filteroption__input" id="filteroption-contentType-PersonPage" type="checkbox" name="contentType" value="PersonPage">
                                            <label for="filteroption-contentType-PersonPage" class="filteroption__label">Person</label>
                                        </div>
                                        <div class="filteroption">
                                            <input class="filteroption__input" id="filteroption-contentType-CasePage" type="checkbox" name="contentType" value="CasePage">
                                            <label for="filteroption-contentType-CasePage" class="filteroption__label">Reference Case</label>
                                        </div>
                                        <div class="filteroption">
                                            <input class="filteroption__input" id="filteroption-contentType-BlogPostPage" type="checkbox" name="contentType" value="BlogPostPage">
                                            <label for="filteroption-contentType-BlogPostPage" class="filteroption__label">Blog Post</label>
                                        </div>
                                        <div class="filteroption">
                                            <input class="filteroption__input" id="filteroption-contentType-ArticlePage" type="checkbox" name="contentType" value="ArticlePage">
                                            <label for="filteroption-contentType-ArticlePage" class="filteroption__label">Article</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        `
        this.setupCheckboxBehavior();
    }
}

customElements.define('search-hero-block', SearchHeroBlock);
