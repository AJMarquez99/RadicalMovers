<?php

  $subject = $name = $email = $message = "";

  /*if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ( isset($_POST['name'], $_POST['email'], $_POST['phone_number'], $_POST['message']) ) {
      $recipient = "alejandromarquez7711@gmail.com";
      $name = secure_input($_POST["name"]);
      $email = secure_input($_POST["email"]);
      $phone_number = secure_input($_POST["phone_number"]);
      $message = secure_input($_POST["message"]);
      $subject = "Estimate - " .$subject;

      $mailBody = "Name: $name \n Phone Number: $phone_number \n \n $message";

      mail($recipient, $subject, $mailBody, "From: $name <$email>");
    }
  }*/

  function secure_input($data) {
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
  }

  include ('components/_header.html');
  include ('components/_services.html');
  include ('components/_estimate.html');
  include ('components/_testimonials.html');
  include ('components/_map.html');
  include ('components/_footer.html');
?>
