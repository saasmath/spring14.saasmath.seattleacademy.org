<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Isaac's Home Page</title>
    </head>
    
    <body>
        <?php
            //scans the users directory for all files
            $Directory = "users";
            $FileArray = scandir($Directory);
            
            //gets the amount of files in that directory
            $FileArrayLength = count($FileArray);
            
            //for every file in the folder
            foreach ($FileArray as $i => $FileArrayLength) 
            {
                //check if the name is . or ..
                if($FileArray[$i] == "." || $FileArray[$i] == "..")
                {
                    //if it is remove it from the FileArray
                    unset($FileArray[$i]);
                }
                //if the name is a normal file
                else
                {
                    //initialize the file line data array
                    $FileDataArray = array();
                    
                    //store the Filepath variable
                    $Filepath = "users/" . $FileArray[$i];
                    
                    //open a file from the FileArray 
                    echo "--" .$Filepath ."--<br>";
                    $Handle = fopen($Filepath, "r");
                    
                    //for every line in that file
                    while (($Line = fgets($Handle)) !== false) 
                    {
                        //scan the line into the array FileDataArray
                        array_push($FileDataArray, $Line);
                        echo($Line ."<br>");
                    }
                }
            }
        ?>
    </body>
</html>

