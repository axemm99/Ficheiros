


window.onload = function(event){
    let frmUtilizadores = document.getElementById("frmUtilizadores").value
    let inputUser = document.getElementById("inputUser").value
    let inputEmail = document.getElementById("inputEmail").value
    let inputPassword = document.getElementById("inputPassword").value
    let inputConfPassword = document.getElementById("inputConfPassword").value

    let msg = ""

    if(inputPassword != inputConfPassword){
        msg = "As passwords não coincidem"
    }

    if(msg != ""){
        alert(msg)
        event.preventDefault()
    }

}