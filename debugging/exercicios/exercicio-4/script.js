let numrandom= Math.floor(Math.random()*100)+1;

let palpite;
let tentativas=0;

do{
    palpite=prompt("Digite um número entre 1 e 100")
   tentativas++;
   if(palpite == numrandom){
    alert("parabens vc acertou em "+ tentativas+ " tentativas");
   } 
   else if(palpite < numrandom){
    alert("num é maior")
   }
   else{
    alert("o num é menor")
   }
}while(palpite != numrandom)