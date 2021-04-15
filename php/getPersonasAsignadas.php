<?php
require 'connect.php';

$id = $_GET['id'];

error_reporting(E_ERROR);
$documents = [];
$sql = "SELECT u.nombre, u.apellidos, a.comentario, a.visto from users as u, asignados as a WHERE a.id_documento = $id and a.id_usuario = u.id";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $documents[$cr]['nombre'] = $row['nombre'];
    $documents[$cr]['apellidos'] = $row['apellidos'];
    $documents[$cr]['comentario'] = $row['comentario'];
    $documents[$cr]['visto'] = $row['visto'];
    $cr++;
  }

  echo json_encode($documents);
}
else
{
  http_response_code(404);
}
?>