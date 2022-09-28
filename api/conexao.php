<?php

// mysqly

$hostname = "localhost"; // endereço do meu host seja local ou web exemplo mysql.hostgator.com
$db = "gorgun_sql"; // nome do banco de dados criado/ tabela 
$user = "root"; // para localhost e wamp usamos root padrão e senha em branco
$password = "";

$mysqli = new mysqli($hostname, $user, $password, $db);

$frase = "<footer>📚</footer>";

if ($mysqli -> connect_errno){
    echo "falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else
    echo $frase;

  
  // dados da page https://www.elephantsql.com/docs/php.html

  
// $host = "https://api.elephantsql.com/api/backup?db=my-db"; // endereço do meu host seja local ou web exemplo mysql.hostgator.com
// $db = "gorgun_sql"; // nome do banco de dados criado/ tabela  
// $user = "rhzobcea"; // para localhost e wamp usamos root padrão e senha em branco
// $pass= "qOEZR-lk9dPCuyNY4XIzpcb5vkApqlyx";

 
//  // Open a PostgreSQL connection

//  $con = pg_connect("host=$host dbname=$db user=$user password=$pass")
//       or die ("Could not connect to server\n");
   
//  $frase = "<footer>📚</footer>";

// $query = 'SELECT * FROM table';
// $results = pg_query($con, $query) or die('Query failed: ' . pg_last_error());

// $row = pg_fetch_row($results);
// echo $row[0] . "\n";
// // Closing connection
// pg_close($con);