
import './styles/_column_text_content_block.scss';

export default class OrderProductBlock extends HTMLElement {
    innerHTML = `
        <div class="column-text-content-block" data-background="primary-10">
            <div data-container-width="bodytext">
                <div class="flex flex-col gap-8 pt-12 text-center">
                    <h2 class="text-2xl xl:text-4xl font-medium">Order sản phẩm mẫu</h2>
                </div>
                <div class="justify-center mt-8 text-white text-center">
                    <a href="#" class="bg-orange-500 px-6 py-2 rounded ">Liên hệ với chúng tôi</a>
                </div>
            </div>
        </div>
    `;
}

customElements.define('order-product-block', OrderProductBlock);