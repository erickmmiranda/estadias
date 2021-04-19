<?php
    include_once("database.php");
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        
        $id_doc = mysqli_real_escape_string($mysqli, trim($request->id_doc));
        $id_usu = mysqli_real_escape_string($mysqli, trim($request->id_usu));
        $val = mysqli_real_escape_string($mysqli, trim($request->val));
        $comentario = mysqli_real_escape_string($mysqli, trim($request->comentario));

        $sql = "UPDATE asignados SET rechazado =$val, comentario = '$comentario'  WHERE id_documento = $id_doc AND id_usuario = $id_usu";
        $sql2 = "UPDATE asignados SET cancelar = 1 WHERE id_documento = $id_doc";
        
        if ($mysqli->query($sql) === TRUE) {
            $mysqli->query($sql2);
            echo json_encode(array(
                'status' => 'ok'
            ));
        }
        else{
            mysqli_query($con, $sql);
            echo json_encode(array(
                'status' => 'error',
                'error' => 'No se pudo hacer la modificacion'
            ));
        }
    }

?>