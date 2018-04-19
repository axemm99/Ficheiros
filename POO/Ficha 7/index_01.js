window.onload = function() {
    let frmLogIn = document.getElementById("frmFormulario")
    let btnLogIn = document.getElementById("submeter")
    let btnReset = document.getElementById("limpar")

    let email = document.getElementById("email")
    let palavraPasse = document.getElementById("palavraPasse")

    frmLogIn.addEventListener("submit",function(event) {

        alert(palavraPasse.value + "#" + email.value)
        console.log("entrei")

        event.preventDefault()

    }) 

    frmLogIn.addEventListener("reset", function(){

        email.focus()

    })
}
