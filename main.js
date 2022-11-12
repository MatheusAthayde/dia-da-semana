var agora = new Date()
var dia = agora.getDay()

var p = document.getElementById("p")

switch (dia) {
    case 0:
        p.innerText = "Hoje é domingo"
        break;

    case 1:
        p.innerText = "Hoje é segunda"
        break;

    case 2:
        p.innerText = "Hoje é terça"
        break;

    case 3:
        p.innerText = "Hoje é quarta"
        break;

    case 4:
        p.innerText = "Hoje é quinta"
        break;

    case 5:
        p.innerText = "Hoje é sexta"
        break;

    default:
        p.innerText = "Hoje é sábado"
        break;
}