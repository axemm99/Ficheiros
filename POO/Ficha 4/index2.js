
/*
    Variável global que referencia uma função anónima reponsável por apresentar um determinado valor na TextArea
*/
let show = function (value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}


/*
    Variáveis globais com objetos
*/
let student = {
    name: "David Silva",
    course: "POO",
    grade: 12,
    toString: function () {
        return this.name + "#" + this.course + "#" + this.grade
    }
}


// Função para listar os nomes das propriedades do objeto
function funcA() {
    let str = ""
    for (let key in student) {
        str += key
    }
    show("A-> " + str)
}


function buttonB(){
    funcA()
    delete student.grade
    funcA()
}


function buttonC() {
    let cont = 0
    for (let key in student) {
        cont++
    }
    show("C-> " + cont)
}

//Classe para representar um carro
class Carro {
    constructor(marca, matricula, cor, deposito, tipo) {
        this.marca = marca
        this.matricula = matricula
        this.cor = cor
        this.deposito = deposito
        this.tipo = tipo
    }
    //propriedade matricula
    get matricula() {
        return this._matricula
    }
    set matricula(novaMatricula) {
        this._matricula = novaMatricula
    }
    //propriedade marca
    get marca() {
        return this._marca
    }
    set marca(novaMarca) {
        this._marca = novaMarca
    }
    //propriedade cor
    get cor() {
        return this._cor
    }
    set cor(novaCor) {
        if(cores.indexOf(novaCor) != 1) {
        this._cor = novaCor
        }
        else{
            console.log("Cor Inválida")
            this._cor = "sem cor"
        }
    }
    //propriedade deposito
    get deposito() {
        return this._deposito
    }
    set deposito(novoDeposito) {
        this._deposito = novoDeposito
    }
    //propriedade tipo
    get tipo() {
        return this._tipo
    }
    set tipo(novoTipo) {
        this._tipo = novoTipo
    }
    
    //consumo
    consumir(nKms) {
        let litrosConsumidos = nKms*5/100

        if(this.deposito >= litrosConsumidos){
            // vamos lá
            let msg = `O seu deposito é ${this.deposito}. Depois da viagem o seu deposito será ${this.deposito - litrosConsumidos}`
            
            console.log(msg)
        }
        else{
            //mete combustivel
            let msg = `Tens de abastecer ${litrosConsumidos - this.deposito} litros`
            console.log(msg)
        }
        this._deposito -= litrosConsumidos
    }

//sort
static comparar(a, b) {
    if(a.marca > b.marca){
        return 1
    }
    else if(a.marca < b.marca){
        return -1
    }
    else{
        return 0
    }
}
}

let cores = ["preto", "cinzento", "azul", "amarelo", "vermelho", "branco", "verde"]

let carros = []
let meuCarro1 = new Carro("Ford", "91-LO-78", "Cor-de-Rosa", 40, "Gasoleo")
let meuCarro2 = new Carro("Audi", "14-PL-99", "Azul", 90, "Gasolina")
let meuCarro3 = new Carro("Peugeot", "22-XZ-77", "Branco", 70, "Gás")
let meuCarro4 = new Carro("Seat", "66-IJ-82", "Preto", 20, "Gasoleo")
carros.push(meuCarro1, meuCarro2, meuCarro3, meuCarro4)
console.log(meuCarro1.cor)
meuCarro1.cor = "vermelho"
console.log(meuCarro1.cor)
meuCarro1.consumir(800)
let comp2 = carros.length
for(let i=0; i<comp2; i++){
    console.log(carros[i].marca)

}
//ordenar
carros.sort(carros.comparar)
for(let i=0; i<comp2; i++){
    console.log(carros[i].marca)

}


function buttonD(){
    //grades
    class Nota {
        constructor(grade, name){
            this.grade = grade
            this.name = name
        }

        //propriedades GRADE
        get grade(){
            return this._grade
        }
        set grade(novaGrade){
            this._grade = novaGrade
        }
        //propriedades NAME
        get name() {
            return this._name
        }
        set name(novoName){
            this._name = novoName
        }




    }

    let notas = []
    let minhaNota1 = new Nota(8, "Rui")
    let minhaNota2 = new Nota(18, "Ana")
    let minhaNota3 = new Nota(14, "Rita")
    let minhaNota4 = new Nota(5, "Margarida")
    notas.push(minhaNota1, minhaNota2, minhaNota3, minhaNota4)
    let userNome = prompt("Escreva o nome e a nota de um aluno: ")
    let userNota = prompt("Escreva o nome e a nota de um aluno: ")
    let notaUser = parseInt(userNota)
    let userStudent = new Nota(notaUser, userNome)
    notas.push(userStudent)
    let comp = notas.length
    for(let i=0; i<comp; i++) {
        console.log(notas[i])
    }

    let media = 0
    let soma = 0
    for(let i=0; i<comp; i++){
        soma += notas[i].grade
    }
    media = soma / comp

    console.log("A média é " + media)

    let positivas = []
    let nomePos = []
    for(let i=0; i<comp; i++){
        if(notas[i].grade >= 10) {
            positivas.push(notas[i].grade)
            nomePos.push(notas[i].name)
        }
    }
    console.log(nomePos)
}
