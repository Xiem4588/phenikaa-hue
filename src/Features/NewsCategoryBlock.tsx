import './styles/_news_category_block.scss';

export default class NewsCategoryBlock extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="grid grid-cols-3 gap-10 p-5" data-container-width="bodytext">
                <div class="col-span-2 flex flex-col gap-10">
                    <div class="flex flex-col gap-2">
                        <h2 class="font-bold">Mới nhất</h2>
                        <div class="flex justify-between items-center gap-5">
                            <span class="border-b-gradient flex-3"></span>
                            <div class="flex-1">
                                <a href="#" class="h4">Xem Tất Cả</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex gap-15">
                        <div class="flex flex-col text-white">
                            <a class="max-w-[250px] decoration-animation-none" href="/">
                                <img alt="image" src="./src/assets/images/image-item-7.png">
                            </a>
                            <a class="f-montserrat p-2 mr-auto bg-gradient decoration-animation-none" href="/">Tin ngành</a>
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="max-w-sm flex flex-col gap-5">
                                <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                <a class="h2 decoration-animation-none" href="/">Tin 1</a> 
                                <p class="text-gray-500 line-clamp-3 mt-5">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                            </div>
                            <div class="flex justify-between items-center gap-5 my-3">
                                <span class="border-b border-gray-300 flex-1"></span>
                                <div class="text-white">
                                    <a class="bg-gradient after-arrow-r p-4 decoration-animation-none" href="/"></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-20">
                        <div class="flex flex-col text-white">
                            <a class="max-w-[250px] decoration-animation-none" href="/">
                                <img alt="image" src="./src/assets/images/image-item-7.png">
                            </a>
                            <a class="f-montserrat p-2 mr-auto bg-gradient decoration-animation-none" href="/">Tin ngành</a>
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="max-w-sm flex flex-col gap-5">
                                <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                <a class="h2 decoration-animation-none" href="/">Tin 1</a> 
                                <p class="text-gray-500 line-clamp-3 mt-5">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                            </div>
                            <div class="flex justify-between items-center gap-5 my-3">
                                <span class="border-b border-gray-300 flex-1"></span>
                                <div class="text-white">
                                    <a class="bg-gradient after-arrow-r p-4 decoration-animation-none" href="/"></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Sidebar -->
                <div class="flex flex-col gap-10">
                    <div class="flex flex-col gap-5">
                        <h3 class="font-bold">Bài viết phổ biến nhất</h3>
                        <div class="flex justify-between items-center gap-5">
                            <span class="border-b-gradient flex-1"></span>
                            <a href="#" class="h4">Xem Tất Cả</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex gap-5">
                            <div class="flex flex-col text-white">
                                <a class="max-w-[95px] decoration-animation-none" href="/">
                                    <img alt="image" src="./src/assets/images/image-item-7.png">
                                </a>
                            </div>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="max-w-sm flex flex-col gap-2">
                                    <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                    <a class="h3 decoration-animation-none" href="/">Tin 1</a>
                                </div>
                                <div class="flex justify-between items-center gap-5 my-3">
                                    <span class="border-b border-gray-300 flex-1"></span>
                                    <a class="tex-gradient p-4 decoration-animation-none" href="/">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="flex flex-col text-white">
                                <a class="max-w-[95px] decoration-animation-none" href="/">
                                    <img alt="image" src="./src/assets/images/image-item-7.png">
                                </a>
                            </div>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="max-w-sm flex flex-col gap-2">
                                    <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                    <a class="h3 decoration-animation-none" href="/">Tin 1</a>
                                </div>
                                <div class="flex justify-between items-center gap-5 my-3">
                                    <span class="border-b border-gray-300 flex-1"></span>
                                    <a class="tex-gradient p-4 decoration-animation-none" href="/">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-col gap-5">
                        <h3 class="font-bold">Các bài viết liên quan</h3>
                        <div class="flex justify-between items-center gap-5">
                            <span class="border-b-gradient flex-1"></span>
                            <a href="#" class="h4">Xem Tất Cả</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex gap-5">
                            <div class="flex flex-col text-white">
                                <a class="max-w-[95px] decoration-animation-none" href="/">
                                    <img alt="image" src="./src/assets/images/image-item-7.png">
                                </a>
                            </div>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="max-w-sm flex flex-col gap-2">
                                    <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                    <a class="h3 decoration-animation-none" href="/">Tin 1</a>
                                </div>
                                <div class="flex justify-between items-center gap-5 my-3">
                                    <span class="border-b border-gray-300 flex-1"></span>
                                    <a class="tex-gradient p-4 decoration-animation-none" href="/">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="flex flex-col text-white">
                                <a class="max-w-[95px] decoration-animation-none" href="/">
                                    <img alt="image" src="./src/assets/images/image-item-7.png">
                                </a>
                            </div>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="max-w-sm flex flex-col gap-2">
                                    <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                    <a class="h3 decoration-animation-none" href="/">Tin 1</a>
                                </div>
                                <div class="flex justify-between items-center gap-5 my-3">
                                    <span class="border-b border-gray-300 flex-1"></span>
                                    <a class="tex-gradient p-4 decoration-animation-none" href="/">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('news-category-block', NewsCategoryBlock);