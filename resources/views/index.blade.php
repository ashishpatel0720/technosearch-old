<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en" ng-app="app" ng-strict-di> <![endif]-->
<!--[if gt IE 8]>   <html class="no-js" lang="en-US" ng-app="app" ng-strict-di><![endif]-->
<html ng-app="app">
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
    <meta name="author" content="Hariom, Manohar">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/menu.css" media="screen" />
    <link rel="stylesheet" href="css/style.css" media="screen" />
    <link rel="stylesheet" href="css/media-queries.css" media="screen" />
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
</head>
<body>

    {{--<!--[if lte IE 7]>--}}
    {{--<div id="ie-message"><p>You are using Internet Explorer 7.0 or older to view this site. Your browser is an eight year old browser which does not display modern web sites properly. Please upgrade to a newer browser to fully enjoy the web. <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx">Upgrade your browser</a></p></div>--}}
    {{--<![endif]-->--}}

    <div id="top" style="position: absolute"></div>
    <div ui-view="main" autoscroll="true">
        <div style="width:100%;height:100vh;top:0;left:0;position:fixed;display:flex;align-items:center;justify-content:center;background:#000;">
            <img src="/img/loader.gif">
        </div>
    </div>


    <script>
    (function(){
        var link = document.createElement("link");
        link.href = "css/final.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.body.appendChild(link);
    })();
    </script>

    <script src="https://www.google.com/recaptcha/api.js?onload=vcRecaptchaApiLoaded&render=explicit" async defer ></script>
    <script src="js/final.js" async defer></script>

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-51356287-2', 'auto');
        ga('send', 'pageview');

    </script>

</body>
</html>
