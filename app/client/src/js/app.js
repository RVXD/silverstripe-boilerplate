import $ from 'jquery';
import { initForms } from './modules/forms';
import { initNavigation } from './modules/navigation';
import { initFontAwesome } from './modules/fontAwesome';
import { initScrollTo, scrollTo } from './modules/scrollTo';
// import { initGallerySwiper } from './modules/swiper';
// import { initGallery } from './modules/gallery';
// import { initVideo } from './modules/video';

{
  'use strict';

  // If Foundation modules are installed uncomment this line
  //$(document).foundation();

  $(document).ready(() => {
    initForms();
    initNavigation();
    initFontAwesome();
    initScrollTo();
    // initVideo();
    // initGallery();
    // initGallerySwiper();
  });

}
