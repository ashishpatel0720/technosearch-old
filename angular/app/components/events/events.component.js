class EventsController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){

        /* Portfolio
         ---------------------------------------------------------------------- */
        jQuery(document).ready(function ($) {

            (function() {

                if (!$.fn.isotope) return;


                var $container = $('.items'),
                    $win = $(window),
                    $imgs = $('img.lazy');

                if ($container.length) {


                    /* Isotope
                     ------------------------- */
                    onWindowResize(function() {
                        $container.isotope('layout');
                    });
                    $(window).load(function() {
                        $container.isotope({
                            itemSelector : '.item',
                            onLayout: function() {
                                $win.trigger('scroll');
                            }
                        });
                    });

                    // Load images
                    $imgs.jail({effect : 'fadeIn'});

                    // Add filter event
                    function _items_filter($el, $data) {

                        // Add all filter class
                        $el.addClass('item-filter');

                        // Add categories to item classes
                        $('.item', $container).each(function(i) {
                            var
                                $this = $(this);
                            $this.addClass($this.attr($data));
                        });

                        $el.on('click', 'a', function(e){
                            var
                                $this   = $(this),
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
                                $container.isotope({ filter : $option });
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




            /*
             * TopTip ver. 1.1.0
             * jQuery Tooltip effect
             *
             * Copyright (c) 2013 Mariusz Rek
             * Rascals Labs 2013
             *
             */


            (function($){

                $.fn.topTip = function(options) {

                    //Set the default values, use comma to separate the settings, example:
                    var defaults = {
                        syntax : ''
                    }

                    var options =  $.extend(defaults, options);

                    $(this).on('mouseenter', function(e) {
                        // Add tip object
                        var
                            tip = {},
                            title = '',
                            min_width = 200;
                        mouse_move = false,
                            tip = {
                                'desc' : $(this).data('tip-desc'),
                                'top' : $(this).offset().top,
                                'content' :  $(this).find('.tip-content').html()
                            };

                        // Check if title is exists
                        if (tip.content == undefined) return;

                        // Append datatip prior to closing body tag
                        $('body').append('<div id="tip"><div class="tip-content"><div class="tip-inner">'+tip.content+'</div></div></div>');

                        // Set max width
                        if ($(this).outerWidth() > min_width) {
                            $('#tip .tip-inner').width($(this).outerWidth()-40);
                        }

                        // Store datatip's height and width for later use
                        tip['h'] = $('#tip div:first').outerHeight()+100;
                        tip['w'] = $('#tip div:first').outerWidth();

                        // Set datatip's mask properties - position, height, width etc
                        $('#tip').css({position:'absolute', overflow:'hidden', width:'100%', top:tip['top']-tip['h'], height:tip['h'], left:0 });

                        // Animated effect
                        if ($('.tip-content.animate', this).length) {

                            // If function TextTyper not exists
                            if (!$.fn.TextTyper) return;

                            var tip_el = $('#tip');

                            $('.tip-content', tip_el).addClass('animate');
                            $('.tip-content span', tip_el).TextTyper();

                        }

                        // Mouse Move
                        if (mouse_move) {
                            // Set tip position
                            $('#tip div').css({ left:e.pageX-(tip['w']/2), top:tip['h']+5 }).animate({ top:100 }, 500, 'easeOutBack');

                            // Move datatip according to mouse position, whilst over instigator element
                            $(this).mousemove(function(e){ $('#tip div').css({left: e.pageX-(tip['w']/2)}); });
                        } else {
                            // Set tip position
                            var pos =  $(this).offset();
                            $('#tip div').css({ left: pos.left+'px', top:tip['h']+5 }).animate({ top:100 }, 500, 'easeOutBack');
                        }


                    }).on('mouseleave click', function(e) {

                        // Remove datatip instances
                        $('#tip').remove();

                    });

                }

            })(jQuery);
        });

    }
}

export const EventsComponent = {
    templateUrl: './views/app/components/events/events.component.html',
    controller: EventsController,
    controllerAs: 'vm',
    bindings: {}
}
