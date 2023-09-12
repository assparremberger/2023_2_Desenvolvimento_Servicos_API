<?php
    $nunmero = $_GET["numero"];
    $resposta = "";
    for ($i=1; $i <= $nunmero; $i++) {
        $resposta .= $i . "<br>";
    }
    echo $resposta;
?>
