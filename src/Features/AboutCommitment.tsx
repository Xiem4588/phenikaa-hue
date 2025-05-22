export default class AboutCommitment extends HTMLElement {
    innerHTML = `
        <div class="p-4 my-10 md:my-20">
            <div class="flex flex-col md:flex-row lg:items-center" data-container-width="bodytext">
                <div class="md:w-1/2">
                    <img alt="image" src="./src/assets/images/image-item-12.png">
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0 md:pl-10">
                    <h2 class="text-2xl xl:text-4xl font-medium before-line-top flex flex-col gap-5 text-gray-800">Cam kết phát triển bền vững</h2>
                    <p class="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                    <div class="mt-6 lg:mt-15 space-y-5 lg:space-y-10">
                        <div class="flex items-start gap-5">
                            <span
                                class="w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center bg-[#1F3A71] text-white font-bold rounded-full">01.</span>
                            <div class="flex-1 flex flex-col gap-3">
                                <h3 class="font-semibold text-gray-800">An toàn lao động</h3>
                                <p class="text-gray-600">Browse millions of properties in your city, save your favorites
                                    and set up search alerts</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-5">
                            <span
                                class="w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center bg-[#1F3A71] text-white font-bold rounded-full">02.</span>
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-800">Bảo vệ môi trường</h3>
                                <p class="text-gray-600">We are the one who can do everything very well and no one can
                                    be as good as us.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-5">
                            <span
                                class="w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center bg-[#1F3A71] text-white font-bold rounded-full">03.</span>
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-800">Trách nhiệm xã hội</h3>
                                <p class="text-gray-600">Find your dream house? You just need to a few action and you
                                    can start move to your house.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

customElements.define('about-commitment', AboutCommitment);