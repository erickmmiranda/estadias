<?php
require 'connect.php';

$id = $_GET['id'];

error_reporting(E_ERROR);
$sql = "SELECT * FROM  archivos WHERE id = '$id' LIMIT 1";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  $row = mysqli_fetch_assoc($result);
    $documents[$cr]['id'] = $row['id'];
    $documents[$cr]['archivo'] = $row['archivo'];
    $documents[$cr]['fecha'] = $row['fecha'];
    $documents[$cr]['email'] = $row['email'];
    
    //print_r($users);

  echo json_encode($documents);
}
else
{
  http_response_code(404);
}
?>