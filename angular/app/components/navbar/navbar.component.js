class NavbarController {
    constructor() {
        'ngInject';

        //
    }

    $onInit(){
        
        jQuery(document).ready(function ($) {
            $('.smooth-scroll', 'html').on('click', function(e){
                var
                    $id = $(this).attr('href');

                if ($($id).length) {
                    $.scrollTo($id, 750, {
                        easing: 'swing',
                        offset: {top:-settings.nav_height, left:0}
                    });
                }
                e.preventDefault();
            });


            $('#nav-search').on('click', function(e){
                $('#search-wrap').slideToggle(400);
                e.preventDefault();
            });


            $(document).on('mouseenter', '.fancy-dd', function() {
                $(this).find('ul').stop(true, true).slideDown(600,'easeOutExpo');
            });
            $(document).on('mouseleave', '.fancy-dd', function() {
                $(this).find('ul').stop(true, true).slideUp(600,'easeOutExpo');
            });

            if (Modernizr.touch) {
                $('.fancy-dd').unbind('mouseenter mouseleave');
                $('.fancy-dd > a').click(function(e){
                    $(this).parent().find('ul').stop(true,true).slideToggle(600,'easeOutExpo');
                    e.preventDefault();
                });
            }


            (function() {

                var
                    $nav = $('#nav').children('ul');

                $('li', $nav).on('mouseenter', function() {
                    var
                        $this = $(this),
                        $sub  = $this.children('ul');
                    if ($sub.length) $this.addClass('active');
                    $sub.hide().stop(true, true).fadeIn(200);
                }).on('mouseleave', function() {
                    $(this).removeClass('active').children('ul').stop(true, true).fadeOut(50);
                });

                var
                    sticky_nav = $('#main-nav'),
                    sticky_navigation_offset_top = sticky_nav.offset().top-settings.nav_height-2;
                hiddenNav = false;

                var sticky_navigation = function(){
                    var scroll_top = $(window).scrollTop();

                    if (scroll_top > sticky_navigation_offset_top) {
                        sticky_nav.addClass('sticky');
                        if (sticky_nav.hasClass('hide')) {
                            hiddenNav = true;
                            sticky_nav.removeClass('hide')
                                .css({
                                    'top' : '-65px'
                                })
                                .stop()
                                .animate({
                                    'top' : 0
                                },400, 'easeOutSine');
                        }
                    } else {
                        if (hiddenNav) {
                            sticky_nav
                                .stop()
                                .animate({
                                    'top' : '-65px'
                                },200, 'easeOutSine', function(){
                                    sticky_nav.removeClass('sticky').addClass('hide');
                                });
                        } else {
                            sticky_nav.removeClass('sticky').addClass('hide');
                        }

                    }
                };

                $(window).scroll(function() {
                    sticky_navigation();
                });


                if (settings.auto_response) {

                    var
                        $responsive = $('#nav').clone();

                    $('ul:not(:first-child)', $responsive).addClass('dl-submenu');
                    $('> ul', $responsive).addClass('dl-menu');

                    $responsive = $responsive.children('ul');

                    $('#dl-menu').append($responsive);

                }

                if ($.fn.dlmenu) $('#dl-menu').dlmenu();

                $('#dl-menu ul').css('max-height', ($(window).height()-settings.nav_height)+"px");
                $(window).resize(function(){
                    $('#dl-menu ul').css('max-height', ($(window).height()-settings.nav_height)+"px");
                });


                /* One page plugin nav settings
                 ------------------------- */
                $nav_settings = {
                    currentClass: 'current',
                    changeHash: false,
                    scrollSpeed: 750,
                    scrollOffset: settings.nav_height,
                    scrollThreshold: 0.01,
                    filter: ':not(.external,.page-by-ajax)',
                    easing: 'swing'
                };

                if ($.fn.onePageNav) {
                    // Init one page navigation
                    if ($('#nav').hasClass('one-page-nav'))
                        $('#nav').onePageNav($nav_settings);

                    // Init one page navigation
                    if ($('#dl-menu').hasClass('one-page-nav'))
                        $('#dl-menu').onePageNav($nav_settings);
                }

            })();


        });
        
        


    }
}
export const NavbarComponent = {
    templateUrl: './views/app/components/navbar/navbar.component.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindings: {}
}
