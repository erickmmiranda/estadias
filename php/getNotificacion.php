<?php
require 'connect.php';

$id = $_GET['id'];

error_reporting(E_ERROR);

$sql = "SELECT count(id_usuario) as cantidad FROM asignados WHERE id_usuario = $id and comentario = '' AND cancelar = 0";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  $row = mysqli_fetch_assoc($result);
  $documents[$cr]['cantidad']    = $row['cantidad'];
     
  echo json_encode($documents);
}
else
{
  http_response_code(404);
}
?>