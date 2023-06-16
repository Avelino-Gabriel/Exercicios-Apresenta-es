
let cliente = prompt("INSIRA SEU TIPO DE CLIENTE \nPADRÃO:1 \nPREMIUM:2\nVIP:3")

if(0 < cliente && cliente< 4){

let valor = prompt("INSIRA O VALOR DA COMPRA")

switch(cliente){
    case "1":
    alert("O valor da compra é: "+(valor-(valor*0.1)) )
    break;

    case "2":
    alert("O valor da compra é: "+(valor-(valor*0.2)) )
    break;
    
    case "3":
    alert("O valor da compra é: "+(valor-(valor*0.3)) )
    break;
}
}

else{
alert("Código Inválido")
}