import '../styles/_quick_search.scss';

export default class QuickSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header-quick-search__bar">
                <div class="header-quick-search__content">
                    <form class="header-quick-search__form" method="get" action="/search-page">
                        <svg class="header-quick-search__search-icon" width="30" height="24" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14.2635 12.9657L19.2353 17.9375L18.1875 18.9853L13.2157 14.0135L13.2568 13.9724L13.2022 14.0124C12.7864 14.3174 12.3304 14.5565 11.8343 14.7297C11.3384 14.903 10.8105 14.9896 10.2506 14.9896C8.86405 14.9896 7.68595 14.5045 6.7157 13.5343C5.74545 12.5641 5.26042 11.3862 5.26042 10C5.26042 8.61384 5.74545 7.43595 6.7157 6.4657C7.68595 5.49545 8.86384 5.01042 10.25 5.01042C11.6362 5.01042 12.8141 5.49545 13.7843 6.4657C14.7545 7.43595 15.2396 8.61405 15.2396 10.0006C15.2396 10.5605 15.153 11.0884 14.9797 11.5843C14.8065 12.0804 14.5674 12.5364 14.2624 12.9522L14.2156 12.9178L14.2635 12.9657ZM10.25 13.5104C11.225 13.5104 12.054 13.1691 12.7365 12.4865C13.4191 11.804 13.7604 10.975 13.7604 10C13.7604 9.02505 13.4191 8.196 12.7365 7.51347C12.054 6.83094 11.225 6.48958 10.25 6.48958C9.27505 6.48958 8.446 6.83094 7.76347 7.51347C7.08094 8.196 6.73958 9.02505 6.73958 10C6.73958 10.975 7.08094 11.804 7.76347 12.4865C8.446 13.1691 9.27505 13.5104 10.25 13.5104Z" stroke-width="0.0208333"/></svg>
                        <input class="header-quick-search__form-input" type="search" name="" placeholder="Search for a person, service, customer..." aria-label="Search">
                        <button class="header-quick-search__form-button">Search</button>
                    </form>
                </div>
            </div>
        `
    }
}

customElements.define('quick-search', QuickSearch);