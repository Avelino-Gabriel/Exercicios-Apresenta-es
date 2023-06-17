function dividir (){

    let input = prompt('Digite um número' )

try {
    num = Number(input)

    if(isNaN(num)){
        throw new Error('Digite apenas números válidos.')
    }

    let result = num / 10

    console.log(`O resultado é ${result}`)
}catch (error){
    console.log(`Ocorreu um erro: ${error.message}`)
}
}


dividir()