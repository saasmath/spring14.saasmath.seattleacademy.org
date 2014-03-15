<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Isaac's Home Page</title>
        <link rel="stylesheet" type="text/css" href="common/Button.css">
    </head>
    
    <body>
        <button>Hello Button</button>
        <h1>Isaac's Webpage</h1>
        <?php 
            $Data = $_GET["Data"];
            $User = $_GET["User"];
            if($Data != "")
            {
                $Filepath = "users/" . $User . ".txt";
                $Handle = fopen($Filepath, 'a') or die("Failure to Write.");
                fwrite($Handle, $Data . "\r\n") or die("Failure to Write.");
            }
            else
            {
                echo "No Data";
            }
            
        ?>
    </body>
</html>