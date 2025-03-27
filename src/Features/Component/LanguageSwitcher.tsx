export default class LanguageSwitcher extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <select id="language-switcher">
                <option value="en">English</option>
                <option value="vn">Tiếng Việt</option>
            </select>
        `
    }
}

customElements.define('language-switcher', LanguageSwitcher);