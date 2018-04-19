
//document.getElementById("p1").innerHTML = "Bem-vindo à minha página!"

function button(){
    let nome = document.getElementById("txtArea").value
    let element = document.getElementById("p1").innerHTML = `Bem-vindo ${nome}!`
    if(nome == ""){
        let element = document.getElementById("p1").innerHTML = `Bem-vindo à minha página!`
    }
}