<?php
require 'connect.php';

$id = $_GET['id'];

error_reporting(E_ERROR);
$sql = "SELECT a.id, a.archivo, a.fecha, a.email, sum(asig.validacion) as validacion, sum(asig.rechazado) as rechazado, count(asig.id_usuario) as usuarios FROM archivos as a, asignados as asig WHERE a.id = $id and a.id = asig.id_documento LIMIT 1";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  $row = mysqli_fetch_assoc($result);
    $documents[$cr]['id'] = $row['id'];
    $documents[$cr]['archivo'] = $row['archivo'];
    $documents[$cr]['fecha'] = $row['fecha'];
    $documents[$cr]['email'] = $row['email'];
    $documents[$cr]['validacion'] = $row['validacion'];
    $documents[$cr]['rechazado'] = $row['rechazado'];
    $documents[$cr]['usuarios'] = $row['usuarios'];

  echo json_encode($documents);
}
else
{
  http_response_code(404);
}
?>