
import './styles/_accordion_content_block.scss';

export default class AccordionContentBlock extends HTMLElement {
    innerHTML = `
        <div class="accordion-content-block">
            <div class="accordion-content-block__wrapper" data-container-width="site-small">
                <div class="accordion-content-block__text-container">
                    <div class="accordion-content-block__heading">
                        <h2 class="accordion-content-block__heading-title">Ưu thế cạnh tranh</h2>
                    </div>
                    <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>

                <div class="accordion-items-wrapper flex flex-col gap-4">
                    <div class="accordion-item rounded-lg bg-white p-4 shadow-md outline outline-black/2" aria-hidden="true">
                        <div class="flex items-center gap-x-4 py-2" data-accordion-button>
                            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="iconspace_Marketing_25px">
                                    <path id="path" fill-rule="evenodd" clip-rule="evenodd" d="M47.9998 17.0979C51.4481 17.9758 53.9998 20.6996 53.9998 24C53.9998 27.3003 51.4481 30.0241 47.9998 30.902V37.2004C47.9998 39.1886 46.388 40.8004 44.3998 40.8004C44.0285 40.8004 43.6593 40.7429 43.3056 40.6301L26 35.0835L21.8096 34.626L23.8875 46.1658C24.2399 48.1226 22.9392 49.9945 20.9825 50.3468C20.7719 50.3847 20.5584 50.4038 20.3445 50.4038H19.0016C17.5188 50.4038 16.1876 49.4946 15.6482 48.1134L9.69602 32.8718C6.7845 31.5357 4.7998 28.5972 4.7998 25.2358V22.77C4.7998 18.4795 8.03323 14.8785 12.299 14.4184L25.8803 12.9536L43.3015 7.37255C45.1949 6.76597 47.2216 7.80918 47.8282 9.70261C47.9419 10.0576 47.9998 10.4281 47.9998 10.8009V17.0979ZM45.5996 37.2004V10.8009C45.5996 10.6766 45.5803 10.5531 45.5424 10.4348C45.3402 9.80366 44.6647 9.45593 44.0335 9.65812L40.7951 10.6956C40.7981 10.73 40.7996 10.7648 40.7996 10.7999V20.3999C40.7996 21.0627 40.2624 21.5999 39.5996 21.5999C38.9369 21.5999 38.3996 21.0627 38.3996 20.3999V11.463L26.4962 15.2763L26.2588 15.3266L21.5996 15.8292V32.2044L26.4948 32.7474L44.0349 38.3436C44.1528 38.3812 44.2758 38.4004 44.3996 38.4004C45.0624 38.4004 45.5996 37.8631 45.5996 37.2004ZM48 28.3991V19.6006C50.1346 20.3504 51.6 22.0655 51.6 23.9998C51.6 25.9341 50.1346 27.6493 48 28.3991ZM19.1997 16.0881L12.5563 16.8047C9.50929 17.1333 7.19971 19.7054 7.19971 22.7701V25.2359C7.19971 28.2976 9.50485 30.8681 12.5484 31.2005L19.1997 31.9383V16.0881ZM17.884 47.2403L12.5635 33.6162L19.3224 34.3543L21.5257 46.5911C21.6432 47.2433 21.2096 47.8673 20.5574 47.9847C20.4872 47.9974 20.416 48.0037 20.3447 48.0037H19.0018C18.5075 48.0037 18.0638 47.7007 17.884 47.2403Z" fill="#2E2E2E"/>
                                </g>
                            </svg>
                            <div class="h4">Công nghệ</div>
                        </div>
                        <div class="item-text small text-gray-500 ps-12">Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks.</div>
                    </div>
                    <div class="accordion-item rounded-lg bg-white p-4 shadow-md outline outline-black/2" aria-hidden="false">
                        <div class="flex items-center gap-x-4 py-2" data-accordion-button>
                            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="iconspace_Monitor_25px">
                                    <path id="Path" d="M53.9998 33.6001H5.9998C5.33706 33.6001 4.7998 34.1374 4.7998 34.8001C4.7998 35.4628 5.33706 36.0001 5.9998 36.0001H53.9998C54.6625 36.0001 55.1998 35.4628 55.1998 34.8001C55.1998 34.1374 54.6625 33.6001 53.9998 33.6001Z" fill="#2E2E2E"/>
                                    <path id="Path_2" fill-rule="evenodd" clip-rule="evenodd" d="M36.5273 43.2001L38.4473 52.8H41.9998C42.6625 52.8 43.1998 53.3373 43.1998 54C43.1998 54.6628 42.6625 55.2001 41.9998 55.2001H17.9998C17.3371 55.2001 16.7998 54.6628 16.7998 54C16.7998 53.3373 17.3371 52.8 17.9998 52.8H22.0798L23.9998 43.2001H13.1998C8.56061 43.2001 4.7998 39.4392 4.7998 34.8V8.40005C4.7998 6.41182 6.41158 4.80005 8.3998 4.80005H51.5998C53.588 4.80005 55.1998 6.41182 55.1998 8.40005V34.8C55.1998 39.4392 51.439 43.2001 46.7998 43.2001H36.5273ZM24.5273 52.7999H35.9998L34.0798 43.2H26.4473L24.5273 52.7999ZM7.19971 8.39995C7.19971 7.73721 7.73697 7.19995 8.39971 7.19995H51.5997C52.2625 7.19995 52.7997 7.73721 52.7997 8.39995V34.8C52.7997 38.1137 50.1134 40.7999 46.7997 40.7999H13.1997C9.886 40.7999 7.19971 38.1137 7.19971 34.8V8.39995Z" fill="#2E2E2E"/>
                                </g>
                            </svg>

                            <div class="h4">Dây chuyền</div>
                        </div>
                        <div class="item-text small text-gray-500 ps-12">Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks.</div>
                    </div>
                    <div class="accordion-item rounded-lg bg-white p-4 shadow-md outline outline-black/2" aria-hidden="false">
                        <div class="flex items-center gap-x-4 py-2" data-accordion-button>
                            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="iconspace_Note 2_25px">
                                    <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M50.3998 45.6V14.4H51.5998C53.588 14.4 55.1998 12.7883 55.1998 10.8V8.40005C55.1998 6.41182 53.588 4.80005 51.5998 4.80005H8.3998C6.41158 4.80005 4.7998 6.41182 4.7998 8.40005V10.8C4.7998 12.7883 6.41158 14.4 8.3998 14.4H9.5998V45.6H8.3998C6.41158 45.6 4.7998 47.2118 4.7998 49.2001V51.6C4.7998 53.5883 6.41158 55.2001 8.3998 55.2001H51.5998C53.588 55.2001 55.1998 53.5883 55.1998 51.6V49.2001C55.1998 47.2118 53.588 45.6 51.5998 45.6H50.3998ZM51.5997 12H8.39971C7.73697 12 7.19971 11.4627 7.19971 10.8V8.39995C7.19971 7.73721 7.73697 7.19995 8.39971 7.19995H51.5997C52.2625 7.19995 52.7997 7.73721 52.7997 8.39995V10.8C52.7997 11.4627 52.2625 12 51.5997 12ZM51.5997 48H8.39971C7.73697 48 7.19971 48.5373 7.19971 49.2V51.6C7.19971 52.2627 7.73697 52.8 8.39971 52.8H51.5997C52.2625 52.8 52.7997 52.2627 52.7997 51.6V49.2C52.7997 48.5373 52.2625 48 51.5997 48ZM12 45.6001V14.4001H48V45.6001H12Z" fill="#2E2E2E"/>
                                    <path id="Path_2" d="M20.4002 31.2H39.6002C40.2629 31.2 40.8002 30.6628 40.8002 30C40.8002 29.3373 40.2629 28.8 39.6002 28.8H20.4002C19.7375 28.8 19.2002 29.3373 19.2002 30C19.2002 30.6628 19.7375 31.2 20.4002 31.2Z" fill="#2E2E2E"/>
                                    <path id="Path_3" d="M20.4002 38.4H34.8002C35.4629 38.4 36.0002 37.8627 36.0002 37.2C36.0002 36.5373 35.4629 36 34.8002 36H20.4002C19.7375 36 19.2002 36.5373 19.2002 37.2C19.2002 37.8627 19.7375 38.4 20.4002 38.4Z" fill="#2E2E2E"/>
                                    <path id="Path_4" d="M20.4002 24.0001H27.6002C28.2629 24.0001 28.8002 23.4628 28.8002 22.8001C28.8002 22.1374 28.2629 21.6001 27.6002 21.6001H20.4002C19.7375 21.6001 19.2002 22.1374 19.2002 22.8001C19.2002 23.4628 19.7375 24.0001 20.4002 24.0001Z" fill="#2E2E2E"/>
                                </g>
                            </svg>
                            <div class="h4">Độ trắng cao</div>
                        </div>
                        <div class="item-text small text-gray-500 ps-12">Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks.</div>
                    </div>
                    <div class="accordion-item rounded-lg bg-white p-4 shadow-md outline outline-black/2" aria-hidden="false">
                        <div class="flex items-center gap-x-4 py-2" data-accordion-button>
                            <svg width="30" height="30" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1875 21.625H20.5V3.0625C20.5 2.91332 20.4407 2.77024 20.3352 2.66475C20.2298 2.55926 20.0867 2.5 19.9375 2.5C19.7883 2.5 19.6452 2.55926 19.5398 2.66475C19.4343 2.77024 19.375 2.91332 19.375 3.0625V21.625H16V7.5625C16 7.41332 15.9407 7.27024 15.8352 7.16475C15.7298 7.05926 15.5867 7 15.4375 7C15.2883 7 15.1452 7.05926 15.0398 7.16475C14.9343 7.27024 14.875 7.41332 14.875 7.5625V21.625H11.5V12.0625C11.5 11.9133 11.4407 11.7702 11.3352 11.6648C11.2298 11.5593 11.0867 11.5 10.9375 11.5C10.7883 11.5 10.6452 11.5593 10.5398 11.6648C10.4343 11.7702 10.375 11.9133 10.375 12.0625V21.625H7V16.5625C7 16.4133 6.94074 16.2702 6.83525 16.1648C6.72976 16.0593 6.58668 16 6.4375 16C6.28832 16 6.14524 16.0593 6.03975 16.1648C5.93426 16.2702 5.875 16.4133 5.875 16.5625V21.625H1.375V0.8125C1.375 0.663316 1.31574 0.520242 1.21025 0.414753C1.10476 0.309263 0.961684 0.25 0.8125 0.25C0.663316 0.25 0.520242 0.309263 0.414753 0.414753C0.309263 0.520242 0.25 0.663316 0.25 0.8125V22.1875C0.25 22.3367 0.309263 22.4798 0.414753 22.5852C0.520242 22.6907 0.663316 22.75 0.8125 22.75H22.1875C22.3367 22.75 22.4798 22.6907 22.5852 22.5852C22.6907 22.4798 22.75 22.3367 22.75 22.1875C22.75 22.0383 22.6907 21.8952 22.5852 21.7898C22.4798 21.6843 22.3367 21.625 22.1875 21.625Z" fill="#333333"/>
                            </svg>
                            <div class="h4">Công nghệ quản lý chất lượng chính xác</div>
                        </div>
                        <div class="item-text small text-gray-500 ps-12">Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks.</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

customElements.define('accordion-content-block', AccordionContentBlock);