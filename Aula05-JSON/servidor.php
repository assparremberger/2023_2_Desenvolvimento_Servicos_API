<?php
    header("Content-type: application/json");
    try {
        $conn = mysqli_connect("localhost", "root", "", "loja_2023_2");
        if( $conn ){
            $result = mysqli_query($conn, "SELECT * FROM produtos");
            $linhas = array();
            while( $row = mysqli_fetch_assoc($result) ){
                $linhas[] = $row;
            }
            mysqli_close($conn);
            echo '{ "produtos" : '. json_encode($linhas) .' }';
        }else{
            echo '{ "resposta" : "Erro ao conectar com o banco de dados" }';
        }
    } catch (\Throwable $th) {
        echo '{ "resposta" : "Erro ao conectar com o banco de dados" }';
    }

?>