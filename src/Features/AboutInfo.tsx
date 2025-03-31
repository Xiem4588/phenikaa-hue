export default class AboutInfo extends HTMLElement {
    innerHTML = `
        <div class="p-4 pt-30 lg:pt-40 pb-20 bg-[#0D1F4B]">
            <div data-container-width="site">
                <div class="max-w-4xl flex flex-col gap-3">
                    <h2 class="text-3xl xl:text-5xl font-medium text-white before-line-top flex flex-col gap-5">Giới thiệu tập đoàn Phenikaa</h2>
                    <p class="text-gray-200 mt-2">
                        We will help to thing into a big one for your company, We will help thing into a big We will help to develop every smallest thing into a big  your company, We will help to develop every smallest thing into a big 
                    </p>
                </div>
                <div class="columns-1 md:columns-2 gap-10 mt-10 lg:mt-15 md:gap-20">
                    <div class="flex flex-col gap-4 mb-10 lg:mb-20 md:gap-10">
                        <img alt="image" src="./src/assets/images/image-item-9.png">
                        <div class="before-line-top t-1 flex gap-5 text-white">
                            <div class="flex flex-col gap-3">
                                <h3 class="text-xl xl:text-2xl text-white">Tầm nhìn</h3>
                                <p class="text-gray-200">Serves as the prime behind an organization’s social media
                                    platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 mb-10 lg:mb-20 md:gap-10">
                        <img alt="image" src="./src/assets/images/image-item-10.png">
                        <div class="before-line-top t-1 flex gap-5 text-white">
                            <div class="flex flex-col gap-3">
                                <h3 class="text-xl xl:text-2xl text-white">Sứ mệnh</h3>
                                <p class="text-gray-200">Serves as the prime behind an organization’s social media
                                    platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 mb-10 lg:mb-20 md:gap-10">
                        <img alt="image" src="./src/assets/images/image-item-10.png">
                        <div class="before-line-top t-1 flex gap-5 text-white">
                            <div class="flex flex-col gap-3">
                                <h3 class="text-xl xl:text-2xl text-white">Đối tác Quốc tế</h3>
                                <p class="text-gray-200">Serves as the prime behind an organization’s social media
                                    platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 mb-10 lg:mb-20 md:gap-10">
                        <img alt="image" src="./src/assets/images/image-item-9.png">
                        <div class="before-line-top t-1 flex gap-5 text-white">
                            <div class="flex flex-col gap-3">
                                <h3 class="text-xl xl:text-2xl text-white">Lĩnh vực hoạt động</h3>
                                <p class="text-gray-200">Serves as the prime behind an organization’s social media
                                    platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

customElements.define('about-info', AboutInfo);