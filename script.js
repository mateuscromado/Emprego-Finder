
var nome = document.getElementById("")
var nome = document.getElementById("")
var nome = document.getElementById("")


function avancarPagina(){
    window.location.href = "index.html";

}

function nomeEnviar(){
nome = document.getElementById("nomeInput").value
sobrenome = document.getElementById("sobrenomeInput").value

if(nome == "" || sobrenome == ""){
    alert("Preencha os campos")

}else{
    avancarPagina()
}

}

