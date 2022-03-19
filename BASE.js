var Personagem = new Object ();


Personagem.Dados_Age = 25;
Personagem.Dados_Name = "Aniak";
Personagem.Dados_Class = "Alsaif";
Personagem.Dados_Especie = "Dovah";
Personagem.Dados_Langage = ["Ingland","Dovah"];
Personagem.Dados_Player = "Tamer";
Personagem.Dados_XP = 2670;
Personagem.Dados_Level = 0;


if (Personagem.Dados_XP < 1000) {Personagem.Dados_Level = 1;}
else if (Personagem.Dados_XP < 3000) {Personagem.Dados_Level = 2;}
else if (Personagem.Dados_XP < 6000) {Personagem.Dados_Level = 3;}
else if (Personagem.Dados_XP < 10000) {Personagem.Dados_Level = 4;}
else if (Personagem.Dados_XP < 15000) {Personagem.Dados_Level = 5;}
else if (Personagem.Dados_XP < 21000) {Personagem.Dados_Level = 6;}
else if (Personagem.Dados_XP < 28000) {Personagem.Dados_Level = 7;}
else if (Personagem.Dados_XP < 36000) {Personagem.Dados_Level = 8;}
else if (Personagem.Dados_XP < 45000) {Personagem.Dados_Level = 9;}
else if (Personagem.Dados_XP < 55000) {Personagem.Dados_Level = 10;}
else if (Personagem.Dados_XP <66.000) {Personagem.Dados_Level = 11;}	
else if (Personagem.Dados_XP <78.000) {Personagem.Dados_Level = 12;}	
else if (Personagem.Dados_XP <91.000) {Personagem.Dados_Level = 13;}	
else if (Personagem.Dados_XP <105.000) {Personagem.Dados_Level = 14;}	
else if (Personagem.Dados_XP <120.000) {Personagem.Dados_Level = 15;}
else if (Personagem.Dados_XP <136.000) {Personagem.Dados_Level = 16;}	
else if (Personagem.Dados_XP <153.000) {Personagem.Dados_Level = 17;}	
else if (Personagem.Dados_XP <171.000) {Personagem.Dados_Level = 18;}	
else if (Personagem.Dados_XP <190.000) {Personagem.Dados_Level = 19;}
else if (Personagem.Dados_XP >= 190.000) {Personagem.Dados_Level = 20;}	
// poderia ter usado um SWITCH para fazer o comando e um break.

console.log ("XP: " + Personagem.Dados_XP, "LEVEL: " + Personagem.Dados_Level)

Personagem.Levelup = 0
// para o level up colocaria o nivel do XP e quanto de vida extra ele ganha//

Personagem.Atributo_Força = 3;
Personagem.Atributo_Resistencia = 2;
Personagem.Atributo_Agilidade = 0;
Personagem.Atributo_Persepcao = 0;
Personagem.Atributo_Presisao = 0;
Personagem.Atributo_Inteligencia = 0;
Personagem.Atributo_Sopro = 2;
Personagem.Atributo_Coragem = 3;
Personagem.Atributo_Carisma = 0;


Personagem.Talento_Historia = 0;
// aniak possui talento de historia.

Personagem.Aptidoes_Cartografia = 1;
Personagem.Aptidoes_Navegante = 1;
Personagem.Aptidoes_Domar = 1;
Personagem.Aptidoes_Nadar = 1;
Personagem.Aptidoes_Ferreiro_1 = 1;
Personagem.Aptidoes_Ciencia_sopro_1 = 1;

// adicionar todas as aptidoes e logica de bonus//

Personagem.Pericias_Ferreiro []
Personagem.Pericias_Two_Hand
Personagem.Pericias_Inducao
Personagem.Pericias_Alteracao
Personagem.Pericias_Espectrometropia
// adicionar todas as cartas e cada selo de carta sendo identificado por um numero.//

Personagem.Dano = (Personagem.v_arma + Personagem.Atributo_Força);
Personagem.Defesa = (Personagem.V_armadura + Personagem.Atributo_Resistencia);

console.log ("DANO: " + Personagem.Dano, "DEFESA: " + Personagem.Defesa)
// introduzir formula para calculo automatico//

Personagem.Modificadores_Ventura = 1;
Personagem.Modificadores_Vontade = 0;
Personagem.Modificadores_Estresse = 120;
Personagem.Modificadores_Medo = 0;
Personagem.Modificadores_Tendencia = 0;

Personagem.Modificadores_Dinheiro = 1625;
// necessario ainda editar o dinheiro para por 3 tipos, Kallogs, Tifac,  Cidars ...

Personagem.Modificadores_Status = 4;
// acrescentar modificador de preços e compras.

Personagem.Hitpoint = Personagem.Vitalidade + Personagem.Dados_Especie + Personagem.Levelup
// seria a vitalidade + o quanto a especie dele tem de HP de base + o personagem levelup//


