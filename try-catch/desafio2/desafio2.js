function transacao (){
    let input1 = prompt('Digite o saldo da sua conta: ')
    let input2 = prompt('Digite o valor da transação: ')
    try {
        saldo = Number(input1)
        transferencia = Number(input2)
        if (isNaN(saldo) || isNaN (transferencia)){
            throw new Error('Digite números válidos')
        }

        saldoInsuficiente = saldo < transferencia

        if (saldoInsuficiente === true) {
            throw new Error ('Saldo insuficiente')
        } 
        saldo -= transferencia

        console.log(`Transferência concluída! Saldo atual: ${saldo}`)
        
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

transacao()