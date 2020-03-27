import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import $ from 'jquery';
import '../sections/cart.js';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';



 import '../sections/slick.js';
import '../sections/faq-tabs.js';
import  '../sections/accordion.js';
import '../slider/jquery.event.move.js';
import '../slider/jquery.twentytwenty.js';

import AOS from 'aos';


//import slick from 'slick-carousel/slick/slick.min.js';


  AOS.init({
    disable: false,
  duration: 500,
  ease: 'ease-in-out',
});
lazySizes.cfg.loadHidden = false;

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
// import {cookiesEnabled} from '@shopify/theme-cart';

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
// if (cookiesEnabled()) {
//   document.documentElement.className = document.documentElement.className.replace(
//     'supports-no-cookies',
//     'supports-cookies',
//   );
// }

// $( document ).ready(function() {
//   if( typeof product_variants_removed != "undefined" ) {    // was there items to be removed?
//     var $addToCartForm = $('form[action="/cart/add"]');
//     if (window.MutationObserver && $addToCartForm.length) {
//       if (typeof observer === 'object' && typeof observer.disconnect === 'function') {
//         observer.disconnect();
//       }
//       var config = { childList: true, subtree: true };
//       var observer = new MutationObserver(function() {
//         product_variants_removed.forEach(function(item){
//           $('.single-option-selector option').filter(function() { return $(this).text() === item; }).remove();
//         });
//         observer.disconnect();
//       });
//       observer.observe($addToCartForm[0], config);
//       $('.single-option-selector').trigger('change');
//     }
//   }
// });



$('.mobile-hamburger').click(function(){
  $(this).toggleClass('active');
});

$(".speks-slider").slick({
  mobileFirst: true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: 'unslick'
    }
  ]
});

$(function() {

    var timer_id;

    $(window).resize(function() {

        clearTimeout(timer_id);

        timer_id = setTimeout(function() {



          $(".speks-slider").slick({
            mobileFirst: true,
            dots: true,
            arrows: false,
            responsive: [
              {
                breakpoint: 767,
                settings: 'unslick'
              }
            ]
          });
        }, 300);
    });
});

jQuery(window).load(function () {
jQuery('#speks-slider').eq(0).twentytwenty({
  default_offset_pct: 0.33,
  no_overlay: true, //Do not show the overlay with before and after
  move_slider_on_hover: true
 });
jQuery('#speks-slider').eq(1).twentytwenty();
});


// $(function () {
//
// jQuery("#speks-slider").twentytwenty({
//     no_overlay: true, //Do not show the overlay with before and after
//     move_slider_on_hover: true
//
//   });
// });

$(function () {
   $('.js-accordion').accordion({
     buttonsGeneratedContent: 'html' });
});


function announce(){
  $('.announcement-bar').addClass('annoucement-bar-active');
  $('.header-annoucement').addClass('header-annoucement-active');

  var headerHeight = $('.annoucement-bar-active').height();
  $('.header-annoucement').css("top", headerHeight);
  $('#MainContent').css("margin-top", headerHeight);
}

$( document ).ready(announce);
$(window).on('resize',announce);

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
