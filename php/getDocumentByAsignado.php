<?php
require 'connect.php';

$email = $_GET['email'];

error_reporting(E_ERROR);
$documents = [];
$sql = "SELECT DISTINCT a.id, a.archivo,a.asignado, count(asi.id_documento) as asignados, sum(asi.validacion) as validados, sum(asi.rechazado) as rechazo from asignados as asi, archivos as a WHERE a.id = asi.id_documento AND a.email = '$email' GROUP by asi.id_documento";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $documents[$cr]['id']    = $row['id'];
    $documents[$cr]['archivo'] = $row['archivo'];
    $documents[$cr]['asignado'] = $row['asignado'];
    $documents[$cr]['asignados'] = $row['asignados'];
    $documents[$cr]['validados'] = $row['validados'];
    $documents[$cr]['rechazo'] = $row['rechazo'];
    $cr++;
  }
    
    //print_r($users);

  echo json_encode($documents);
}
else
{
  http_response_code(404);
}
?>