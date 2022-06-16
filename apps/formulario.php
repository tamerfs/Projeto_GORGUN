<?php
   include "../servicos/servicoMensagemSessao.php";
?>

<!DOCTYPE html>
<html>
<head>
        <meta charset="UTF-8">
        <title>GORGUN FICHA</title>
        <meta name="author" content="">
        <meta name="description" content="">
        <meta name="viewport" content="width-device-widht, initial-scale=1"> 
        <link rel="stylesheet" href="style.css" type="text/css">
</head>

<body>

<header class="cabecalho"><!--cabeçalho com titulo-->
    <h1><b>As Crônicas de Gorgon</b> <br><i>entre dois mundos</i><br>Oficial Website</h1>
        <p>Conto by Ulysses Cezario </br> Site by Tamer Serhan</p><br><br>
    <div class="titulo"><h2>CADASTRO DE NOVOS PLAYERS</h2></div>   
</header>
<br/>
   
<nav class="container"><!--navegador entre os links-->
    <ul class="projetos"><h3>Links e referencias para seu jogo:</h3>
        <li> <a href = "../index.html">HOME</a></li>
        <li> <a href = "jogadores.php">JOGADORES</a></li>
        <li> <a href = "../src/docs/map.html">GORGUN MAPA</a></li>
        <li> <a href = "../apps/forja/forja.html">FORJA</a></li>
        <li> <a href = "../apps/dice/dados.html">LANCE A SORTE</a></li>
        <li> <a href = "../apps/gandah/ganda.html">GANDHA</a></li>
        <li> <a href = "../apps/loja/loja.html">LOJAS  </a></li>
        <li> <a href = "../apps/books/books.html">Contos de Gordun</a></li>
        <li> <a href = "../apps/books/books.html">Biblioteca de Alcamar</a></li>
        <li> <a href = "../apps/books/bestiario.html">Bestiario de Alcamar</a></li>   
    </ul>
</nav>
<br/>

<figure><p> Audio ambientação</p>
    <audio controls=”controls”>
        <source src= "../assets/skyrim/Skyrim Dovakin.mp3"/>Seu navegador não aceita a tag audio</audio>
</figure>


<form action="../servicos/script.php" method="POST">

<?php
    $mensagemDeErro = obterMensagemErro();
    if (!empty($mensagemDeErro))
    {echo $mensagemDeErro;}

    $mensagemDeSucesso = obterMensagemSucesso();
    if (!empty($mensagemDeSucesso))
    {echo $mensagemDeSucesso;}
?>
    <p>Nome:      <input type="text" name="nome"       required=”required” placeholder= Nome-do-player/> </p>
    <p>Idade:     <input type="text" name="idade"      required=”required” placeholder= Idade-do-personagem/> </p>
    <p>Personagem:<input type="text" name="personagem" required=”required” placeholder= Nome-do-personagem/></p>
    
    <div class="form"><h4>Seu sexo é:</h4>
        <input type= "radio" name="sexo" value="Feminino"/>Feminino
        <input type= "radio" name="sexo" value="Masculino"/>Masculino
    </div>

    <div class="box-check"><h3>Qual Guilda voce ira participar??</h3> 
        <input type="checkbox" name="guilda" value="Corolados" /> Corolados <br/>
        <input type="checkbox" name="guilda" value="A ordem de Isildur" />A ordem de Isildur<br/>
        <input type="checkbox" name="guilda" value="Ukitsu" /> Ukitsu<br/>
        <input type="checkbox" name="guilda" value="Thunderstrucks" /> Thunderstrucks<br/>
        <input type="checkbox" name="guilda" value="Colégio de Ludwik de Bardos" /> Colégio de Ludwik de Bardos<br/>
        <input type="checkbox" name="guilda" value="Monges Tsuki" /> Monges Tsuki<br/>
        <input type="checkbox" name="guilda" value="Divers" /> Divers<br/>
        <input type="checkbox" name="guilda" value="Colégio de Alqamar" /> Colégio de Alqamar<br/>
        <input type="checkbox" name="guilda" value="Guerreiras Inue" /> Guerreiras Inue<br/>
        <input type="checkbox" name="guilda" value="Guarda Albatroz" /> Guarda Albatroz<br/>             
    </div>


    <div class="box-check"><h3>Escolha agora uma classe para ele:</h3>
        <input list="classe" name="classe"/>
            <datalist class="box-check" id="classe">
                <option value="Paladinos">
                <option value="Samurai">
                <option value="Rangers">
                <option value="Shinobi">
                <option value="Monges">
                <option value="Spectro"> 
                <option value="Guardião de Sopro">  
                <option value=" Mimetico">
                <option value="Metamorfo">
                <option value="Tecelão">
                <option value="Bardo">       
            </datalist>
    </div>

    <div class="box-check"><h3><b>Seu Personagem Sera da Raça:</b></h3><br/> 
        <input list="raca" name="raca"/>
            <datalist class="box-check" id="raca">    
                <option value="DOVAH">
                <option value="MAYOS">
                <option value="YAVU">
                <option value="SHANG_REN"> 
                <option value="DAKAR">
                <option value="YAHROST">  
                <option value="SKOLL">
                <option value="Argoliano">
                <option value="Hethita"> 
                <option value="Nauts"> 
                <option value="Otawak"> 
                <option value="Nyraxi"> 
                <option value="Draconiano"> 
                <option value="Azralon"> 
                <option value="Alsha">
                <option value="Kodiak"> 
                <option value="Haida"> 
                <option value="Ban">
                <option value="Gongo"> 
                <option value="Yki">
                <option value="Bandar">
                <option value="Kinghaarriano"> 
            </datalist>
    </div>

    <div class="titulo"><h3>Aperte aqui para concluir seu cadastro:</h3><input type="submit" value="CONLCUIDO!"/></div>

<!--    inserido uma imagem-->
    <div class="titulo"><h3>Serão criados apos o seu cadastro CARDS como esse abaixo!</h3><img class="perfil" src="../src/img/personagens/card_Aniak.jpg" alt= "card"/></div><br/>

<!-- enviando/ upload de um arquivo-->
    <div class="form"><h3>Envie um arquivo para nós, uma foto do seu personagem!</h3><input name="arquivo" type="file"/><br/></div> 

    <div class="titulo"><h3>Enviar Foto</h3><Input name= "botao" type = "button" value="Enviar Foto" id = "enviar" onclick= /></div>

</form>
</body>
</html>
