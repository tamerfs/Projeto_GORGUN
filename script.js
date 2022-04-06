var Personagem = new Object ();


Personagem : 
{ dados:  {
    age = 25,
    name = "Aniak",
    classe = "Alsaif",
    especie = "Dovah",
    langage = ["ingland","dovah"],
    player = "Tamer",
    xp = 2670,
    level = 0,
    titulo= "al saif"};

levelUp = 0; // para o level up colocaria o nivel do XP e quanto de vida extra ele ganha//
dano;
defesa;
valorArmadura;
valorArma;
hitpoint;

atributo: {
    força = 3,
    resistencia = 2,
    agilidade = 0,
    persepcao = 0,
    presisao = 0,
    inteligencia = 0,
    sopro = 2,
    coragem = 3,
    carisma = 0}

talento: {
    historia = true}    // aniak possui talento de historia.

aptidoes:{    // adicionar todas as aptidoes e logica de bonus//
    cartografia = true,
    navegante = true,
    domar = true,
    nadar = true,
    ferreiro_1 = true,
    cienciaSopro_1 = true}

modificadores: {
    ventura = 1,
    vontade = 0,
    estresse = 120,
    medo = 0,
    tendencia = 0,
    dinheiro = [Kallogs= 1625, Tifac = 0,  Cidars= 167] ,
    status = 4}// acrescentar modificador de preços e compras.

}

personagem.modificadores.hitpoint = personagem.vitalidade + personagem.dados.especie + personagem.levelp

function calculaLevelPorXp (){

    var xpF = personagem.dados.xp;
    var levelF = personagem.dados.level;
//logica entre os pontos de XP e o level do personagem.
switch (xpF) {
    case xpF <1000 : levelF = 2; alert("LEVEL UP!!");
        break;
    case xpF < 3000 : levelF = 3; alert("LEVEL UP!!");
        break;
    case xpF < 6000 : levelF = 4; alert("LEVEL UP!!");
        break;
    case xpF < 10000 : levelF = 5; alert("LEVEL UP!!");
        break;
    case xpF < 15000 : levelF = 6; alert("LEVEL UP!!");
        break;
    case xpF < 21000 : levelF = 7; alert("LEVEL UP!!");
        break;
    case xpF < 28000 : levelF = 8; alert("LEVEL UP!!");
        break;
    case xpF < 36000 : levelF = 9; alert("LEVEL UP!!");
        break;
    case xpF < 45000 : levelF = 10; alert("LEVEL UP!!");
        break;
    case xpF < 66000 : levelF = 11; alert("LEVEL UP!!");
        break;
    case xpF < 70000 : levelF = 12; alert("LEVEL UP!!");
        break;
    case xpF < 91000 : levelF = 13; alert("LEVEL UP!!");
        break;
    case xpF < 105000 : levelF = 14; alert("LEVEL UP!!");
        break;
    case xpF < 120000 : levelF = 15; alert("LEVEL UP!!");
        break;
    case xpF < 136000 : levelF = 16; alert("LEVEL UP!!");
        break;
    case xpF < 153000 : levelF = 17; alert("LEVEL UP!!");
        break;
    case xpF < 171000 : levelF = 18; alert("LEVEL UP!!");
        break;
    case xpF < 190000 : levelF = 19; alert("LEVEL UP!!");
        break;
    case xpF > 190000 : levelF = 20; alert("LEVEL MASTER!!");
        break;
default: 1;
}}
   
console.log ("XP: " + personagem.dados.xp, "LEVEL: " + personagem.dados.level)
