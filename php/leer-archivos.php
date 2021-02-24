<?php

// CORS

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Content-Type: application/json; charset=UTF-8");

    $rutaBase = '../src/assets/docs';
    $ficheros = scandir($rutaBase);

    $resultados = [];

    foreach( $ficheros as $key => $valor){

        $infoArchivo = [];
        $infoArchivo['nombre'] = $valor;
        $infoArchivo['tipo'] = obtenerExtension( $rutaBase .'/'.$valor);
        $infoArchivo['size'] = covertirBytes(filesize( $rutaBase .'/'.$valor));
        $infoArchivo['ruta'] = $rutaBase;
        $infoArchivo['raiz'] = dirname($rutaBase, 1);

        if($valor != '.' && $valor!='..'){
            array_push($resultados, $infoArchivo);
        }
    }

    function obtenerExtension( $nombreArchivo ){

        $tipo = filetype($nombreArchivo);

        if($tipo == "file"){
            return substr($nombreArchivo , strripos( $nombreArchivo , '.') + 1);
        }
        else{
            return $tipo;
        }
    }

    function covertirBytes($bytes){
        $decimales = 0;
        $unidades = ["B", "KB", "MB", "GB"];
        $exp = floor(log($bytes, 1024)) | 0;

        return round($bytes /(pow(1024, $exp)), $decimales ).$unidades[$exp];
    }


    print_r( stripslashes(json_encode($resultados)));

?>