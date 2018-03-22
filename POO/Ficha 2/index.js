//obtem a média dos elementos de um array
function buttonA(){
    let nums = [10, 20, 3, 4, 5, 64, 7, 8, 90]
    let comp = nums.length;
    let soma = nums.reduce(function(a, b) {return a+b})
    let media = soma/comp
    console.log("A média é: " + media)
}

//encontra o menor número dentro de um array
function buttonB(){
    let nums = [10, 20, 3, 4, 5, 64, 7, 8, 90]
    let menor = nums.reduce((a, b) => Math.min(a, b))
    console.log("O menor número é: " + menor)
}

//elemina um numero de uma determinada posição do array
function buttonC(){
    let nums = [10, 20, 3, 4, 5, 64, 7, 8, 90]
    let comp = nums.length;
    let numPos = nums.findIndex((x) => x/2 == 32)
    let numN = nums.find((x) => x/2 == 32)
    if(numN == 64){
        nums.splice(numPos, 1)
        console.log(nums)
    }
}

//lê um array e envia os seus elementos concatenados !!(perguntar ao prof)!!
function buttonD(){
    let palavras = ["ana", "beatriz", "inês", "joana", "joão", "tiago"]
    let comp = palavras.length
    let txt = ""
    for(let i=0; i<comp; i++){
       txt = txt + palavras[i]
    }
    console.log(txt)
}

//ordena elementos de um array
function buttonE(){
    let palavras = ["inês", "beatriz", "joana", "ana", "tiago", "joão"]
    palavras.sort()
    console.log(palavras)
}

//ordena elementos de um array invertidamente
function buttonF(){
    let palavras = ["inês", "beatriz", "joana", "ana", "tiago", "joão"]
    palavras.sort()
    palavras.reverse()
    console.log(palavras)
}


//lê um array de strings e dá o com maior numero de caracteres
function buttonG(){
    let palavras = ["inês", "beatriz", "joana", "ana", "tiago", "joão"]
    let comp = palavras.length;
    let tamanho = 0
    let nome
    for(let i=0; i<comp; i++){
        if(tamanho < palavras[i].length){
            tamanho = palavras[i].length
            nome = palavras[i]
        }
        else{
          //  nome = i
        }
    }
    console.log("A maior palavra é " + nome)
}


//lê um array de strings e conta quantas vezes aparece uma determinada string
function buttonH(){
    let palavras = ["inês", "beatriz", "joana", "ana", "tiago", "joão", "ana"]
    let nome = "a"
    let res = contaStr(palavras, nome)
    console.log("A palavra " + nome + " aparece " + res + " vezes.")
}

function contaStr(palavras, nome) {
    let comp = palavras.length;    
    let resp = 0
    for(let i=0; i<comp; i++){
        if(nome == palavras[i]){
            resp = resp+1
        }
    } 
    return resp  
}

//lê uma palavra passe e a sua confirmação e verifica se são iguais
function buttonI(){
    let pass = prompt("Username:")
    let confPass = prompt("Password:")
    let arrayPass = [pass, confPass]
    if(pass == confPass){
        console.log(1)
    }
    else{
        console.log(0)
    }
    
}


//devolve a palavra na posição indicada pelo utilizador
function buttonJ(){
    let palavras = ["inês", "beatriz", "joana", "ana", "tiago", "joão", "ana"]
    let pos = prompt("Escreva um número:")
    let pos1 = parseInt(pos)
    console.log(palavras[pos1])
}


//devolve todos os numeros positivos até à posição (exclusiver) indicada pelo utilizador
function buttonK(){
    let nums = [1, 2, -7, 8, 1, 0, -3, -7, -1]
    let pos = prompt("Escreva um num: ")
    let pos1 = parseInt(pos)
    for(let i=0; i<pos1; i++){
        if(nums[i]>=0){
            console.log(nums[i])
        }
    }
}


//lê um array e devolve outro array com os numeros pares do primeiro array
function buttonL(){
    let nums = [1, 2, -7, 8, 1, 0, -3, -7, -1, 4]
    
    let res = pares(nums)
    console.log(res)
}

function pares(nums){
    let numPares = []
    let comp = nums.length
    for(let i=0; i<comp; i++){
        if(nums[i] % 2 == 0){
            numPares.push(nums[i])
        }
    }
    return numPares
}


//lê um array e devolve a soma de todos os seus elementos com 1
function buttonM(){
    let nums = [1, 2, -7, 8, 1, 0, -3, -7, -1, 4]
    let res = resposta(nums)
    console.log(res)
}

function resposta(nums){
    let soma = []
    let comp = nums.length
    for(let i=0; i<comp; i++){
        soma.push(nums[i] + 1)
    }
    return soma
}


function buttonN(){
    let nums1 = [1,0,2,3,4]; 
    let nums2 = [3,5,6,7,8,13];
    let res = resposta(nums1, nums2)
    console.log(res)
}

function resposta(nums1, nums2){
    let comp1 = nums1.length
    let comp2 = nums2.length
    let soma = []
    for(i=0; i<comp1; i++){
        for(i=0; i<comp2; i++){
            soma.push(nums1[i] + nums2[i])
        }
    }
    return soma
}