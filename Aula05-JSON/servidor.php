<?php
    //error_reporting(0);
    header("Content-type: application/json");


    if( isset( $_REQUEST["buscar"] ) ){

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

    }

    if( isset( $_REQUEST["inserir"] ) ){

        try {
            $conn = mysqli_connect("localhost", "root", "", "loja_2023_2");
            if( $conn ){
                $nomeProd = $_POST["nome"];
                $precoProd = $_POST["preco"];
                $sql = "INSERT INTO produtos (nome, preco) VALUES ( '$nomeProd' , $precoProd  );" ;
                mysqli_query($conn, $sql);
                $id = mysqli_insert_id($conn);
               
                mysqli_close($conn);
                echo '{ "id" : '.$id.' }';
            }else{
                echo '{ "resposta" : "Erro ao conectar com o banco de dados*" }';
            }
        } catch (\Throwable $th) {
            echo '{ "resposta" : "Erro ao conectar com o banco de dados_" }';
        }

    }

?>