<?php
   include "servicoMensagemSessao.php";
?>

<!DOCTYPE html>
<html>
    <head>
            <meta charset="UTF-8">
            <title>GORGUN FICHA</title>
            <meta name="author" content="">
            <meta name="description" content="">
            <meta name="viewport" content="width-device-widht, initial-scale=1"> 
            <link rel="stylesheet" href="../style.css" type="text/css">
    </head>

    <body>
        <section>
            <article>
                <header class="cabecalho"><!--cabeçalho com titulo-->
                    <h1><b>As Crônicas de Gorgon</b> <br><i>entre dois mundos</i><br>Oficial Website</h1>
                        <p>Conto by Ulysses Cezario </br> Site by Tamer Serhan</p><br><br>
                    <div class="titulo"><h2>CADASTRO DE NOVOS PLAYERS</h2></div>   
                </header><br/>
            
                <nav class="container"><!--navegador entre os links-->
                    <ul class="projetos"><h3>Links e referencias para seu jogo:</h3>
                        <li> <a href = "../index.html">HOME</a></li>
                        <li> <a href = "jogadores.php">JOGADORES</a></li>  
                    </ul>
                </nav><br/>
            </article>

            <article class="section"> 
                <form action="script.php" method="POST">

                    <?php
                        $mensagemDeErro = obterMensagemErro();
                        if (!empty($mensagemDeErro))
                        {echo $mensagemDeErro;}

                        $mensagemDeSucesso = obterMensagemSucesso();
                        if (!empty($mensagemDeSucesso))
                        {echo $mensagemDeSucesso;}
                    ?>
                    <div class="wrapper">
                        <div class="group">    
                            <p>Nome:      <input type="text" name="nome"       required=”required” placeholder= Nome-do-player/> </p>
                            <p>Idade:     <input type="text" name="idade"      required=”required” placeholder= Idade-do-personagem/> </p>
                            <p>Personagem:<input type="text" name="personagem" required=”required” placeholder= Nome-do-personagem/></p>
                            <h4>Seu sexo é:</h4>
                            <input type= "radio" name="sexo" value="Feminino"/>Feminino
                            <input type= "radio" name="sexo" value="Masculino"/>Masculino
                        </div>

                        <div class="group"><h3>Qual Guilda voce ira participar??</h3> 
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


                        <div class="group"><h3>Escolha agora uma classe para ele:</h3>
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

                        <div class="group"><h3><b>Seu Personagem Sera da Raça:</b></h3><br/> 
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
                    </div>

                    <div class="titulo"><h3>Aperte aqui para concluir seu cadastro:</h3><input type="submit" value="CONLCUIDO!"/></div>

                </form>
            </article>
        </section>
    </body>
</html>
