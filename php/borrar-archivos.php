<?php

require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Content-Type: application/json; charset=UTF-8");




    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        
        $archivo=$_GET['archivo'];
        $email=$_GET['email'];
        $sql = "DELETE FROM archivos WHERE email ='$email' AND archivo = '$archivo' LIMIT 1";

        if( $_GET['ruta-archivo']){

            $borrar = unlink( $_GET['ruta-archivo'] );
            
            if($borrar && mysqli_query($con, $sql)){
                echo json_encode(array(
                    'status' => 'ok'
                ));
            }
            else{
                echo json_encode(array(
                    'status' => 'error',
                    'error' => 'No se pudo eliminar el archivo'
                ));
            }
        }
    }
    else{
        header('HTTP/1.1 405 Method Not Allowed');
        exit;
    }

?>