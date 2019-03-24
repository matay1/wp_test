"use strict";

$(function ($) {
  var shrinkHeader = 400;
  var previousScroll = 0;
  var head = $('.site-header');
  var slideOutdone = false;
  var slideIndone = false;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    var scroll = getCurrentScroll();

    if (currentScroll > previousScroll && !slideIndone) {
      if (scroll >= shrinkHeader / 2) {
        head.addClass('sticky');
        head.hide();
        slideOutdone = false;
      }

      if (scroll >= shrinkHeader) {
        slideIndone = true;
        head.slideDown('800');
      }
    } else if (scroll < shrinkHeader && !slideOutdone) {
      slideOutdone = true;
      slideIndone = false;
      head.slideUp('800', function () {
        head.removeClass('sticky');
        setTimeout(function () {
          head.fadeIn('10');
        }, 10);
      });
    }

    previousScroll = currentScroll;
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});