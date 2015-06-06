$(document).ready(function() {

    /************************************************************************************
     *************************************************************************************/
    $('.js-anchor').click(function (event) {
        var id = $(this).attr('href');
        var elem = $(id).offset().top;

        $('.js-anchor').removeClass('is-active');
        $(this).addClass('is-active');

        if ($(this).index() > 0) {
            elem += descrH;
        }

        $('html,body').animate({scrollTop: elem}, 600);

        event.preventDefault();
        return false;
    });


    $('body').parallax({
        'elements': [
            {
                'selector': '.about--mount-1',
                'properties': {
                    'x': {
                        'background-position-x': {
                            'initial': 0,
                            'multiplier': -0.01
                        }
                    }
                }
            },
            {
                'selector': '.about--mount-2',
                'properties': {
                    'x': {
                        'background-position-x': {
                            'initial': 0,
                            'multiplier': 0.012
                        }
                    }
                }
            }
        ]
    });





    var $descr = $('.description');
    var descrH = $descr.height();
    var descrPosTop = $descr.offset().top;
    var winH = $(window).height();

    $descr.height(0);

    $(document).scroll(function(){
        descrHeight();
    });

    var descrHeight = function() {
        var scrollTop = $(document).scrollTop();

        //if (winH + scrollTop > descrPosTop) {
        if (winH + scrollTop * 1.25 > descrPosTop) {
            if (scrollTop  * 1.25 < descrH) {
                $descr.height(scrollTop * 1.25);
            }
            else {
                $descr.height(descrH);
            }
        }
    };



    var $spaceStep= $('.about__step');
    var $spaceStepW = $spaceStep.width();
    var $raket = $('.js-roket');
    var $raketW = $raket.width();
    var $raketH = $raket.height();
    var $raketTop = $raket.offset().top;

    var posCenter = $spaceStepW / 2;

    $raket.css({
        'top': 0,
        'margin-left': $spaceStepW / 2 - ($raketW / 2)
    });


    //$(document).scroll(function(){
    //    var scrollTop = $(document).scrollTop();
    //    console.log($raketTop + " " + (scrollTop + winH - $raketH - 50));
    //    if ($raketTop < scrollTop + winH - $raketH - 50) {
    //        $raket.css({
    //            'top': scrollTop - $raketTop
    //        })
    //    }
    //});

    var space = [
        [posCenter, 25],
        [posCenter, 110],
        [posCenter + 120, 60],
        //[posCenter + 90, 102],
        [posCenter + 150, 92],
        [posCenter + 160, 212],
        [posCenter + 160, 250],
        [posCenter + 160, 273],
        [posCenter + 102, 332],
        [posCenter - 92, 275],
        [posCenter - 180, 302],
        [posCenter - 180, 330],
        [posCenter - 185, 475],
        //2 circle
        [posCenter - 72, 510],
        [posCenter - 102, 478],
        [posCenter + 160, 529],
        //3 circle
        [posCenter + 160, 685],
        [posCenter + 160, 735],
        [posCenter, 745],
        [posCenter, 800],
        [posCenter, 850]
    ];


    //$spaceStep.waypoints({
    //    item: '.js-roket',
    //    angel: 0,
    //    position: [$spaceStepW / 2,40],
    //    waypoint: 0,
    //    pathThreshold: 40,
    //    //maxForce: 0.15,
    //    //maxForce: 1,
    //    waypoints: space
    //});


    var slideCount = $('.slider__item').length;
    var slideWidth = $('.slider__item').width();
    var sliderCont = $('.slider__container');
    var slideNum = 0;

    sliderCont.width(slideCount / 2 * slideWidth);

    $('.js-prevSlide').click(function(){
        if (slideNum != 0) {
            slideNum--;
            slide(slideNum);
        }
    });
    $('.js-nextSlide').click(function(){
        if (slideNum < slideCount / 4 - 1) {
            slideNum++;
            slide(slideNum);
        }
    });

    function slide(slideNum) {
        sliderCont.animate({'left': -slideNum * slideWidth});
    }

});


