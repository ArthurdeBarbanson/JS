/**
 * Created by lp on 04/02/2016.
 */
jQuery(document).ready(function ($) {




    var carousel_options = {
        $AutoPlay: true,
        $AutoPlaySteps: 4,
        $SlideDuration: 160,
        $SlideWidth: 200,
        $SlideSpacing: 3,
        $Cols: 4,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $Steps: 4
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $SpacingX: 1,
            $SpacingY: 1
        }
    };

    var carousel_slider = new $JssorSlider$("carousel", carousel_options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = carousel_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 2000);
            carousel_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end


    /*
     *  Simple image gallery. Uses default settings
     */

    jQuery('.fancybox').fancybox();

    /*
     *  Different effects
     */

    // Change title type, overlay closing speed
    jQuery(".fancybox-effects-a").fancybox({
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                speedOut : 0
            }
        }
    });

    // Disable opening and closing animations, change title type
    jQuery(".fancybox-effects-b").fancybox({
        openEffect  : 'none',
        closeEffect	: 'none',

        helpers : {
            title : {
                type : 'over'
            }
        }
    });

    // Set custom style, close if clicked, change title type and overlay color
    jQuery(".fancybox-effects-c").fancybox({
        wrapCSS    : 'fancybox-custom',
        closeClick : true,

        openEffect : 'none',

        helpers : {
            title : {
                type : 'inside'
            },
            overlay : {
                css : {
                    'background' : 'rgba(238,238,238,0.85)'
                }
            }
        }
    });

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    jQuery(".fancybox-effects-d").fancybox({
        padding: 0,

        openEffect : 'elastic',
        openSpeed  : 150,

        closeEffect : 'elastic',
        closeSpeed  : 150,

        closeClick : true,

        helpers : {
            overlay : null
        }
    });

    /*
     *  Button helper. Disable animations, hide close button, change title type and content
     */

    jQuery('.fancybox-buttons').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
            title : {
                type : 'inside'
            },
            buttons	: {}
        },

        afterLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });


    /*
     *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
     */

    jQuery('.fancybox-thumbs').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,
        arrows    : false,
        nextClick : true,

        helpers : {
            thumbs : {
                width  : 50,
                height : 50
            }
        }
    });

    /*
     *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
     */
    jQuery('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });

    /*
     *  Open manually
     */

    jQuery("#fancybox-manual-a").click(function() {
        jQuery.fancybox.open('1_b.jpg');
    });

    jQuery("#fancybox-manual-b").click(function() {
        jQuery.fancybox.open({
            href : 'iframe.html',
            type : 'iframe',
            padding : 5
        });
    });

    jQuery("#fancybox-manual-c").click(function() {
        jQuery.fancybox.open([
            {
                href : '1_b.jpg',
                title : 'My title'
            }, {
                href : '2_b.jpg',
                title : '2nd title'
            }, {
                href : '3_b.jpg'
            }
        ], {
            helpers : {
                thumbs : {
                    width: 75,
                    height: 50
                }
            }
        });
    });



});