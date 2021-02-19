<?php

require 'connect.php';

$id = $_GET['id']; 

  // Get by id.
$sql = "SELECT * FROM `users` WHERE `id` ='{$id}' LIMIT 1";

 if($result = mysqli_query($con,$sql))
{
   $cr = 0;

  $row = mysqli_fetch_assoc($result);
  
    $users['id']    = $row['id'];
    $users['nombre'] = $row['nombre'];
    $users['apellidos'] = $row['apellidos'];
    $users['password'] = $row['password'];
    $users['email'] = $row['email'];
    $users['num_nomina'] = $row['num_nomina'];
    $users['tipo'] = $row['tipo'];
   // $cr++;
  
    
   //print_r($users);

  echo json_encode($users);
}
else
{
  http_response_code(404);
}