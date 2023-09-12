CREATE DATABASE loja_2023_2;

USE loja_2023_2;

CREATE TABLE produtos (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    	nome VARCHAR(50) ,
   	preco DOUBLE ,
    	quantidade DOUBLE
);


INSERT INTO produtos (nome, preco, quantidade)
VALUES
("Coca-Cola", 7.99 , 100 ) ,
("Pepsi", 5.95 , 80 ) ,
("Chocolate", 4.99 , 50 );