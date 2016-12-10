<?php
    include("dbconfig.php");
    session_start();
        
        //if($_SERVER["REQUEST_METHOD"] == "POST") {
        // username and password sent from form 
        echo "asd";
        /*$myusername = mysqli_real_escape_string($con,$_POST['uname']);
        $mypassword = mysqli_real_escape_string($con,$_POST['psw']); */
        $dayy = mysqli_real_escape_string($con,$_POST['dayID']);
        
        
        $sql = "SELECT room,time FROM schedule WHERE 'date' = '$dayy' and status ='U'";
        $result = mysqli_query($con,$sql);
       // $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        //$active = $row['u'];
        
       // $count = mysqli_num_rows($result);
        
        // If result matched $myusername and $mypassword, table row must be 1 row

        
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $temprooom = $row['room'];
                $temptime = $row['time'];
                
                echo "<script> a
                    $(function() {
                        $('#$temproom-$temptime').removeClass('tableT');
                        $('#$temproom-$temptime').addClass('cantTick');
                    });
                </script>";
                //echo "<p>".$row['course']."</p>";
            }
        } else {
            echo "0";
        }
     //}
    
?>