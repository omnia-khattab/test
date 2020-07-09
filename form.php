<?php
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $name=filter_var($_POST['name'],FILTER_SANITIZE_STRING);
        $subject=filter_var($_POST['subject'],FILTER_SANITIZE_STRING);
        $email=filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
        $message=filter_var($_POST['message'],FILTER_SANITIZE_STRING);

        $formErrors=array();
        if(strlen($name)<4){
            $formErrors="name has to be more than <strong>3</strong> characters and doesn't have numbers";
        }
        if(strlen($subject)<4){
            $formErrors="Subject has to be more than <strong>3</strong> characters and doesn't have numbers";
        }
        if (!(filter_var($email, FILTER_VALIDATE_EMAIL))) {
            $formErrors="Email is not Valid";
        }

        $header =  'MIME-Version: 1.0' . "\r\n"; 
        $header .='MIME-Version: 1.0' . "\r\n". 'From: '.$email  . "\r\n";
        $header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $contactEmail='omniakhattab2296@gmail.com';
        if(empty($formErrors)){
            mail($contactEmail,$subject,$message,$header);
            echo '<script>alert("The Email is sent successfully")</script>'; 
            echo "<script> location.href='/index.html'; </script>";
            exit;
        }
    }


?>