
function refogar(){
    console.log("ola");
  }
  
   //alert(sorteio + ', é seu resultado!');
   //var N = prompt("Quantos são os lados do dado?");
   //console.log ("escolhido",entrada); 
  
  alert('-----------------------------BEM-VINDO A FORJA-----------------------------');
      var loop1 = 'S';
      
  while (loop1 =='S'){ // aplicador de repetição 
  
  alert('--------------------------------AQUENCENDO---------------------------------');
  //valores brutos de cada metal
  
  var NT = 15;
  var IO = 30;
  var NY = 30;
  var HZ = 50;
  var KL = 50;
  var PL = 60;
  var NG = 80;
  var SS = 100;
    
  // A FORJA SE DIVIDE EM DOIS TIPOS; COM SOPRO E SEM, MUDANDO AS FORMULAS
  var TypeSoproForge = prompt(' Você irá forjar equipamentos utilizando o Sopro ?[S/N] ');
    
  
    // CONDIÇÕES PARA SEMPRE SOPRO
  
    
    if (TypeSoproForge=='N'){
  alert ('Os tipos de metais são : Nauti [NT], Carvalho de ferro [IO], Nyngala [NY],  Hailon/Zarin [HZ] , Kolrain [KL] , Perola lunar [PL] , Ouro do Mar [NG], Pedra Estelar[SS] ');
console.log("Os tipos de metais são : Nauti [NT], Carvalho de ferro [IO], Nyngala [NY],  Hailon/Zarin [HZ] , Kolrain [KL] , Perola lunar [PL] , Ouro do Mar [NG], Pedra Estelar[SS]");


    var typeEq = prompt('Qual classe de itens você irá forjar ?[armaduras/ armas]');
    var weapon = prompt('Qual equipamento você deseja forjar :');
    var cont = 0;
    var SM = 0;
    var NM = prompt('Quantos metais você irá utilizar ? : ')//limite contador;
      
    
  while (cont < NM){
      var m1 = prompt(' Coloque na forja os metais que você ira usar: ');
        // quais valores irei somar
    
        
  switch (m1) {
    case NT: (m2=15);
        break;
      case IO: (m2=30);
        break;
    case NY: (m2=30);
        break;
    case HZ: (m2=50);
        break;
    case KL: (m2=55);
        break;
    case PL: (m2=65);
        break;
    case NG: (m2=80);
        break;
    case SS: (m2=100);
        break;
    default:  ( alert('Esse tipo de minéiro não é proprio para ser forjar.'));
}
    
  var SM = SM + m2
  cont ++
  }
     
  alert(' -------------------------- FUNDINDO METAIS---------------------------------')
      
      
  
  // Condições estabelecidas para variaveis dos minéiros
  
  
  
  var d20 = parseFloat(prompt('Digite o resultado do d20 rolado: '));
  var int = parseFloat(prompt('Digite o valor do seu atributo de inteligencia'));
  var str = parseFloat(prompt('Digite o valor do atributo de sua força'));
   
   if  (typeEq == 'armas' ) {  
    var TotM = SM/NM;
    var Bônusdano = (TotM+d20+int+str)/4;
      ItemName= prompt('Qual será o nome do item forjado ? : ');
      alert(  ItemName + '('+ weapon +') foi forjado(a)  possuíndo o bônus  de : ' + Math.round(Bônusdano)+' de dano');
  }
   else { 
      var TotM = SM/NM;
      var StatusIt = (TotM+d20+int+str)/20;
     ArmorName= prompt('Qual será o nome do item forjado ? : ');
      alert(ArmorName+'('+ weapon +') foi forjado(a)  possuíndo bônus de atributo de : ' + Math.round(StatusIt )+' pontos');
   }
  }     
  // CONDIÇÕES PARA CALCULO COM SOPRO
    
   
   else {
    
  alert ('Os tipos de metais são : Nauti [NT], Carvalho de ferro [IO], Nyngala [NY],  Hailon/Zarin [HZ] , Kolrain [KL] , Perola lunar [PL] , Ouro do Mar [NG], Pedra Estelar[SS] ');
   
    var typeEq = prompt('Qual classe de itens você irá forjar ?[armaduras/ armas]');
    var weapon = prompt('Qual equipamento você deseja forjar :');
    var cont = 0;
    var SM = 0;
    var NM = prompt('Quantos metais você irá utilizar ? : ');//limite contador
      
  while (cont < NM){
      var m1 = prompt(' Coloque na forja os metais que você ira usar: ');
        // quais valores irei somar
             
  if (m1 == "NT"){
    m2=15 ;
  }
   else if (m1 == "IO"){
      m2=30;
  }
  else if (m1 == "NY"){
      m2=30;
  }
  else if (m1 == "HZ"){
      m2=50;
  }
  else if (m1 == "KL"){
      m2=55;
  }
  else if (m1 == "PL"){
      m2=65;
  }
  else if (m1 == "NG"){
      m2=80;
  }
  else if (m1 == "SS"){
      m2=100;
  }
  else  {
    alert('Esse tipo de minéiro não é proprio para ser forjar. ') ;
  }
      var SM = SM + m2
      cont ++
  }
     alert(' -------------------------- FUNDINDO METAIS---------------------------------')
  
  
  var d20 = parseFloat(prompt('Digite o resultado do d20 rolado: '));
  var int = parseFloat(prompt('Digite o valor do seu atributo de inteligencia'));
  var str = parseFloat(prompt('Digite o valor do atributo de  força'));
  var brth = parseFloat(prompt('Digite o valor do atributo de sopro'));
      
   if  (typeEq == 'armas' ) {
    var TotM = SM/NM;
    var Bônusdano = (TotM+d20+int+str+brth)/4;
      ItemName= prompt('Qual será o nome do item forjado ? : ');
      alert(  ItemName + '('+ weapon +') foi forjado(a)  possuíndo o bônus  de : ' + Math.round(Bônusdano)+' de dano')
  }
  else { 
      var TotM = SM/NM;
      var StatusIt = (TotM+d20+int+str+brth)/20;
     ArmorName= prompt('Qual será o nome do item forjado ? : ');
      alert(ArmorName+'('+ weapon +') foi forjado(a)  possuíndo bônus de atributo de : ' + Math.round(StatusIt )+' pontos')
  }    
     
   }  
  var loop1 = prompt ('deseja continuar forjando ?[S/N]');
  
   }
   // FIM DO LAÇO DE REPETIÇÃO 
   alert('----------------------------DESAQUECENDO A FORJA---------------------------- ');
  
  
  
  
  function relogar(){
      var recarregarPagina = document.getElementById("btnRefresh");    
          location.reload()
      }
  