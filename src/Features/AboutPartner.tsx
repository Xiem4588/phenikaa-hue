import './SliderTestimonials.tsx';

export default class AboutPartner extends HTMLElement {
    innerHTML = `
        <div class="p-4 mt-10 md:mt-15">
            <div class="flex flex-col gap-10 text-center" data-container-width="site">
                <h2 class="text-center text-2xl xl:text-4xl font-medium mb-6">Đối tác chiến lược</h2>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div class="bg-white shadow p-6 m-1 flex justify-center items-center"><img alt="image" src="./src/assets/images/image-item-11.png"></div>
                    <div class="bg-white shadow p-6 m-1 flex justify-center items-center"><img alt="image" src="./src/assets/images/image-item-11.png"></div>
                    <div class="bg-white shadow p-6 m-1 flex justify-center items-center"><img alt="image" src="./src/assets/images/image-item-11.png"></div>
                    <div class="bg-white shadow p-6 m-1 flex justify-center items-center"><img alt="image" src="./src/assets/images/image-item-11.png"></div>
                    <div class="bg-white shadow p-6 m-1 flex justify-center items-center"><img alt="image" src="./src/assets/images/image-item-11.png"></div>
                    <div class="bg-white shadow p-6 m-1 flex justify-center items-center"><img alt="image" src="./src/assets/images/image-item-11.png"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div class="bg-white shadow text-center">
                        <slider-testimonials></slider-testimonials>
                    </div>
                    <div class="bg-white shadow px-6 py-20 text-center">Dự án tiêu biểu đã thực hiện</div>
                </div>

                <div class="bg-white shadow px-6 py-20 my-10 lg:my-20 text-center">
                    <h2 class="text-2xl xl:text-4xl font-medium mb-5">Kết nối với Phenikaa Huế</h2>
                    <div class="flex flex-col md:flex-row justify-center text-white  gap-4">
                        <a href="#" class="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600 transition decoration-animation-none">Xem thêm về Phenikaa Group</a>
                        <a href="#" class="bg-gray-900 px-6 py-2 rounded hover:bg-gray-600 transition decoration-animation-none">Liên hệ ngay</a>
                    </div>
                </div>
            </div>
        </div>
    `
}

customElements.define('about-partner', AboutPartner);