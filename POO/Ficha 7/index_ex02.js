window.onload = function() {
    init()    

    let email = document.getElementById("email")
    let palavraPasse = document.getElementById("palavraPasse")
    let confPasse = document.getElementById("confPasse")
    let nome = document.getElementById("nome")
    let codigoPostal = document.getElementById("codigoPostal")
    let numTel = document.getElementById("numTel")
    let data = document.getElementById("data")
    let local = document.getElementById("local")
    let genero = document.getElementById("genero")
    let user = document.getElementById("user")
    let camisola = document.getElementById("camisola")
    let myURL = document.getElementById("myURL")
    let numSapatilha = document.getElementById("numSapatilha")
    let desportos = document.getElementById("desportos")
    let obcervacoes = document.getElementById("obcervacoes")
    let submeter = document.getElementById("submeter")
    let limpar = document.getElementById("limpar")

    let frmFormulario = document.getElementById("frmFormulario")

    frmFormulario.addEventListener("submit", function(event){

        let valido = true
        let msg = ""

        if(palavraPasse.value != confPasse.value){
            valido = false
            msg = "ERRO - As palavra-passes não são iguais"
        }

        if(valido){
            alert("REGISTO EFETUADO COM SUCESSO")
        }
        else{
            alert(msg)
            event.preventDefault()
        }
            


    })

    frmFormulario.addEventListener("reset", function(){

        nome.focus()

    })

}

function init(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //janeiro é 0
    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("data").setAttribute("max", today);
    
}
