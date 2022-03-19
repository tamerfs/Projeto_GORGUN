
var button = document.querySelector('button');

button.onclick = function() {
  var N = prompt("Quantos são os lados do dado?");
    console.log ("escolhido",N); 
    var sorteio = Math.floor(Math.random() * N + 1);
  alert(sorteio + ', é seu resultado!');


switch(sorteio){
	case 1:
		document.getElementById("face").src = "face1.png";
		break;
	case 2:
		document.getElementById("face").src = "face2.png";
		break;
	case 3:
		document.getElementById("face").src = "face3.png";
		break;
	case 4:
		document.getElementById("face").src = "face4.png";
		break;
	case 5:
		document.getElementById("face").src = "face5.png";
		break;
	case 6:
		document.getElementById("face").src = "face6.png";
		break;
	case 7:
		document.getElementById("face").src = "face7.png";
		break;
    case 8:
        document.getElementById("face").src = "face8.png";
        break;    
    case 9:
        document.getElementById("face").src = "face9.png";
        break;
    case 10:
        document.getElementById("face").src = "face10.png";
        break; 
    case 11:
        document.getElementById("face").src = "face11.png";
        break;
    case 12:
        document.getElementById("face").src = "face12.png";
        break;

    default:
		document.getElementById("face").src = "face100.png";
		break;
}
console.log ("sorteado",sorteio); 

}