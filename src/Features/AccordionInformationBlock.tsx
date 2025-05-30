
import './styles/_accordion_content_block.scss';

export default class AccordionInformationBlock extends HTMLElement {
    innerHTML = `
        <div class="accordion-content-block">
            <div class="accordion-content-block__wrapper" data-container-width="site-small">
                <h2 class="text-2xl xl:text-4xl font-medium text-center">Thông tin bổ sung</h2>

                <div class="accordion-items-wrapper flex flex-col gap-4">
                    <div class="accordion-item rounded-lg bg-white p-4 shadow-md outline outline-black/2" aria-hidden="true">
                        <div class="flex items-center gap-x-4 py-2 h4" data-accordion-button>
                            Quy trình sản xuất
                        </div>
                        <div class="item-text small text-gray-500">Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks.</div>
                    </div>
                    <div class="accordion-item rounded-lg bg-white p-4 shadow-md outline outline-black/2" aria-hidden="false">
                        <div class="flex items-center gap-x-4 py-2 h4" data-accordion-button>
                            Kiểm soát chất lượng
                        </div>
                        <div class="item-text small text-gray-500">Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks.</div>
                    </div>
                    <div class="accordion-item rounded-lg bg-white p-4 shadow-md outline outline-black/2" aria-hidden="false">
                        <div class="flex items-center gap-x-4 py-2 h4" data-accordion-button>
                            Chứng nhận sản phẩm
                        </div>
                        <div class="item-text small text-gray-500">Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks.</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

customElements.define('accordion-information-block', AccordionInformationBlock);