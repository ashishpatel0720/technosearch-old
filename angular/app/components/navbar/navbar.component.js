class NavbarController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
        var settings = {
            // Navigation height
            nav_height: 65,

            // Animations on mobile devices
            animations: false,

            // Navigation
            auto_response: true, // Auto create responsive menu based on main navigation
            deeplinking: true,  // Use project deeplinking

        };

        $(document).ready(function () {

            // Add special class for IE10
            if (Function('/*@cc_on return document.documentMode===10@*/')()) {
                document.documentElement.className += ' ie10';
            }

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

            // function scripts(container) {

                /*  todo: see where the toggle goes */
                /* Toggle content
                 ------------------------- */
                // $('.toggle').each(function () {
                //
                //     /* Init */
                //     $('.active-toggle', this).next().show();
                //
                //     /* List variables */
                //     var toggle = $(this);
                //
                //     /* Click on Toggle Heading */
                //     $('h4.toggle-title', this).click(function () {
                //         if ($(this).is('.active-toggle')) {
                //             $(this).removeClass('active-toggle');
                //             $('.toggle-content', toggle).slideUp(400);
                //         } else {
                //             $(this).addClass('active-toggle');
                //             $('.toggle-content', toggle).slideDown(400);
                //         }
                //         return false;
                //     });
                //
                // });


                /* TopTip - Tooltip
                 ------------------------- */

                // Disable Thumb slide effect on touch devices
                // if (!Modernizr.touch) {
                //
                //     // Init thumb slider
                //     $('.tip', container).topTip();
                // }


                /* Smooth Scroll-------- */
                // $('.smooth-scroll', container).on('click', function (e) {
                //     var
                //         $id = $(this).attr('href');
                //
                //     // If element exists
                //     if ($($id).length) {
                //         $.scrollTo($id, 750, {
                //             easing: 'swing',
                //             offset: {top: -65, left: 0}
                //         });
                //     }
                //     e.preventDefault();
                // });



            // }
            //
            // // Init scripts
            // scripts('html');

            (function () {
                if ($.fn.parallax != 'undefined') {
                    $('.parallax').each(function () {
                        $(this).parallax('50%', $(this).data('interia'), false);
                    });

                }

                /* Search
                 ------------------------- */
                $('#nav-search').on('click', function (e) {
                    $('#search-wrap').slideToggle(400);
                    e.preventDefault();
                });


                /* Fancy dropdown list
                 ------------------------- */
                $(document).on('mouseenter', '.fancy-dd', function () {
                    $(this).find('ul').stop(true, true).slideDown(600, 'easeOutExpo');
                });
                $(document).on('mouseleave', '.fancy-dd', function () {
                    $(this).find('ul').stop(true, true).slideUp(600, 'easeOutExpo');
                });

                // Touch devices fix
                if (Modernizr.touch) {
                    $('.fancy-dd').unbind('mouseenter mouseleave');
                    $('.fancy-dd > a').click(function (e) {
                        $(this).parent().find('ul').stop(true, true).slideToggle(600, 'easeOutExpo');
                        e.preventDefault();
                    });
                }
            })();

            /* Navigation
             ---------------------------------------------------------------------- */
            (function () {

                /* Main navigation
                 ------------------------- */
                var
                    $nav = $('#nav').children('ul');

                // Create main navigation
                $('li', $nav).on('mouseenter', function () {
                    var
                        $this = $(this),
                        $sub = $this.children('ul');
                    if ($sub.length) $this.addClass('active');
                    $sub.hide().stop(true, true).fadeIn(200);
                }).on('mouseleave', function () {
                    $(this).removeClass('active').children('ul').stop(true, true).fadeOut(50);
                });


                /* Sticky navigation
                 ------------------------- */

                // grab the initial top offset of the navigation
                var
                    sticky_nav = $('#main-nav'),
                    sticky_navigation_offset_top = sticky_nav.offset().top - 65 - 2,
                    hiddenNav = false;

                // our function that decides weather the navigation bar should have "fixed" css position or not.
                var sticky_navigation = function () {
                    var scroll_top = $(window).scrollTop(); // our current vertical position from the top

                    // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
                    if (scroll_top > sticky_navigation_offset_top) {
                        sticky_nav.addClass('sticky');
                        if (sticky_nav.hasClass('hide')) {
                            hiddenNav = true;
                            sticky_nav.removeClass('hide')
                                .css({
                                    'top': '-65px'
                                })
                                .stop()
                                .animate({
                                    'top': 0
                                }, 400, 'easeOutSine');
                        }
                    } else {
                        if (hiddenNav) {
                            sticky_nav
                                .stop()
                                .animate({
                                    'top': '-65px'
                                }, 200, 'easeOutSine', function () {
                                    sticky_nav.removeClass('sticky').addClass('hide');
                                });
                        } else {
                            sticky_nav.removeClass('sticky').addClass('hide');
                        }

                    }
                };

                // and run it again every time you scroll
                $(window).scroll(function () {
                    sticky_navigation();
                });


                /* Responsive navigation
                 ------------------------- */

                // Auto create responsive menu based on main navigation
                if (settings.auto_response) {

                    var
                        $responsive = $('#nav').clone();

                    // Add class
                    $('ul:not(:first-child)', $responsive).addClass('dl-submenu');
                    $('> ul', $responsive).addClass('dl-menu');

                    // Remove main nav container
                    $responsive = $responsive.children('ul');

                    // Put menu in nav container
                    $('#dl-menu').append($responsive);

                }

                // Init dlmenu() plugin
                if ($.fn.dlmenu) $('#dl-menu').dlmenu();

                // if ($.fn.dlmenu) $('#dl-menu').dlmenu({
                // 	onLinkClick : function( el, ev ) {
                // 		$('#dl-menu').dlmenu('closeMenu');
                // 		return false;
                // 	}
                // });

                // Overflow fix on mobile devices
                $('#dl-menu ul').css('max-height', ($(window).height() - 65) + "px");
                $(window).resize(function () {
                    //var $height = $(window).height()-$("#main-nav").height();
                    $('#dl-menu ul').css('max-height', ($(window).height() - 65) + "px");
                });

            })();


        });

        // HTML5 Placeholder support for non compliant browsers using jQuery.
        (function ($) {
            // @todo Document this.
            $.extend($, {
                placeholder: {
                    browser_supported: function () {
                        return this._supported !== undefined ?
                            this._supported :
                            ( this._supported = !!('placeholder' in $('<input type="text">')[0]) );
                    },
                    shim: function (opts) {
                        var config = {
                            color: '#888',
                            cls: 'placeholder',
                            selector: 'input[placeholder], textarea[placeholder]'
                        };
                        $.extend(config, opts);
                        return !this.browser_supported() && $(config.selector)._placeholder_shim(config);
                    }
                }
            });

            $.extend($.fn, {
                _placeholder_shim: function (config) {
                    function calcPositionCss(target) {
                        var op = $(target).offsetParent().offset();
                        var ot = $(target).offset();

                        return {
                            top: ot.top - op.top,
                            left: ot.left - op.left,
                            width: $(target).width()
                        };
                    }

                    function adjustToResizing(label) {
                        var $target = label.data('target');
                        if (typeof $target !== "undefined") {
                            label.css(calcPositionCss($target));
                            $(window).one("resize", function () {
                                adjustToResizing(label);
                            });
                        }
                    }

                    return this.each(function () {
                        var $this = $(this);

                        if ($this.is(':visible')) {

                            if ($this.data('placeholder')) {
                                var $ol = $this.data('placeholder');
                                $ol.css(calcPositionCss($this));
                                return true;
                            }

                            var possible_line_height = {};
                            if (!$this.is('textarea') && $this.css('height') != 'auto') {
                                possible_line_height = {lineHeight: $this.css('height'), whiteSpace: 'nowrap'};
                            }

                            var ol = $('<label />')
                                .text($this.attr('placeholder'))
                                .addClass(config.cls)
                                .css($.extend({
                                    position: 'absolute',
                                    display: 'inline',
                                    'float': 'none',
                                    overflow: 'hidden',
                                    textAlign: 'left',
                                    color: config.color,
                                    cursor: 'text',
                                    paddingTop: $this.css('padding-top'),
                                    paddingRight: $this.css('padding-right'),
                                    paddingBottom: $this.css('padding-bottom'),
                                    paddingLeft: $this.css('padding-left'),
                                    fontSize: $this.css('font-size'),
                                    fontFamily: $this.css('font-family'),
                                    fontStyle: $this.css('font-style'),
                                    fontWeight: $this.css('font-weight'),
                                    textTransform: $this.css('text-transform'),
                                    backgroundColor: 'transparent',
                                    zIndex: 99
                                }, possible_line_height))
                                .css(calcPositionCss(this))
                                .attr('for', this.id)
                                .data('target', $this)
                                .click(function () {
                                    $(this).data('target').focus();
                                })
                                .insertBefore(this);
                            $this
                                .data('placeholder', ol)
                                .focus(function () {
                                    ol.hide();
                                }).blur(function () {
                                ol[$this.val().length ? 'hide' : 'show']();
                            }).triggerHandler('blur');
                            $(window).one("resize", function () {
                                adjustToResizing(ol);
                            });
                        }
                    });
                }
            });
        })(jQuery);

        jQuery(document).add(window).bind('ready load', function () {
            if (jQuery.placeholder) {
                jQuery.placeholder.shim();
            }
        });

    }
}

export const NavbarComponent = {
    templateUrl: './views/app/components/navbar/navbar.component.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindings: {}
}
