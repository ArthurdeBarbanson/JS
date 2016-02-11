/**
 * Created by lp on 04/02/2016.
 */
jQuery(document).ready(function ($) {




    var carousel_options = {
        $AutoPlay: true, // permet au carousel de changer les images tous seul
        $AutoPlaySteps: 4, // les images defiles 4 par 4
        $SlideDuration: 160, // règle la vitesse des images
        $SlideWidth: 200,   // règle la taille des images en px
        $SlideSpacing: 3,   // règle l'espace entre les images en px
        $Cols: 4, // On met 4 images dans le slider
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $Steps: 2   // lorsque on clique sur une fleche on se deplace de 2
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $SpacingX: 1, //lorsque on appuie sur une touche on se déplace de 1

        }
    };
    // on initialise le carousel
    var carousel_slider = new $JssorSlider$("carousel", carousel_options);

    // Cette partie permet au Carousel d'être responsive
    function ScaleSlider() {
        var refSize = carousel_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1200); // La taille max du Carousel est 2000 px en dessous de cette valeurs il
            //prendra automatiquement la taille de la div et réduira la taille des images.
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
    // Fin du responsive



    jQuery('.fancybox').fancybox();



});