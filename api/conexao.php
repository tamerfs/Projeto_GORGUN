<?php
/*
$hostname = "localhost"; // endereço do meu host seja local ou web exemplo mysql.hostgator.com
$db = "gorgun_sql"; // nome do banco de dados criado/ tabela 
$user = "root"; // para localhost e wamp usamos root padrão e senha em branco
$password = "";

$mysqli = new mysqli($hostname, $user, $password, $db);

$frase = "📚";
*/
if ($mysqli -> connect_errno){
    echo "falha ao conectar: (configurado somente como localhost no mysql)" //. $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else
    echo $frase;

    
 
