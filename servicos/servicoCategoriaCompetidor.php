<?php

// logica que calculará as categorias e os competidores pela idade

function defineCategoriaCompetidor (string $nome, string $idade, string $personagem, string $raca, string $classe, string $guilda,string $sexo) : ?string
{

//$categorias = ['infantil', 'adolecente','adulto','idoso'];

    if(validaNome($nome) && validaIdade($idade)){

        removerMensagemErro();

    switch ($idade){
        case ($idade >= 6 && $idade <= 12) :
            setarMensagemSucesso("O Jogador ".$nome." com o personagem ".$personagem." de raça ".$raca." e de classe ".$classe." da guilda ".$guilda." do sexo ".$sexo." é criança");
            return null;  
        case ($idade >= 13 && $idade <= 18):
            setarMensagemSucesso("O Jogador ".$nome." com o personagem ".$personagem." de raça ".$raca." e de classe ".$classe." da guilda ".$guilda." do sexo ".$sexo." é criança");
            return null; 
        case ($idade >= 19 && $idade <= 65):
            setarMensagemSucesso('O Jogador '.$nome." com o personagem ".$personagem." de raça ".$raca." e de classe ".$classe." da guilda ".$guilda." do sexo ".$sexo." é criança");
            return null; 
        default: 
            setarMensagemSucesso('O Jogador '.$nome." com o personagem ".$personagem." de raça ".$raca." e de classe ".$classe.", da guilda ".$guilda." do sexo ".$sexo." é criança");
            return null; 
        }
    }
    else 
    {
        removerMensagemSucesso();   
        return obterMensagemErro();
    }
}
