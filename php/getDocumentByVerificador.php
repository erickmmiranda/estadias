<?php
require 'connect.php';

$id = $_GET['id'];

error_reporting(E_ERROR);
$documents = [];
$sql = "SELECT a.id,a.archivo,asig.validacion from archivos as a, asignados as asig WHERE asig.id_usuario = $id AND a.id = asig.id_documento";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $documents[$cr]['id']    = $row['id'];
    $documents[$cr]['archivo'] = $row['archivo'];
    $documents[$cr]['validacion'] = $row['validacion'];
    $cr++;
  }

  echo json_encode($documents);
}
else
{
  http_response_code(404);
}
?>