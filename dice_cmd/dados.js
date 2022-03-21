var sortes = [];

function rodaDado(sorteio,entrada) {
	var entradaDado = document.getElementById("entradaDado");
	var entrada = entradaDado.value;
    var sorteio = Math.floor(Math.random() * entrada + 1);
  //alert(sorteio + ', é seu resultado!');
  //var N = prompt("Quantos são os lados do dado?");
  //console.log ("escolhido",entrada); 

  switch(sorteio){
	case 1:
		document.getElementById("face").src = "dice_cmd/face1.png";
		break;
	case 2:
		document.getElementById("face").src = "dice_cmd/face2.png";
		break;
	case 3:
		document.getElementById("face").src = "dice_cmd/face3.png";
		break;
	case 4:
		document.getElementById("face").src = "dice_cmd/face4.png";
		break;
	case 5:
		document.getElementById("face").src = "dice_cmd/face5.png";
		break;
	case 6:
		document.getElementById("face").src = "dice_cmd/face6.png";
		break;
	case 7:
		document.getElementById("face").src = "dice_cmd/face7.png";
		break;
    case 8:
        document.getElementById("face").src = "dice_cmd/face8.png";
        break;    
    case 9:
        document.getElementById("face").src = "dice_cmd/face9.png";
        break;
    case 10:
        document.getElementById("face").src = "dice_cmd/face10.png";
        break; 
    case 11:
        document.getElementById("face").src = "dice_cmd/face11.png";
        break;
    case 12:
        document.getElementById("face").src = "dice_cmd/face12.png";
        break;
    default:
		document.getElementById("face").src = "dice_cmd/face100.png";
		break;
}
escreveDadoNaTela(sorteio,entrada);
sortes.push(sorteio);
console.log(sortes);
}

function escreveDadoNaTela(sorteio,entrada){
	var retornoDado = document.getElementById("retornoDado");
	retornoDado.innerHTML = "sua sorte foi de  "+ sorteio + "  de um D" + entrada;
	var guardaDado = document.getElementById("guardoDado");
	guardaDado.innerHTML = sortes;
}

function relogar(){
	var recarregarPagina = document.getElementById("btnRefresh");    
		location.reload();
}

// "<p> D" ++"</P>" 