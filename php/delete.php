<?php

require 'connect.php';
$id=$_GET['id'];

$sql = "DELETE FROM `users` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
?>