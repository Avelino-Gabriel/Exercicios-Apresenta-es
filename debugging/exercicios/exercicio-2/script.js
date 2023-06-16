let dificuldade =prompt("INSIRA SUA DIFICULDADE \nFÁCIL:1 \nMÉDIO:2\nDÍFICIL:3")

        if(dificuldade>0 && dificuldade<4){

        let valor = prompt("INSIRA A SUA QUANTIDADE DE PONTOS")

        switch(dificuldade){
            case "1":
            alert("Seu total de pontos é: "+valor)
            break;

            case "2":
            alert("Seu total de pontos é: "+(valor*2))
            break;
            
            case "3":
            alert("Seu total de pontos é: "+(valor*3) )
            break;
        }
    }

    else{
        alert("Código Inválido")
    }