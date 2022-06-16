<?php


        
header('location:jogadores.html');

$nome = $_POST['nome'];
$personagem =$_POST['personagem'];

/*
function buscarDadosPersonagem( string $row_players, string $resultado) 
{
    echo ("função iniciada");

   while ($row_players = mysqli_fetch_assoc($resultado, $row_players)){
      echo "ID ". $row_players = ['id'] . "</br>";
      echo "Nome ". $row_players = ['name'] . "</br>";
      echo "Especie ". $row_players = ['especie'] . "</br>";
      echo "Classe ". $row_players = ['classe'] . "</br>";
     echo "Personagem ". $row_players = ['personagem'] . "</br>";
    };
};
*/