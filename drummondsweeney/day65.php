
<html>
    <head>
        <title>Square Calculator</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link href="../css/bootstrap.min.css" rel="stylesheet">
        <style>
            body{
                background-image: url("http://www.buzzfeed.com/summeranne/gifs-that-will-make-you-laugh-every-time?sub=2768117_2011506");
            }
        </style>
 
        <script src="../js/jquery.js"></script>
        <script src="../js/bootstrap.min.js"></script>
        <script>
            $(document).ready(function() {
                $("#side").keyup(function(e) {
                    var side = $("#side").val();
                    $("#perimeter").val(side * 4);
                    $("#area").text(Math.pow(side, 2));
                });
 
            });
        </script>
    </head>
    <body>
        <div class="container">
            <h1>Square Calculator</h1>
            <div class="row">
                Side Length:  <input id="side" />
            </div>
            <div class="row"> <!--This shows how to write to a input field.-->
                Perimeter  <input id="perimeter" />
            </div>
            <div class="row"> <!--This shows how to write to a span or div, etc.-->
                Area:  <span id="area">Undefined</span>
            </div>
            <div class="row">
                <button id="calculate">Calculate</button>
            </div>
        </div>
    </body>
</html>