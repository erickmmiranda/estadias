<?php
    include_once("database.php");
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        
        $email = mysqli_real_escape_string($mysqli, trim($request->email));
        $nombreArchivo =(string) mysqli_real_escape_string($mysqli, trim($request->archivo));
        $fecha = "";

        $sql = "INSERT INTO archivos(archivo,email) VALUES ('$nombreArchivo','$email')";
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
            'Id' => mysqli_insert_id($mysqli),
            'archivo' => $nombreArchivo,
            'fecha' => $fecha,
            'email' => $email
            ];
            echo json_encode($authdata);
        }
    }

?>