let idade= parseInt(prompt("Qual sua idade?"))

        if (idade<18){
            document.getElementById("idade").innerHTML="Você não pode entrar"
            alert("Você não pode entrar")
            console.log("Você não pode entrar")
        }

        else{
            document.getElementById("idade").innerHTML="Você pode entrar"
            alert("Você pode entrar")
            console.log("Você pode entrar")
        }