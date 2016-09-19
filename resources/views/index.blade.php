<!doctype html>
<html ng-app="app" ng-strict-di>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Technosearch</title>
    
</head>
<body>

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

</body>
</html>
