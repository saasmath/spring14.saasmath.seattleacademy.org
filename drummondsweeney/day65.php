<html>
    <head>
        <title>Square Calculator</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link href="../css/bootstrap.min.css" rel="stylesheet">
        <style>
            body{
                background-image: url("http://www.buzzfeed.com/summeranne/gifs-that-will-make-you-laugh-every-time?sub=2768117_2011359");
               
            }
        </style>

        <script src="../js/jquery.js"></script>
        <script src="../js/bootstrap.min.js"></script>
        <script>
            $(document).ready(function() {
                $("#side2,#lenght,#width, #height, #side").keyup(function(e) {
                    var side = $("#side").val();
                     var side2 = $("#side2").val();
                    $("#perimeter").text( (side*1 + side2*1) * 2 );
                    $("#area").text(side * side2);
                    if(side==3){
                        $("#message").text("Holdup we makin noise");
                    }
                
               
                   
                      var length = $("#lenght").val();
                      var width = $("#width").val();
                      var height = $("#height").val();
                    $("#surfacearea").text( 2*(length * width*1 + width * height* + length * height*1) );
                    $("#area2").text(length * width * height);
                });

            });
        </script>
    </head>
    <body>
        <div class="container">
            <h1>Rectangle Calculator</h1>
            <div class="row">
                Side #1:  <input id="side" value="0" />
            </div>
             <div class="row">
                 Side #2:  <input id="side2" value="0" />
            </div>
            <div class="row"> <!--This shows how to write to a input field.-->
                Perimeter:  <span id="perimeter">0</span>
            </div>
            <div class="row"> <!--This shows how to write to a span or div, etc.-->
                Area:  <span id="area">0</span>
            </div>
            
           
             <h1>Rectangular Prism Calculator</h1>
            <div class="row">
                Length:  <input id="lenght" value="0" />
            </div>
             <div class="row">
                 Width :  <input id="width" value="0" />
            </div>
             <div class="row">
                 Height:  <input id="height" value="0" />
            </div>
            <div class="row"> <!--This shows how to write to a input field.-->
                Surface Area:  <span id="surfacearea">0</span>
            </div>
            <div class="row"> <!--This shows how to write to a span or div, etc.-->
                Volume:  <span id="area2">0</span>
            </div>
            <button onclick="location.reload()">Reset</button>
            <div id="message"></div>
        </div>
    </body>
</html>
