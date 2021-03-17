<?php
    require 'connect.php';  

    //if($_SERVER['REQUEST_METHOD'] === 'GET'){

       // if( $_GET['id_usuario'] && $_GET['id_doc']){

            $usuario = $_GET['id_usuario'];
            $id = $_GET['id_doc'];

            $sql = "INSERT INTO asignados(id_documento,id_usuario,validacion) VALUES ('$id','$usuario','0')";
            
            if(mysqli_query($con, $sql)){
                echo json_encode(array(
                    'status' => 'ok'
                ));
            }
            else{
                echo json_encode(array(
                    'status' => 'error',
                    'error' => 'No se pudo renombrar el archivo'
                ));
            }
        //}
    //}
    //else{
        //header('HTTP/1.1 405 Method Not Allowed');
       // exit;
    //}         
?>