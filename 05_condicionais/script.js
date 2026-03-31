//Condicionais
//IF e ELSE
const numero = '10';

if(numero >= '5'){
    textContent = "O número é maior";
} else if (numero < '5'){
    textContent = "O número é menor";
} else {
    textContent = "Número é 10";
}


//SWITCH e CASE
const opcao = "2";

switch (opcao){
    case 1:
        textContent = "Comer";
    break;
    case 2:
        textContent = "Dormir";
    break;
    default:
        textContent = "Estudar";
}