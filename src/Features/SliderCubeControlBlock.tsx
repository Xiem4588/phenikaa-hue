import './styles/_slider-swiper-block.scss';
import './HeroStartBlock.tsx';

export default class SliderCubeControlBlock extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="slider-cube-control-block">
                <div class="swiper" data-slider-cube-control>
                    <div class="swiper-wrapper">
                        <hero-start-block class="swiper-slide" set-hero-start-background-image="true"></hero-start-block>
                        <hero-start-block class="swiper-slide" set-hero-start-background-image="true"></hero-start-block>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        `
    }
}

customElements.define('slider-cube-control-block', SliderCubeControlBlock);