
import './styles/_column_text_content_block.scss';

export default class OrderProductBlock extends HTMLElement {
    innerHTML = `
        <div class="column-text-content-block" data-background="primary-10">
            <div data-container-width="bodytext">
                <div class="flex flex-col gap-8 pt-12 text-center">
                    <h2 class="h1 column-text-content-block__heading-title">
                        Order sản phẩm mẫu 
                    </h2>
                </div>
                <div class="justify-center mt-15">
                    <a href="/" class="btn button--primary decoration-animation-none" href="/no/signin.html">
                        <span>Liên hệ với chúng tôi</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

customElements.define('order-product-block', OrderProductBlock);