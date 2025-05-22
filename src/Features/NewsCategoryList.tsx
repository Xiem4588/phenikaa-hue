import './styles/_news_category_block.scss';

export default class NewsCategoryList extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="grid lg:grid-cols-5 xl:grid-cols-3 gap-10 p-5" data-container-width="bodytext">
                <div class="lg:col-span-3 xl:col-span-2 flex flex-col gap-10">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-2xl xl:text-4xl font-medium font-medium">Mới nhất</h2>
                        <div class="flex justify-between items-center gap-5">
                            <span class="border-b-gradient flex-3"></span>
                            <div class="flex-1">
                                <a href="/news-category" class="text-l xl:text-xl link-decoration">Xem Tất Cả</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex gap-5 xl:gap-15">
                        <div class="flex flex-col text-white">
                            <a class="max-w-[120px] md:max-w-[250px] " href="/news-detail">
                                <img alt="image" src="./src/assets/images/image-item-7.png">
                            </a>
                            <a class="f-montserrat p-2 md:mr-auto bg-gradient link-decoration" href="/news-category">Tin ngành</a>
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="max-w-sm flex flex-col gap-2 md:gap-5">
                                <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                <h2><a class="text-xl xl:text-3xl font-medium link-decoration" href="/news-detail">Tin 1</a></h2>
                                <p class="text-gray-500 line-clamp-2 md:line-clamp-3 md:mt-5">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                            </div>
                            <div class="flex justify-between items-center gap-5 my-3">
                                <span class="border-b border-gray-300 flex-1"></span>
                                <div class="text-white">
                                    <a class="bg-gradient after-arrow-r p-4 link-decoration" href="/news-category"></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-5 xl:gap-15">
                        <div class="flex flex-col text-white">
                            <a class="max-w-[120px] md:max-w-[250px] " href="/news-detail">
                                <img alt="image" src="./src/assets/images/image-item-7.png">
                            </a>
                            <a class="f-montserrat p-2 md:mr-auto bg-gradient link-decoration" href="/news-category">Tin ngành</a>
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div class="max-w-sm flex flex-col gap-2 md:gap-5">
                                <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                <h2><a class="text-xl xl:text-3xl font-medium link-decoration" href="/news-detail">Tin 1</a></h2>
                                <p class="text-gray-500 line-clamp-2 md:line-clamp-3 md:mt-5">Nhựa polyester không no là vật liệu polymer có khả năng chịu nhiệt cao, phù hợp với nhiều ứng dụng công nghiệp.</p>
                            </div>
                            <div class="flex justify-between items-center gap-5 my-3">
                                <span class="border-b border-gray-300 flex-1"></span>
                                <div class="text-white">
                                    <a class="bg-gradient after-arrow-r p-4 link-decoration" href="/news-category"></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Sidebar -->
                <div class="lg:col-span-2 xl:col-span-1 flex flex-col gap-10">
                    <div class="flex flex-col gap-5">
                        <h3 class="text-xl xl:text-2xl font-medium">Bài viết phổ biến nhất</h3>
                        <div class="flex justify-between items-center gap-5">
                            <span class="border-b-gradient flex-1"></span>
                            <a href="/news-category" class="text-l link-decoration">Xem Tất Cả</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex gap-5">
                            <div class="flex flex-col text-white">
                                <a class="max-w-[95px] " href="/news-detail">
                                    <img alt="image" src="./src/assets/images/image-item-7.png">
                                </a>
                            </div>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="max-w-sm flex flex-col gap-2">
                                    <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                    <h3><a class="text-xl font-medium link-decoration" href="/news-detail">Tin 1</a></h3>
                                </div>
                                <div class="flex justify-between items-center text-orange-600 gap-5 my-3">
                                    <span class="border-b border-gray-300 flex-1"></span>
                                    <a class="tex-gradient m-4 link-decoration-one" href="/news-category">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="flex flex-col text-white">
                                <a class="max-w-[95px] " href="/news-detail">
                                    <img alt="image" src="./src/assets/images/image-item-7.png">
                                </a>
                            </div>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="max-w-sm flex flex-col gap-2">
                                    <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                    <h3><a class="text-xl font-medium link-decoration" href="/news-detail">Tin 1</a></h3>
                                </div>
                                <div class="flex justify-between items-center text-orange-600 gap-5 my-3">
                                    <span class="border-b border-gray-300 flex-1"></span>
                                    <a class="tex-gradient m-4 link-decoration-one" href="/news-category">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-col gap-5">
                        <h3 class="text-xl xl:text-2xl font-medium">Các bài viết liên quan</h3>
                        <div class="flex justify-between items-center gap-5">
                            <span class="border-b-gradient flex-1"></span>
                            <a href="/news-category" class="text-l">Xem Tất Cả</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex gap-5">
                            <div class="flex flex-col text-white">
                                <a class="max-w-[95px] " href="/news-detail">
                                    <img alt="image" src="./src/assets/images/image-item-7.png">
                                </a>
                            </div>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="max-w-sm flex flex-col gap-2">
                                    <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                    <h3><a class="text-xl font-medium link-decoration" href="/news-detail">Tin 1</a></h3>
                                </div>
                                <div class="flex justify-between items-center text-orange-600 gap-5 my-3">
                                    <span class="border-b border-gray-300 flex-1"></span>
                                    <a class="tex-gradient m-4 link-decoration-one" href="/news-category">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="flex flex-col text-white">
                                <a class="max-w-[95px] " href="/news-detail">
                                    <img alt="image" src="./src/assets/images/image-item-7.png">
                                </a>
                            </div>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="max-w-sm flex flex-col gap-2">
                                    <p class="small flex gap-5 items-center">Your Name <span class="before-dot-g">Nov 18, 2025</span></p>
                                    <h3><a class="text-xl font-medium link-decoration" href="/news-detail">Tin 1</a></h3>
                                </div>
                                <div class="flex justify-between items-center text-orange-600 gap-5 my-3">
                                    <span class="border-b border-gray-300 flex-1"></span>
                                    <a class="tex-gradient m-4 link-decoration-one" href="/news-category">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('news-category-list', NewsCategoryList);