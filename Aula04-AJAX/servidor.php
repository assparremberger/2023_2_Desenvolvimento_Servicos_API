<?php

    $numero = $_GET["numero"];

    $resposta = "";
    for( $i = 1 ; $i <= $numero; $i++){
        $resposta .= $i."<br>";
    }

    echo $resposta;

?>