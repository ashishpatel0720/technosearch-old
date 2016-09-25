class WelcomeController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){

        /* Main Settings
         ---------------------------------------------------------------------- */
        $(document).ready(function () {
            var settings = {
                // Navigation height
                // nav_height: $('.nav-container').css('height').replace('px', ''),
                nav_height: 65,

                // Animations on mobile devices
                animations: false,

            };

            /* Detect Touch Device and set animations
             ---------------------------------------------------------------------- */
            (function () {

                if (Modernizr == 'undefined') return;

                if (Modernizr.touch) {

                    $('body').addClass('touch-device');

                }

                // Set animations on mobile devices
                var current_width = $(window).width();

                if (Modernizr.touch && current_width <= 568 && !settings.animations) {
                    settings.animations = false;
                } else {
                    settings.animations = true;
                }

                // console.log(settings.animations, current_width)

            })();

            /* Intro section
             ---------------------------------------------------------------------- */
            (function() {

                var intro = function(){
                    var
                        intro = $('.intro-resize'),
                        win_width = $(window).width(),
                        win_height = $(window).height(),
                        intro_height = win_height;

                    intro.css({
                        height: intro_height+'px'
                    });

                    // Center content
                    var container = $('.container', intro),
                        container_height = container.height(),
                        intro_h = intro.height(),
                        margin = (intro_h - container_height) / 2;

                    container.css({
                        'margin-top' : margin+'px'
                    });
                }
                // Init intro
                intro();

                $(window).on('resize', intro);

                // Ticker
                function tick(){
                    $('#ticker li:first').slideUp({
                        duration: 600,
                        easing: 'easeOutSine',
                        complete: function(){
                            $(this).appendTo($('#ticker')).slideDown();
                        }
                    });
                }
                if (settings.animations) {
                    setInterval(function(){tick()}, 4000);
                }

                // Scroll arrow
                function scroll_arrows() {
                    $('#scroll-arrows').find('img').stop()
                        .animate({
                            marginTop: '15px'
                        }, 1000, 'easeOutSine', function(){
                            $('#scroll-arrows').find('img').stop().animate({
                                marginTop: '-5px'
                            }, 1000, 'easeInOutSine', function(){
                                scroll_arrows();
                            });
                        });
                }
                if (settings.animations) {
                    scroll_arrows();
                }

            })();
            function scripts(container) {
                /* Smooth Scroll
                 ------------------------- */
                $('.smooth-scroll', container).on('click', function (e) {
                    var
                        $id = $(this).attr('href');

                    // If element exists
                    if ($($id).length) {
                        $.scrollTo($id, 750, {
                            easing: 'swing',
                            // offset: {top: -settings.nav_height, left: 0}
                            offset: {top: -65, left: 0}
                        });
                    }
                    e.preventDefault();
                });
            }
            scripts('html');

        });

    }
}

export const WelcomeComponent = {
    templateUrl: './views/app/components/welcome/welcome.component.html',
    controller: WelcomeController,
    controllerAs: 'vm',
    bindings: {}
}
