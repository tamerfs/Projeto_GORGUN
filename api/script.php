<?php

include "servicoMensagemSessao.php";
include "servicoCategoriaCompetidor.php"; 
include "servicoValidacao.php";

$nome  = $_POST['nome'];
$idade =$_POST['idade'];
$personagem =$_POST['personagem'];
$raca   =$_POST['raca'];
$classe =$_POST['classe'];
$guilda =$_POST['guilda'];
$sexo =$_POST['sexo'];


defineCategoriaCompetidor($nome, $idade, $personagem, $raca, $classe, $guilda, $sexo);

header('location:formulario.php');

<<<<<<< HEAD


=======
>>>>>>> 1bc03cd03f9d3eb6921af722390d793c375485fc
?>