<?php

    header("Content-type: application/xml; charset='UTF-8' ");

    $xml = '<?xml version="1.0" encoding="UTF-8" ?> ';

    try {
        $conn = mysqli_connect("localhost", "root", "", "loja_2023_2");
        if( $conn ){
            $result = mysqli_query($conn, "SELECT * FROM produtos");

            $xml .= "<lista_produtos>";

            while( $prod = mysqli_fetch_array($result) ){
                $xml .= "<produto>";
                $xml .= "    <id>".$prod["id"]."</id>";
                $xml .= "    <nome>".$prod["nome"]."</nome>";
                $xml .= "    <preco>".$prod["preco"]."</preco>";
                $xml .= "</produto>";
            }
            $xml .= "</lista_produtos>";

            mysqli_close($conn);
            echo $xml;
        }else{
            $xml .= "<erro>Erro ao conectar no banco de dados!</erro>";
            echo $xml;
        }
    } catch (\Throwable $th) {
        $xml .= "<erro>Erro ao executar a requisição!</erro>";
        echo $xml;
    }

?>