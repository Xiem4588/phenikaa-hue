import '../styles/_breadcrumbs.scss';

export default class Breadcrumbs extends HTMLElement {
    connectedCallback() {
        const size = this.getAttribute('set-breadcrumbs-size');

        this.innerHTML = `
            <div class="breadcrumbs" data-breadcrumbs-size="${size}">
                <nav class="breadcrumbs__navigation" aria-label="You are here">
                    <ul class="breadcrumbs__items">
                        <li class="breadcrumbs__item">
                            <a class="breadcrumbs__link" href="/sv/">Start</a>
                        </li>
                        <li class="breadcrumbs__item">
                            <a class="breadcrumbs__link" href="/article/">Blog</a>
                        </li>
                        <li class="breadcrumbs__item">
                            <a class="breadcrumbs__link" href="/article/">2025</a>
                        </li>
                        <li class="breadcrumbs__item">
                            <span class="breadcrumbs__current" aria-current="page">Case Studies</span>
                        </li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define("breadcrumbs-component", Breadcrumbs);