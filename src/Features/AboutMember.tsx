export default class AboutMember extends HTMLElement {
    innerHTML = `
        <div class="p-4 my-10 md:my-20 count-numbers-block">
            <div class="flex flex-col" data-container-width="site">
                <h2 class="text-3xl xl:text-5xl font-medium">
                    Phenikaa Cristobalite
                    <br>
                    – Thành viên quan trọng của Tập đoàn
                </h2>
                <p class="text-gray-800 mt-3">We will help to thing into a big one for your company. We will help to develop every smallest thing into a big your company.</p>
                
                <div class="grid md:grid-cols-2 gap-15 md:gap-0 mt-10">
                    <div class="bg-white shadow-lg p-6 lg:p-20 text-center">
                        <h3 class="text-lg font-semibold">Quy mô nhà máy</h3>
                        <p class="text-orange-500 text-5xl font-bold mt-10 count-numbers-value" data-value="5000">0+</p>
                        <p class="text-gray-600 mt-5">
                            We will help to thing into a big one for your company, We will help thing into a big We will help to develop every smallest thing into a big  your company, We will help to develop every smallest thing into a big 
                        </p>
                    </div>
                    <div class="bg-white shadow-lg p-6 lg:p-20 text-center">
                        <h3 class="text-lg font-semibold">Số nhân công</h3>
                        <p class="text-orange-500 text-5xl font-bold mt-10 count-numbers-value" data-value="15000">0+</p>
                        <p class="text-gray-600 mt-5">We will help to develop every smallest thing into a big company.</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

customElements.define('about-member', AboutMember);