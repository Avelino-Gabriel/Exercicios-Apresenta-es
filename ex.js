class Pessoa {
    constructor (nome, idade){
        this.nome = nome,
        this.idade = idade
    }

    get nome(){
        return this._nome
    }

    get idade(){
        return this._idade
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    set idade(novaIdade){
        this._idade = novaIdade
    }
    

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const p = new Pessoa('Ana', '16')

p.apresentar()

class Aluno extends Pessoa {
    constructor(nome, idade, turma, matricula) {
        super(nome, idade),
        this.turma = turma,
        this.matricula = matricula
    }

    get matricula(){
        return this._matricula 
    }

    get turma(){
        return this._turma
    }

    set matricula(novaMatricula){
        this._matricula = novaMatricula
    }

    set turma(novaTurma){
        this._turma = novaTurma
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} e faço parte da turma ${this.turma}; minha matrícula é ${this.matricula}`)
    }
}

const p2 = new Aluno('Gabriel', '19', 'DEV N1', '23187221')
p2.apresentar()

p.nome = "Rafael"
console.log(p.nome)
p.idade = "10"
console.log(p.idade)
p.apresentar()