import handleLanguage from "./language.ts"
import handleHeaderMenu from "./headerMenu.ts"
import handleHeroBlock from "./heroBlock.ts"
import handleQuickSearch from "./quickSearch.ts"
import handleActiveItemMenu from "./activeItemMenu.ts"
import {sliderCubeControlBlock, sliderImageLargeProductDetail, sliderImageSmallProductDetail, sliderArticleBlock, sliderProductBlock, sliderCustomersBlock, sliderTestimonialsBlock} from "./sliderSwiperControl.ts"
import handleAccordionButton from "./accordion.ts"

handleLanguage();
handleHeaderMenu();
handleHeroBlock();
handleQuickSearch();
handleActiveItemMenu();
handleAccordionButton();
sliderCubeControlBlock.init();
sliderImageLargeProductDetail.init();
sliderImageSmallProductDetail.init();
sliderArticleBlock.init();
sliderProductBlock.init();
sliderCustomersBlock.init();
sliderTestimonialsBlock.init();
