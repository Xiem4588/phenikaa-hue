
import './styles/_column_text_content_block.scss';

export default class ColumnTextContentBlock extends HTMLElement {
    innerHTML = `
        <div class="column-text-content-block" data-background="primary-10">
            <div data-container-width="bodytext">
                <div class="flex flex-col gap-8 py-8 text-center">
                    <h2 class="text-3xl xl:text-5xl font-medium">
                        CRISTOBALITE DẠNG BỘT
                    </h2>
                    <p class="text-gray-500">
                        Text giới thiệu chung Te aliquam noluisse his. Et vel epicuri detracto indoctum, et fierent pericula vim, veniam epicuri an eum. Ad mutat quaestio erroribus eam, ei mea modus volumus abhorreant. 
                    </p>
                </div>
                <div class="column-text-content-block__wrapper" data-layout-smart="2-per-row">
                    <div class="flex flex-col gap-10 rounded-lg bg-white p-12 shadow-lg">
                        <div class="flex flex-col gap-3">
                            <h2 class="text-xl xl:text-2xl font-medium column-text-content-block__heading-title">Thông tin kỹ thuật</h2>
                            <p class="text-gray-500">complete payment options, let's shop now and use your favorite payment method</p>
                        </div>
                        <div class="mt-auto">
                            <img alt="image" src="./src/assets/images/image-item-6.png">
                        </div>
                    </div>
                    <div class="flex flex-col gap-8 rounded-lg bg-white p-12 shadow-lg">
                        <div class="flex flex-col gap-3">
                            <h2 class="text-xl xl:text-2xl font-medium column-text-content-block__heading-title">Quy cách đóng gói</h2>
                            <p class="text-gray-500">let's join membership now and get discounts up to 72%</p>
                        </div>
                        <div class="mt-auto">
                            <img alt="image" src="./src/assets/images/image-item-6.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

customElements.define('column-text-content-block', ColumnTextContentBlock);