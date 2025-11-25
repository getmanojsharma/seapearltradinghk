/*------------------------------------------------------------------------------------------------------
* Project    :                                        
* Author     :  Piyush Tapaniya | +91 83060 05795
* Version    :  1.0
*------------------------------------------------------------------------------------------------------- 
NOTE: This file contains all scripts for the actual Template.
------------------------------------------------------------------------------------------------------*/
(function($) {
    "use strict";
    // Progresswrap
    function Progresswrap() {
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
    }
    Progresswrap();


    $("#main-menu").slicknav({
        allowParentLinks: true,
        prependTo: '#mobile-menu-wrap',
        label: '',
    });
    $(".mobile-menu-trigger").on("click", function(e) {
        $(".mobile-menu-container").addClass("menu-open");
        e.stopPropagation();
    });
    $(".mobile-menu-close").on("click", function(e) {
        $(".mobile-menu-container").removeClass("menu-open");
        e.stopPropagation();
    });

    var owlslider = jQuery(".banner-slider");
    if (owlslider.length > 0) {
        owlslider.each(function() {
            var $this = $(this),
                $items = $this.data("items") ? $this.data("items") : 1,
                $loop = $this.attr("data-loop") ? $this.data("loop") : true,
                $navdots = $this.data("nav-dots") ? $this.data("nav-dots") : false,
                $navarrow = $this.data("nav-arrow") ? $this.data("nav-arrow") : false,
                $autoplay = $this.attr("data-autoplay") ? $this.data("autoplay") : true,
                $autospeed = $this.attr("data-autospeed") ? $this.data("autospeed") : 5000,
                $smartspeed = $this.attr("data-smartspeed") ? $this.data("smartspeed") : 1000,
                $autohgt = $this.data("autoheight") ? $this.data("autoheight") : false,
                $center = $this.data("center") ? $this.data("center") : false,
                $space = $this.attr("data-space") ? $this.data("space") : 30,
                $animateOut = $this.attr("data-animateOut") ? $this.data("animateOut") : false;

            $(this).owlCarousel({
                loop: $loop,
                items: $items,
                responsive: {
                    0: {
                        items: $this.data("xx-items") ? $this.data("xx-items") : 1,
                    },
                    480: {
                        items: $this.data("xs-items") ? $this.data("xs-items") : 1,
                    },
                    768: {
                        items: $this.data("sm-items") ? $this.data("sm-items") : 2,
                    },
                    980: {
                        items: $this.data("md-items") ? $this.data("md-items") : 3,
                    },
                    1200: {
                        items: $items,
                    },
                },
                dots: $navdots,
                space: $space,
                autoplayTimeout: $autospeed,
                smartSpeed: $smartspeed,
                autoHeight: $autohgt,
                center: $center,
                margin: $space,
                nav: $navarrow,
                //navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                autoplay: $autoplay,
                autoplayHoverPause: true,
            });
        });
    };



    /* ==========================================================================
    When document is Scrollig, do
    ========================================================================== */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    /* ==========================================================================
    When document is loaded, do
    ========================================================================== */
    $(window).on('load', function() {});
})(window.jQuery);