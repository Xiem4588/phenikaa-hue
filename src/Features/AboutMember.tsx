export default class AboutMember extends HTMLElement {
    innerHTML = `

        <div class="p-4 mt-10 md:mt-15">
            <div class="flex flex-col gap-10 text-center" data-container-width="site">
                <h2 class="text-3xl xl:text-5xl font-medium" style="text-align:center;">
                    Impressive numbers of Phenikaa Hue
                </h2>
                <div class="grid md:grid-cols-2 gap-5 md:gap-0 mt-10">
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter1">0</span><span>+</span>
                        </p>
                        <p class="text-gray-600 mt-5">
                            Over 9 years of sustainable growth and development
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter2">0</span><span>+</span>
                        </p>
                        <p class="text-gray-600 mt-5">
                            A professional and efficient workforce
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter3">0</span><span>+</span>
                        </p>
                        <p class="text-gray-600 mt-5">
                            Exporting to over 9 countries, affirming our global presence
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter4">0 </span><span>m²</span>
                        </p>
                        <p class="text-gray-600 mt-5">
                            Over 37,500 m² of production space at Phong Dien Industrial Park
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter5">0</span>%
                        </p>
                        <p class="text-gray-600 mt-5">
                            Highly automated production system, ensuring superior quality and performance
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter6">0</span> tons/year
                        </p>
                        <p class="text-gray-600 mt-5">
                            Annual capacity to meet diverse market demands
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-4 mt-10 md:mt-15">
            <div class="flex flex-col gap-10 text-center" data-container-width="site">
                <h2 class="text-3xl xl:text-5xl font-medium" style="text-align:center;">
                    Những con số ấn tượng của Phenikaa Huế
                </h2>
                <div class="grid md:grid-cols-2 gap-5 md:gap-0 mt-10">
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter1">9</span>+
                        </p>
                        <p class="text-gray-600 mt-5">
                            Hơn 9 năm hình thành và phát triển bền vững
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter2">190</span>+
                        </p>
                        <p class="text-gray-600 mt-5">
                            Đội ngũ nhân sự chuyên nghiệp, vận hành hiệu quả
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter3">9</span>+
                        </p>
                        <p class="text-gray-600 mt-5">
                            Xuất khẩu đến 9+ quốc gia, khẳng định vị thế trên thị trường quốc tế
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter4">37,500</span> m²
                        </p>
                        <p class="text-gray-600 mt-5">
                            Diện tích sản xuất hơn 37.500 m² tại Khu công nghiệp Phong Điền
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter5">99</span>%
                        </p>
                        <p class="text-gray-600 mt-5">
                            Hệ thống sản xuất tự động hóa cao, đảm bảo chất lượng và hiệu suất vượt trội
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-6 text-center">
                        <p class="text-orange-500 text-5xl font-bold mt-10">
                            <span id="counter6">86,000</span> tấn/năm
                        </p>
                        <p class="text-gray-600 mt-5">
                            Công suất sản xuất, đáp ứng nhu cầu đa dạng của thị trường
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="p-4 my-10 md:my-20 count-numbers-block">
            <div class="flex flex-col" data-container-width="bodytext">
                <h2 class="text-3xl xl:text-5xl font-medium">Impressive numbers of Phenikaa Hue</h2>
                <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 mt-10">
                    <div class="flex flex-col gap-4">
                        <div class="ml-4 text-5xl font-semibold text-orange-500">
                            <span class="stat-value count-numbers-value" data-value="9">9</span><span>+</span>
                        </div>
                        <div class="flex h-full gap-4">
                            <div class="w-0.5 bg-[#1F3A71]"></div>
                            <div class="text-pretty flex-1 py-2.5">Over 9 years of sustainable growth and development.</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="ml-4 text-5xl font-semibold text-orange-500">
                            <span class="stat-value count-numbers-value" data-value="190">190</span><span>+</span>
                        </div>
                        <div class="flex h-full gap-4">
                            <div class="w-0.5 bg-[#1F3A71]"></div>
                            <div class="text-pretty flex-1 py-2.5">A professional and efficient workforce.</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="ml-4 text-5xl font-semibold text-orange-500">
                            <span class="stat-value count-numbers-value" data-value="9">9</span><span>+</span>
                        </div>
                        <div class="flex h-full gap-4">
                            <div class="w-0.5 bg-[#1F3A71]"></div>
                            <div class="text-pretty flex-1 py-2.5">Exporting to over 9 countries, affirming our global presence.</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="ml-4 text-5xl font-semibold text-orange-500">
                            <span class="stat-value count-numbers-value" data-value="37500">37,500</span><span>m²</span>
                        </div>
                        <div class="flex h-full gap-4">
                            <div class="w-0.5 bg-[#1F3A71]"></div>
                            <div class="text-pretty flex-1 py-2.5">Over 37,500 m² of production space at Phong Dien Industrial Park.</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="ml-4 text-5xl font-semibold text-orange-500">
                            <span class="stat-value count-numbers-value" data-value="99">99</span><span>%</span>
                        </div>
                        <div class="flex h-full gap-4">
                            <div class="w-0.5 bg-[#1F3A71]"></div>
                            <div class="text-pretty flex-1 py-2.5">Highly automated production system, ensuring superior quality and performance.</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="ml-4 text-5xl font-semibold text-orange-500">
                            <span class="stat-value count-numbers-value" data-value="86000">86,000</span><span>%</span>
                        </div>
                        <div class="flex h-full gap-4">
                            <div class="w-0.5 bg-[#1F3A71]"></div>
                            <div class="text-pretty flex-1 py-2.5">Annual capacity to meet diverse market demands.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

customElements.define('about-member', AboutMember);