//lê uma string e indica o seu numero de caracteres
function buttonA(){
    let palavra = "inês"
    let comp = palavra.length;
    console.log(comp)
}


//lê duas strings com o nome de uma pessoa e devolve no formato: apelido - nome
function buttonB(){
    let nome = prompt("Escreva o seu primeiro nome: ")
    let apelido = prompt("Escreva o seu apelido: ")
    console.log(apelido + " " + nome)
}


//lê uma string e indica quantas vogais tem
function buttonC(){
    let palavra = prompt("Escreva uma palavra: ")
    let cont = 0
    let comp = palavra.length
    for(let i=0; i<comp; i++){
        if(palavra.charAt(i) == "a"){
            cont = cont + 1
        }
        else if(palavra.charAt(i) == "e"){
            cont = cont + 1
        }
        else if(palavra.charAt(i) == "i"){
            cont = cont + 1
        }
        else if(palavra.charAt(i) == "o"){
            cont = cont + 1
        }
        else if(palavra.charAt(i) == "u"){
            cont = cont + 1
        }
    }
    console.log("Existe " + cont + " vogais na palavra.")
}


//lê uma string e indica quantas palavras tem
function buttonD(){
    let palavra = prompt("Escreva uma frase: ").trim()
    let cont = 1
    let comp = palavra.length
    for(let i=0; i<comp; i++){
        if(palavra.charAt(i) == " "){
            cont = cont + 1
        }
    }
    console.log("Existe " + cont + " palavras na frase indicada.")
}

/*
exemplo:
function buttonD(){
    let palavra = prompt("Escreva uma palavra: ").trim()
    let resp = palavra.split(" ")
    let comp = resp.length
    console.log("Existe " + comp + " palavras na frase indicada.")
}*/


//lê uma string e retorna a mesma string invertida
function buttonE(){
    let palavra = prompt("Escreva uma palavra: ")
    let comp = palavra.length
    let txt = ""
    for(let i = comp-1; i>=0; i--){
        txt = txt + palavra.charAt(i)
    }
    console.log(txt)
}


//remove de uma string um caracter
function buttonF(){
    let palavra = prompt("Escreva uma palavra: ")
    let caract = prompt("Escreva um caracter: ")
    let comp = palavra.length
    let pos
    for(let i=0; i<comp; i++){
        if(palavra.charAt(i) == caract){
            pos = palavra.replace(caract, "")
        }
    }
    console.log(pos)
}


function buttonG(){
    let segundos = prompt("Escreva um número em segundos: ")
  /*  let min = segundos % 60
    let minutos = min / 60
    let seg = segundos % 60
    let hora = min / 60

    console.log(hora + "h" + minutos + "min" + seg + "s")*/
    let toHHMMSS = (secs) => {
        let sec_num = parseInt(secs, 10)    
        let hours   = Math.floor(sec_num / 3600) % 24
        let minutes = Math.floor(sec_num / 60) % 60
        let seconds = sec_num % 60    
        return [hours,minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":")
    }
    console.log(toHHMMSS(segundos))
}


function buttonH(){
    let abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let pos = prompt("Escreva um número: ")
    
}