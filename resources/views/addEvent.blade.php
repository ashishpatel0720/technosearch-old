<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="/css/picnic.min.css" rel="stylesheet">
    <link href="/css/flexboxgrid.min.css" rel="stylesheet">
    <title>Gode Mode</title>
    <style>
        .box > * {
            margin: 5px 0px;
        }
    </style>
</head>
<body>

<div class="row center-xs middle-xs" style="height: 100%;width: 100%;">
    <form class="box">
        <div class="row center-xs middle-xs">
            <div class="col-md-4 col-xs-10">
                <div class="box">
                    <input placeholder="Name" name="name" required/>
                    <textarea  placeholder="Description" style="height: 86px !important;" name="description" required></textarea>
                    <label style="width: 100%;display: inline-flex;">
                        <input type="checkbox" name="problem_statement">
                        <span class="checkable">Problem Statement</span>
                    </label>
                    <select name="category" required>
                        <option value="" style="display:none;" disabled selected>Choose a category</option>
                        <option value="robotics">Robotics</option>
                        <option value="coding">Coding</option>
                        <option value="aerodrome">Aerodrome</option>
                        <option value="literary">Literary</option>
                        <option value="strategical">Strategical</option>
                        <option value="fun">Fun</option>
                        <option value="photobooth">Photobooth</option>
                        <option value="chemical">Chemical</option>
                        <option value="civil">Civil</option>
                        <option value="electrical">Electrical</option>
                        <option value="electronics">Electronics</option>
                        <option value="computer_science">Computer Science</option>
                        <option value="mechanical">Mechanical</option>
                    </select>
                    <input  placeholder="Faculty Coordinator" name="faculty" required/>
                </div>
            </div>
            <div class="col-md-4 col-xs-10">
                <div class="box">
                    <input  placeholder="Coordinator name - 1" name="name1" required/>
                    <input  placeholder="Coordinator contact - 1" name="contact1" required/>
                    <input type="email"  placeholder="Coordinator email - 1" name="email1" required/>
                    <input  placeholder="Coordinator name - 2" name="name2" required/>
                    <input  placeholder="Coordinator contact - 2" name="contact2" required/>
                    <input type="email"  placeholder="Coordinator email - 2" name="email2" required/>

                </div>
            </div>
            <button type="submit" class="col-md-8 col-xs-10">Save</button>
        </div>
    </form>
</div>
<script src="/js/zepto.min.js"></script>
<script>
    Zepto(function($){
        $('form').submit(function(){
            $.post('/api/addevent');
            return false;
        })
    })
</script>
</body>
</html>