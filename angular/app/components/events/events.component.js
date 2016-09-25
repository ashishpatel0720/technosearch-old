class EventsController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){

        /* Portfolio
         ---------------------------------------------------------------------- */
        $(document).ready(function () {
            /*
             * TextTyper ver. 1.0.0
             */

            (function ($) {

                $.fn.extend({

                    //pass the options variable to the function
                    TextTyper: function (options) {


                        //Set the default values, use comma to separate the settings, example:
                        var defaults = {
                            syntax: ''
                        }

                        var options = $.extend(defaults, options);

                        return $(this).each(function (index, element) {
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
                                        for ($j = $i; $j < $my_max; $j++) {
                                            $random = Math.floor(Math.random() * $set_max);
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

            function onWindowResize(callback) {
                var width = $(window).width(),
                    height = $(window).height();

                $(window).resize(function () {
                    var newWidth = $(window).width(),
                        newHeight = $(window).height();

                    if (newWidth !== width || newHeight !== height) {
                        width = newWidth;
                        height = newHeight;
                        callback();
                    }
                });
            }


            (function () {

                if (!$.fn.isotope) return;


                var $container = $('.items'),
                    $win = $(window),
                    $imgs = $('img.lazy');

                if ($container.length) {


                    /* Isotope
                     ------------------------- */
                    onWindowResize(function () {
                        $container.isotope('layout');
                    });
                    $(window).load(function () {
                        $container.isotope({
                            itemSelector: '.item',
                            onLayout: function () {
                                $win.trigger('scroll');
                            }
                        });
                    });

                    // Load images
                    $imgs.jail({effect: 'fadeIn'});

                    // Add filter event
                    function _items_filter($el, $data) {

                        // Add all filter class
                        $el.addClass('item-filter');

                        // Add categories to item classes
                        $('.item', $container).each(function (i) {
                            var
                                $this = $(this);
                            $this.addClass($this.attr($data));
                        });

                        $el.on('click', 'a', function (e) {
                            var
                                $this = $(this),
                                $option = $this.attr($data);

                            // Add active filter class
                            $('.item-filter').removeClass('active-filter');
                            $el.addClass('active-filter');
                            $('.item-filter:not(.active-filter) li a').removeClass('active');
                            $('.item-filter:not(.active-filter) li:first-child a').addClass('active');

                            // Add/remove active class for this filter
                            $el.find('a').removeClass('active');
                            $this.addClass('active');

                            if ($option) {
                                if ($option !== '*') $option = $option.replace($option, '.' + $option)
                                $container.isotope({filter: $option});
                            }

                            e.preventDefault();

                        });

                        $el.find('a').first().addClass('active');
                    }

                    // Init filters
                    if ($('.dd-filter-list').length) _items_filter($('.dd-filter-list'), 'data-categories');
                    if ($('.filter-list').length) _items_filter($('.filter-list'), 'data-categories');

                }
            })();

        });

    }
}

export const EventsComponent = {
    templateUrl: './views/app/components/events/events.component.html',
    controller: EventsController,
    controllerAs: 'vm',
    bindings: {}
}
