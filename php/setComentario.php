<?php
    include_once("database.php");
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        
        $id_doc = mysqli_real_escape_string($mysqli, trim($request->id_doc));;
        $id_usu = mysqli_real_escape_string($mysqli, trim($request->id_usu));;
        $val = mysqli_real_escape_string($mysqli, trim($request->val));;

        $sql = "UPDATE asignados SET comentario =$val  WHERE id_documento = $id_doc AND id_usuario = $id_usu";
        if ($mysqli->query($sql) === TRUE) {
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