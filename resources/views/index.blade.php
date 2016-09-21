<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if gt IE 8]>   <html class="no-js" lang="en-US" ng-app="app" ng-strict-di><![endif]-->
<html ng-app="app" ng-strict-di>
<head>
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

    <script src="js/final.js" async defer></script>



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
    <script src="js/custom.js"></script>

</body>
</html>
