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

let grades = [
    {
        name: 'Rui',
        grade: 8
    },
    {
        name: 'Ana',
        grade: 12
    },
    {
        name: 'Carla',
        grade: 14
    }]

// Função para listar os nomes das propriedades do objeto
function funcA() {
    let str = ""
    for (let key in student) {
        str += key
    }
    show("A-> " + str)
}
