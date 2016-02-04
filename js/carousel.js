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
            refSize = Math.min(refSize, 1960);
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
});