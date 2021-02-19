<?php
require 'connect.php';

// Get the posted data.

$postdata = file_get_contents("php://input");

//print_r($postdata);

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Sanitize.
  $id = mysqli_real_escape_string($con, trim($request->id));
  $nombre = mysqli_real_escape_string($con, trim($request->nombre));
  $apellidos = mysqli_real_escape_string($con, trim($request->apellidos));
  $password = mysqli_real_escape_string($con, trim($request->password));
  $email = mysqli_real_escape_string($con, $request->email);
  $num_nomina = mysqli_real_escape_string($con, $request->num_nomina);
  $tipo = mysqli_real_escape_string($con, $request->tipo);

  // Update.
   $sql = "UPDATE `users` SET 
   `nombre`='$nombre',
   `apellidos`='$apellidos',
   `password`='$password',
   `email`='$email',
   `num_nomina`='$num_nomina',
   `tipo`='$tipo'
    WHERE `id` = '$id' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    //http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
