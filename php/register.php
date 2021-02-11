<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$nombre = trim($request->nombre);
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$apellidos = mysqli_real_escape_string($mysqli, trim($request->apellidos));
$num_nomina = mysqli_real_escape_string($mysqli, trim($request->num_nomina));
$tipo = mysqli_real_escape_string($mysqli, trim($request->tipo));
$sql = "INSERT INTO users(nombre,apellidos,password,email,num_nomina,tipo) VALUES ('$nombre','$apellidos','$password','$email','$num_nomina','$tipo')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'nombre' => $nombre,
'apellidos'=> $apellidos,
'password' => $password,
'email' => $email,
'num_nomina'=> $num_nomina,
'tipo'=> $tipo,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>