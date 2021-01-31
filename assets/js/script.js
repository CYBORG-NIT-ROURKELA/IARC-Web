/* Please ❤ this if you like it! */


(function($) {
  "use strict";

  $(function() {
    var header = $(".start-style");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
      }
    });
  });

  //Animation

  $(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item');
      _d.addClass('show');
      setTimeout(function() {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });

  //Switch light/dark

  $("#switch").on('click', function() {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $("#switch").removeClass("switched");
    } else {
      $("body").addClass("dark");
      $("#switch").addClass("switched");
    }
  });

})(jQuery);



// home-section

// subsystems-section




// team page
// external js: isotope.pkgd.js
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
