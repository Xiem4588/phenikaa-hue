import './styles/_footer_block.scss';
import i18next from "../configs/i18n";

export default class SiteFooter extends HTMLElement {connectedCallback() {
    this.render();
    i18next.on("languageChanged", () => this.render());
}

    render() {
        this.innerHTML = `
            <footer class="text-white py-12" data-container-width="footer-big">
                <div class="px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-50">
                    <div class="flex flex-col gap-4 flex-1 order-1 lg:order-0 lg:gap-10">
                        <h2 class="text-2xl font-bold mb-auto">Liên hệ với chúng tôi</h2>
                        <p class="text-gray-300 mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
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
                        <div>
                            © Copyright 2025. All Rights Reserved.
                        </div>
                    </div>

                    <div class="flex flex-col gap-10 lg:col-span-2 order-0 lg:order-1 lg:gap-20">
                        <div class="flex flex-col gap-4">
                            <h2 class="text-2xl font-bold mb-4">
                                <img class="" src="./src/assets/images/logo-white.png" alt="Logo Phenikaa Hue">
                            </h2>
                            <p class="text-gray-300">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>

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
