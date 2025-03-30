
import './styles/_column_text_content_block.scss';

export default class ColumnTextContentBlock extends HTMLElement {
    innerHTML = `
        <div class="column-text-content-block" data-background="primary-10">
            <div data-container-width="bodytext">
                <div class="flex flex-col gap-8 py-14 text-center">
                    <h2 class="h1 column-text-content-block__heading-title">
                        CRISTOBALITE DẠNG BỘT
                    </h2>
                    <p class="text-gray-500">
                        Text giới thiệu chung Te aliquam noluisse his. Et vel epicuri detracto indoctum, et fierent pericula vim, veniam epicuri an eum. Ad mutat quaestio erroribus eam, ei mea modus volumus abhorreant. 
                    </p>
                </div>
                <div class="column-text-content-block__wrapper" data-layout-smart="2-per-row">
                    <div class="flex flex-col gap-8 rounded-lg bg-white p-12 shadow-lg outline outline-black/2 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                        <div class="column-text-content-block__heading">
                            <h2 class="column-text-content-block__heading-title">Thông tin kỹ thuật</h2>
                        </div>
                        <p class="text-gray-500">complete payment options, let's shop now and use your favorite payment method</p>
                        <div class="column-text-content-block__image">
                            <img alt="image" src="./src/assets/images/image-item-6.png">
                        </div>
                    </div>
                    <div class="flex flex-col gap-8 rounded-lg bg-white p-12 shadow-lg outline outline-black/2 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                        <div class="column-text-content-block__heading">
                            <h2 class="column-text-content-block__heading-title">Quy cách đóng gói</h2>
                        </div>
                        <p class="text-gray-500">let's join membership now and get discounts up to 72%</p>
                        <div class="column-text-content-block__image">
                            <img alt="image" src="./src/assets/images/image-item-6.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

customElements.define('column-text-content-block', ColumnTextContentBlock);