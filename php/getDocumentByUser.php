<?php
require 'connect.php';

$email = $_GET['email'];

error_reporting(E_ERROR);
$documents = [];
$sql = "SELECT * FROM  archivos WHERE email = '$email'";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $documents[$cr]['id']    = $row['id'];
    $documents[$cr]['archivo'] = $row['archivo'];
    $documents[$cr]['fecha'] = $row['fecha'];
    $documents[$cr]['email'] = $row['email'];
    $cr++;
  }
    
    //print_r($users);

  echo json_encode($documents);
}
else
{
  http_response_code(404);
}
?>