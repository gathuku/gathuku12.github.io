   <?php
   //$emailfile=fopen("emailfile.txt", "W") or die "cannot open file!";
   //$email=$_POST["email"];
  // fwrite($emailfile,$email);

$myfile = fopen("emailfile.txt", "a+") or die("Unable to open file!");

$email=$_POST["email"];
$emailw="\n ".$email." ";
fwrite($myfile, $emailw);

header("location:http://localhost/mose/index.html");

   ?>