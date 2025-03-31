export default class AboutHistory extends HTMLElement {
    innerHTML = `
        <div class="p-4 mt-10 md:mt-15">
            <div class="flex flex-col gap-10 text-center" data-container-width="site">
                <h2 class="text-xl xl:text-2xl font-medium">Lịch sử phát triển</h2>
                <img alt="image" src="./src/assets/images/image-item-13.png">
            </div>
        </div>
    `
}

customElements.define('about-history', AboutHistory);