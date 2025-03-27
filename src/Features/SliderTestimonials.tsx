
import './styles/_slider_testimonials_block.scss';
import './styles/_slider-swiper-block.scss';

export default class SliderTestimonials extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="slider-testimonials-block">
                <div class="slider-testimonials-grid" data-container-width="bodytext">
                    <div class="hero-block__text-container py-8">
                        <div class="hero-block__heading">
                            <h2 class="hero-block__heading-title">
                                Khách hàng nói gì về chúng tôi
                            </h2>
                        </div>
                    </div>
                    <div class="swiper" data-slider-testimonials>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide p-6">
                                <div class="flex flex-col gap-8 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                                    <p class="small text-gray-500">
                                        My busy schedule leaves little, if any, time for blogging and social media. 
                                        The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.
                                    </p>
                                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                                        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg" alt="" />
                                        <div class="space-y-2 text-center sm:text-left">
                                            <div class="space-y-0.5">
                                                <p class="text-lg font-semibold text-black">Albert McTominay</p>
                                                <p class="small text-sky-800">Material Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide p-6">
                                <div class="flex flex-col gap-8 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                                    <p class="small text-gray-500">
                                        My busy schedule leaves little, if any, time for blogging and social media. 
                                        The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.
                                    </p>
                                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                                        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg" alt="" />
                                        <div class="space-y-2 text-center sm:text-left">
                                            <div class="space-y-0.5">
                                                <p class="text-lg font-semibold text-black">Albert McTominay</p>
                                                <p class="small text-sky-800">Material Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide p-6">
                                <div class="flex flex-col gap-8 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                                    <p class="small text-gray-500">
                                        My busy schedule leaves little, if any, time for blogging and social media. 
                                        The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.
                                    </p>
                                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                                        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg" alt="" />
                                        <div class="space-y-2 text-center sm:text-left">
                                            <div class="space-y-0.5">
                                                <p class="text-lg font-semibold text-black">Albert McTominay</p>
                                                <p class="small text-sky-800">Material Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-next">
                            <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.362 7.84495L28.0586 18.3333H7.12451V21.6666H28.0586L18.362 32.1549L20.5407 34.5116L33.957 19.9999L20.5407 5.48828L18.362 7.84495Z"/>
                            </svg>                                                      
                        </div>
                        <div class="swiper-button-prev">
                            <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5964 7.84491L17.4192 5.48657L3.98291 19.9999L17.4192 34.5116L19.5964 32.1532L9.88747 21.6666H30.8169V18.3332H9.88593L19.5964 7.84491Z"/>
                            </svg>                            
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('slider-testimonials', SliderTestimonials);