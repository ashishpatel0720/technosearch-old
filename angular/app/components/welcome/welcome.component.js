class WelcomeController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){

        jQuery(document).ready(function ($) {

            var intro = function(){
                var
                    intro = $('.intro-resize'),
                    win_width = $(window).width(),
                    win_height = $(window).height(),
                    intro_height = win_height;

                intro.css({
                    height: intro_height+'px'
                });

                var container = $('.container', intro),
                    container_height = container.height(),
                    intro_h = intro.height(),
                    margin = (intro_h - container_height) / 2;

                container.css({
                    'margin-top' : margin+'px'
                });
            };
            intro();

            $(window).on('resize', intro);

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



            (function($){

                $.fn.extend({

                    TextTyper: function(options) {


                        var defaults = {
                            syntax : ''
                        };

                        var options =  $.extend(defaults, options);

                        return $(this).each(function(index, element) {
                            var
                                $o = options,
                                $txt_box = $(element),
                                $my_txt = $txt_box.text(),
                                $my_max = $my_txt.length,
                                $rnd_str = "!#$%&/?abcdefghijklmnopqrstuvwxyz;ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",
                                $set_max = $rnd_str.length,
                                $interval = 2,
                                $i = 0,
                                $counter = 0,
                                $flag = true,
                                $intervalID = setInterval(enterframe, 10);

                            $txt_box.text('');
                            $txt_box.show();

                            function enterframe() {
                                if ($i < $my_max) {
                                    if ($counter < $interval) {
                                        $txt_box.text($my_txt.substr(0, $i));
                                        for ($j = $i; $j <$my_max; $j++) {
                                            $random = Math.floor(Math.random()*$set_max);
                                            $txt_box.append($rnd_str.charAt($random));
                                        }
                                        $counter++;
                                    } else {
                                        $counter = 0;
                                        $i++;
                                    }
                                } else if ($flag) {
                                    $txt_box.text($my_txt);
                                    $flag = false;
                                }
                            }

                        });
                    }
                });

            })(jQuery);

        });


    }

    
}

export const WelcomeComponent = {
    templateUrl: './views/app/components/welcome/welcome.component.html',
    controller: WelcomeController,
    controllerAs: 'vm',
    bindings: {}
}
