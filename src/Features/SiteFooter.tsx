import './styles/_footer_block.scss';
import i18next from "../configs/i18n";

export default class SiteFooter extends HTMLElement {connectedCallback() {
    this.render();
    i18next.on("languageChanged", () => this.render());
}

    render() {
        this.innerHTML = `
            <footer class="text-white py-12" data-container-width="bodytext">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-20">
                    <div class="flex flex-col gap-4 flex-1 order-1 lg:order-0 lg:gap-10">
                        <div class="flex flex-col gap-4">
                            <div class="text-2xl font-bold mb-4">
                                <img class="" src="./src/assets/images/logo-white.png" alt="Logo Phenikaa Hue">
                            </div>
                            <p class="text-gray-300">
                                Phenikaa Huế – Đối tác cho giải pháp vật liệu toàn cầu.
                            </p>
                        </div>
                        <div class="flex gap-4">
                            <div>
                                <a class="text-white rounded-full " href="https://phenikaahue.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 32 32"><path xmlns="http://www.w3.org/2000/svg" d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM23.487 22c0.268-1.264 0.437-2.606 0.492-4h3.983c-0.104 1.381-0.426 2.722-0.959 4h-3.516zM6.513 12c-0.268 1.264-0.437 2.606-0.492 4h-3.983c0.104-1.381 0.426-2.722 0.959-4h3.516zM21.439 12c0.3 1.28 0.481 2.62 0.54 4h-5.979v-4h5.439zM16 10v-5.854c0.456 0.133 0.908 0.355 1.351 0.668 0.831 0.586 1.625 1.488 2.298 2.609 0.465 0.775 0.867 1.638 1.203 2.578h-4.852zM10.351 7.422c0.673-1.121 1.467-2.023 2.298-2.609 0.443-0.313 0.895-0.535 1.351-0.668v5.854h-4.852c0.336-0.94 0.738-1.803 1.203-2.578zM14 12v4h-5.979c0.059-1.38 0.24-2.72 0.54-4h5.439zM2.997 22c-0.533-1.278-0.854-2.619-0.959-4h3.983c0.055 1.394 0.224 2.736 0.492 4h-3.516zM8.021 18h5.979v4h-5.439c-0.3-1.28-0.481-2.62-0.54-4zM14 24v5.854c-0.456-0.133-0.908-0.355-1.351-0.668-0.831-0.586-1.625-1.488-2.298-2.609-0.465-0.775-0.867-1.638-1.203-2.578h4.852zM19.649 26.578c-0.673 1.121-1.467 2.023-2.298 2.609-0.443 0.312-0.895 0.535-1.351 0.668v-5.854h4.852c-0.336 0.94-0.738 1.802-1.203 2.578zM16 22v-4h5.979c-0.059 1.38-0.24 2.72-0.54 4h-5.439zM23.98 16c-0.055-1.394-0.224-2.736-0.492-4h3.516c0.533 1.278 0.855 2.619 0.959 4h-3.983zM25.958 10h-2.997c-0.582-1.836-1.387-3.447-2.354-4.732 1.329 0.636 2.533 1.488 3.585 2.54 0.671 0.671 1.261 1.404 1.766 2.192zM5.808 7.808c1.052-1.052 2.256-1.904 3.585-2.54-0.967 1.285-1.771 2.896-2.354 4.732h-2.997c0.504-0.788 1.094-1.521 1.766-2.192zM4.042 24h2.997c0.583 1.836 1.387 3.447 2.354 4.732-1.329-0.636-2.533-1.488-3.585-2.54-0.671-0.671-1.261-1.404-1.766-2.192zM24.192 26.192c-1.052 1.052-2.256 1.904-3.585 2.54 0.967-1.285 1.771-2.896 2.354-4.732h2.997c-0.504 0.788-1.094 1.521-1.766 2.192z"/></svg>
                                </a>
                            </div>
                            <div>
                                <a class="text-white rounded-full " target="_blank" href="https://www.facebook.com/phenikaahue">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 32 32"><path xmlns="http://www.w3.org/2000/svg" d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"/></svg>
                                </a>
                            </div>
                            <div>
                                <a class="text-white rounded-full " target="_blank" tar href="https://vn.linkedin.com/in/phenikaa-hue-63a6722aa?trk=public_post_feed-actor-name">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 32 32"><path xmlns="http://www.w3.org/2000/svg" d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"/></svg>
                                </a>
                            </div>
                            <div>
                                <a class="text-white rounded-full " href="mailto:kdvt.pnkh@phenikaa.com">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 32 32"><path xmlns="http://www.w3.org/2000/svg" d="M26.666 0h-21.332c-2.934 0-5.334 2.4-5.334 5.333v21.333c0 2.934 2.4 5.334 5.334 5.334h21.332c2.936 0 5.334-2.4 5.334-5.334v-21.333c0-2.934-2.398-5.333-5.334-5.333zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.864-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"/></svg>
                                </a>
                            </div>
                        </div>
                        <div class="flex">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn vào đây"
                                class="flex-1 px-4 py-2 rounded-l-lg bg-white text-gray-700 focus:outline-none"
                            />
                            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4 20.4L20.85 12.92C21.66 12.57 21.66 11.43 20.85 11.08L3.4 3.60002C2.74 3.31002 2.01 3.80002 2.01 4.51002L2 9.12002C2 9.62002 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div>© Copyright 2025. All Rights Reserved.</div>
                    </div>

                    <div class="flex flex-col gap-10 lg:col-span-2 order-0 lg:order-1">
                        <div class="grid md:grid-cols-3 gap-10">
                            <div class="flex flex-col gap-4">
                                <h3 class="h3">Trang chủ</h3>
                                <ul class="space-y-3">
                                    <li><a href="#">Trang chủ</a></li>
                                    <li><a href="#">Về chúng tôi</a></li>
                                    <li><a href="#">Sản phẩm</a></li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-4">
                                <h3 class="h3">Hỗ trợ</h3>
                                <ul class="space-y-3">
                                    <li><a href="#">Tài liệu kỹ thuật</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-4">
                                <h3 class="h3">Liên hệ</h3>
                                <p class="text-gray-300">
                                    Lô CN 15, KCN, Phong Điền, Thành phố Huế
                                </p>
                                <p>
                                    <span class="font-bold">Email:</span> 
                                    <a href="mailto:PhenikaaCristobalite@sale.com" 
                                        class="text-blue-400 hover:underline break-all">
                                        PhenikaaCristobalite@sale.com
                                    </a>
                                </p>
                                <p>
                                    <span class="font-bold">Tel:</span> 
                                    <a href="tel:099xxxxxxxxx" 
                                        class="text-blue-400 hover:underline break-all">
                                        099xxxxxxxxx
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
