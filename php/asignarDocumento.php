<?php
    require 'connect.php';  

    $id = $_GET['id'];
    $sql = "UPDATE archivos SET asignado = '1' WHERE id = $id";
     
    if(mysqli_query($con, $sql)){
        echo json_encode(array(
            'status' => 'ok'
        ));
    }
    else{
        echo json_encode(array(
            'status' => 'error',
            'error' => 'No se pudo hacer la modificacion'
        ));
    }
           
          
?>