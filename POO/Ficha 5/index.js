class Pais {
    constructor(nome, area, populacao) {
        this.nome = nome
        this.area = area
        this.populacao = populacao
    }

    //Propriedade NOME
    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }

    //Propriedade AREA
    get nome() {
        return this._area
    }

    set nome(novaArea) {
        this._area = novaArea
    }

    static getNomePaisMaiorArea() {
        let maior = 0
        let nome = ""
        for(let i=0; i<paises.length; i++) {
            if(paises[i].area > maior) {
                maior = paises[i].area
                nome = paises[i].nome
            }
        }
        return nome
    }
}

let paises = []

let meuPais1 = new Pais("Portugal", 11000000, 2032839823)
let meuPais2 = new Pais("Espanha", 30000000, 2032839823)
let meuPais3 = new Pais("Inglaterra", 55000000, 2032839823)
let meuPais4 = new Pais("Brasil", 120000000, 2032839823)
let meuPais5 = new Pais("Noruéga", 20000000, 2032839823)
let meuPais6 = new Pais("Itália", 11000000, 2032839823)

paises.push(meuPais1, meuPais2, meuPais3, meuPais4, meuPais5, meuPais6)

console.log(Pais.getNomePaisMaiorArea())