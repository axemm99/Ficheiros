function sayHello(){
    console.log("OLÁ MUNDO!")
}

function olaNome(){
    let nome = "Ana"
    console.log("OLÁ"+ " " + nome)
}

//calcula a área de um retângulo
function area(){
    let lado = 5
    let altura = 6
    console.log(lado*altura)
}

//faz várias operações
function operacoes(){
    let num1 = 2
    let num2 = 9
    console.log(2+9)
    console.log(2-9)
    console.log(2*9)
}

//calcula o imc de uma pessoa
function buttonE(){
    let peso
    let altura
    peso = prompt("Indique o seu peso em kg: ")
    altura = prompt("Indique a sua altura em m: ")
    let imc = peso / (altura*altura)
    console.log(imc)
}

//faz um "eco"
function eco(){
    let palavra
    let num
    palavra = prompt("Escreva uma palavra: ")
    num = prompt("Escreva um número: ")
    for(let i =0; i<num; i++){
        console.log(palavra)
    }
}

function buttonG(){
    let num1
    let num2
    num1 = prompt("Escreva um número: ")
    num2 = prompt("Escreva outro número que seja maior que o anterior: ")
    for(let i = num1; i<num2; i++){
        console.log(i);
    }
}

function tabuada(){
    let num
    num = prompt("Escreva um número: ")
    for(let i=0; i<11; i++){
        console.log(num + "x" + i + "=" + parseInt(num)*i)
    }
}


function multiplos(){
    let num1
    let num2
    num1 = prompt("Escreva um número:")
    num2 = prompt("Escreva outro número maior que o anterior:")
    for(let i=num1; i<=num2; i++){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}


function primos(){
    let num
    let primo
    num = prompt("Escreva um número: ")
    if(parseInt(num) == 0){
      //  console.log("O número é primo!")
    }
    let cont = 0
    for(let i=2; i<=parseInt(num)-1; i++){
        let resto = num % i;
        if(resto == 0){
            cont++
        }
    }
    if(cont == 2 || parseInt(num) == 0){
        console.log("SIM")
    }
    else{
        console.log("NÃO")
    }
}


function fatorial(){
    let num
    num = prompt("Escreva um número: ")
    let fatNum = parseInt(num)
    for(let i=1; i<parseInt(num); i++){
        fatNum = fatNum*i;
    }
    console.log("O fatorial de " + num + " é " + fatNum)
}


function perfeito(){
    let num
    num = prompt("Escreva um número: ")
    let divisores
    let numPerf = [];
    let resultado = 1
    for(let i=2; i<parseInt(num); i++){
        divisores = parseInt(num)%i
        if(divisores == 0){
            numPerf.push(i)
            resultado = resultado+i
        }
    }

    if(resultado == parseInt(num)){
        console.log("SIM")
    }
    else{
        console.log("NÃO")
    }
}


function buttonM(){
    let ano
    ano = prompt("Escreva um ano: ")
    if(parseInt(ano) % 4 == 0){
        if(parseInt(ano) % 400 == 0 || parseInt(ano) % 100 != 0){
            console.log("SIM")
        }
        else{
            console.log("NÃO")
        }
    }
    else{
        console.log("NÃO")
    }
}


function capicua(){
    let num
    num = prompt("Escreva um número de 100 a 999: ")
    let firstPos = num.slice(0,1)
    let lastPos = num.substr(2)
    if(lastPos == firstPos){
        console.log("SIM")
    }
    else{
        console.log("NÃO")
    }
}


function adivinha(){
   let rnd = Math.floor((Math.random() * 100) + 1);
   let num
   let cont = 0;

   while(cont != 4){
    num = prompt("Escreva um número de 1-100: ")
    if(parseInt(num) == rnd){
        console.log("Parabéns adivinhou!")
    }
    else if(parseInt(num) > rnd){
        console.log("PARA BAIXO!")
    }
    else if(parseInt(num) < rnd){
        console.log("PARA CIMA!")
    }
    else if(cont == 4){
        console.log("Perdeu, fica para a próxima!")
    }
    cont++
   }
   
}