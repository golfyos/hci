<?php
    include("dbconfig.php");
    session_start();
    
    
        if($_SERVER["REQUEST_METHOD"] == "POST") {
        // username and password sent from form 
        
        $myusername = mysqli_real_escape_string($con,$_POST['uname']);
        $mypassword = mysqli_real_escape_string($con,$_POST['psw']); 
        
        
        $sql = "SELECT username FROM authen WHERE username = '$myusername' and password = '$mypassword'";
        $result = mysqli_query($con,$sql);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        //$active = $row['u'];
        
        $count = mysqli_num_rows($result);
        
        // If result matched $myusername and $mypassword, table row must be 1 row

        if($count == 1) {
            
            $_SESSION['uname'] = $myusername;

            echo "1";

            //header("location: ../confirm.html");
            //echo "gg";
        }else {
            //$error = "Your Login Name or Password is invalid";
            echo "0";
            //echo '<script> window.history.back();document.getElementById("id01").style.display= "block"; </script>';
            
        }
     }
    
?>