const frutas = {
    TOMATE: 'VERMELHO',
    BANANA: 'AMARELA',
    UVA: 'ROXA'
}

let option = prompt('Digite a fruta desejada').toUpperCase()

let selectedOption;

if (option === 'BANANA' || option === 'TOMATE' || option === 'UVA'){
    switch(option){
        case "BANANA":
            selectedOption = frutas.BANANA
            break
        case "TOMATE":
            selectedOption = frutas.TOMATE
            break
        case "UVA":
            selectedOption = frutas.UVA
            break
    }
    alert(`A cor da ${option} é ${selectedOption}`)
} else{
    alert('OPÇÃO INVÁLIDA! ')
}
