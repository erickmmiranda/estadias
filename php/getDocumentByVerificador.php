<?php
require 'connect.php';

$id = $_GET['id'];

error_reporting(E_ERROR);
$documents = [];
$sql = "SELECT a.id,a.archivo,asig.validacion,asig.rechazado,asig.visto from archivos as a, asignados as asig WHERE asig.id_usuario = $id AND a.id = asig.id_documento";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $documents[$cr]['id']    = $row['id'];
    $documents[$cr]['archivo'] = $row['archivo'];
    $documents[$cr]['validacion'] = $row['validacion'];
    $documents[$cr]['rechazado'] = $row['rechazado'];
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