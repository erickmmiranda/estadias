<?php
require 'connect.php';
error_reporting(E_ERROR);
$users = [];
$sql = "SELECT * FROM  users WHERE tipo = 'verificador'";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['id']    = $row['id'];
    $users[$cr]['nombre'] = $row['nombre'];
    $users[$cr]['apellidos'] = $row['apellidos'];
    $users[$cr]['password'] = $row['password'];
    $users[$cr]['email'] = $row['email'];
    $users[$cr]['num_nomina'] = $row['num_nomina'];
    $users[$cr]['tipo'] = $row['tipo'];
    $cr++;
  }
    
    //print_r($users);

  echo json_encode($users);
}
else
{
  http_response_code(404);
}
?>