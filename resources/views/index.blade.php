<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if gt IE 8]>   <html class="no-js" lang="en-US" ng-app="app" ng-strict-di><![endif]-->
<html ng-app="app" ng-strict-di>
<head>
    <base href="/">
    <title>TechnoSearch - MANIT Bhopal</title>
    <meta charset="utf-8">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
    <![endif]-->
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="description" content="TechnoSearch ">
    <meta name="keywords" content=""/>
    <meta name="author" content="Site Author">
    <!-- Fav icon -->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
    <!-- <meta name="robots" content="index,follow"> -->

    <!-- ############################# Stylesheets ############################# -->
    <link rel="stylesheet" href="css/menu.css" media="screen" />
    <link rel="stylesheet" href="css/style.css" media="screen" />
    <link rel="stylesheet" href="css/media-queries.css" media="screen" />
    <!-- Fancybox styles -->
    <link rel="stylesheet" href="css/fancybox.custom.css" media="screen" />
    <!-- Flexslider styles -->
    <link rel="stylesheet" href="css/flexslider.css" media="screen" />
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
    <!-- ############################# Javascripts ############################# -->
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js" type="text/javascript"></script>
    <!-- Add HTML5 support for older IE browsers -->
    <!--[if lt IE 9]>
    <script src="js/html5.min.js"></script>
    <script src="js/selectivizr-and-extra-selectors.min.js"></script>
    <![endif]-->
    <!-- Modernizr -->
    <script src="js/modernizr.custom.js"></script>

</head>
<body>

    <!-- ############################# Update Message for older browsers ############################# -->
    <!--[if lte IE 7]>
    <div id="ie-message"><p>You are using Internet Explorer 7.0 or older to view this site. Your browser is an eight year old browser which does not display modern web sites properly. Please upgrade to a newer browser to fully enjoy the web. <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx">Upgrade your browser</a></p></div>
    <![endif]-->


    <div ui-view="main"></div>


    <script>
    (function(){
        var link = document.createElement("link");
        link.href = "css/final.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.body.appendChild(link);
    })();
    </script>


    <!-- ############################# javascripts ############################# -->
    <script src="js/jquery.easing-1.3.min.js"></script>
    <script src="js/jquery.dlmenu.js"></script>
    <script src="js/smoothscroll.js"></script>
    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/jquery.parallax-1.1.3.js"></script>
    <script src="js/jquery.isotope.min.js"></script>
    <script src="js/jquery.nav.js"></script>
    <script src="js/jquery.jail.js"></script>
    <script src="js/jquery.flexslider-min.js"></script>
    <script src="js/nprogress.js"></script>
    <script src="js/jquery.countdown.js"></script>
    <!-- fancybox -->
    <script src="js/jquery.fancybox-1.3.4.pack.js"></script>
    <!-- google scripts -->
    <script src="https://maps.google.com/maps/api/js?sensor=false"></script>
    <script src="js/jquery.gmap.min.js"></script>
    <!-- fullwidth player -->
    <script src="js/jquery-ui.js" type="text/javascript"></script>
    <!-- custom scripts -->
    {{--<script src="js/custom.js"></script>--}}





    <script>
        // HTML5 Placeholder support for non compliant browsers using jQuery.
        (function($) {
            $.extend($,{ placeholder: {
                browser_supported: function() {
                    return this._supported !== undefined ?
                            this._supported :
                            ( this._supported = !!('placeholder' in $('<input type="text">')[0]) );
                },
                shim: function(opts) {
                    var config = {
                        color: '#888',
                        cls: 'placeholder',
                        selector: 'input[placeholder], textarea[placeholder]'
                    };
                    $.extend(config,opts);
                    return !this.browser_supported() && $(config.selector)._placeholder_shim(config);
                }
            }});

            $.extend($.fn,{
                _placeholder_shim: function(config) {
                    function calcPositionCss(target)
                    {
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
                        if(typeof $target !== "undefined") {
                            label.css(calcPositionCss($target));
                            $(window).one("resize", function () { adjustToResizing(label); });
                        }
                    }
                    return this.each(function() {
                        var $this = $(this);

                        if( $this.is(':visible') ) {

                            if( $this.data('placeholder') ) {
                                var $ol = $this.data('placeholder');
                                $ol.css(calcPositionCss($this));
                                return true;
                            }

                            var possible_line_height = {};
                            if( !$this.is('textarea') && $this.css('height') != 'auto') {
                                possible_line_height = { lineHeight: $this.css('height'), whiteSpace: 'nowrap' };
                            }

                            var ol = $('<label />')
                                    .text($this.attr('placeholder'))
                                    .addClass(config.cls)
                                    .css($.extend({
                                        position:'absolute',
                                        display: 'inline',
                                        'float':'none',
                                        overflow:'hidden',
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
                                    .data('target',$this)
                                    .click(function(){
                                        $(this).data('target').focus();
                                    })
                                    .insertBefore(this);
                            $this
                                    .data('placeholder',ol)
                                    .focus(function(){
                                        ol.hide();
                                    }).blur(function() {
                                ol[$this.val().length ? 'hide' : 'show']();
                            }).triggerHandler('blur');
                            $(window).one("resize", function () { adjustToResizing(ol); });
                        }
                    });
                }
            });
        })(jQuery);

        jQuery(document).add(window).bind('ready load', function() {
            if (jQuery.placeholder) {
                jQuery.placeholder.shim();
            }
        });
        jQuery('html').removeClass('no-js').addClass('js');
        jQuery(document).ready(function($) {
            /* Main Settings
             ---------------------------------------------------------------------- */
            var settings = {
                // Navigation height
//                nav_height: $('.nav-container').css('height').replace('px', ''),
                nav_height: $('.nav-container').css('height'),

                // Animations on mobile devices
                animations: false,

                // Text intro
                text_pasue_time: 3000, // Pause between next text
                one_loop: true, // Play only one

                // Navigation
                auto_response: true, // Auto create responsive menu based on main navigation
                deeplinking: true,  // Use project deeplinking
                project_path: '/',  // Ajax hash path

            };

            // Configure preloader
            NProgress.configure({showSpinner: false});

            // Add special class for IE10
            if (Function('/*@cc_on return document.documentMode===10@*/')()) {
                document.documentElement.className += ' ie10';
            }

            // Small resize helper function
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


            /* Smooth Scroll
             ------------------------- */
            $('html').on('click','.smooth-scroll', function(e){
                var
                        $id = $(this).attr('href');

                // If element exists
                if ($($id).length) {
                    $.scrollTo($id, 750, {
                        easing: 'swing',
                        offset: {top:-settings.nav_height, left:0}
                    });
                }
                e.preventDefault();
            });
            // For the tooltip
            // Disable Thumb slide effect on touch devices
//            if (!Modernizr.touch) {
//
//                // Init thumb slider
//                $('.tip', 'html').topTip();
//            };

            (function () {
                if ($.fn.parallax != 'undefined') {
                    $('.parallax').each(function(){
                        $(this).parallax('50%', $(this).data('interia'), false);
                    });
                }
            })();
        });
    </script>

    <script src="js/final.js"></script>

</body>
</html>
