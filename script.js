




function nomeEnviar(){
nome = document.getElementById("nomeInput").value
sobrenome = document.getElementById("sobrenomeInput").value

if(nome == "" || sobrenome == ""){
    alert("Preencha os campos")

}else{
    localStorage.setItem("nome", nome);
    window.location.href = "cadastro2.html";
}

}


function emailEnviar(){
    email = document.getElementById("emailInput").value
    senha = document.getElementById("senhaInput").value

    if(email == "" || senha == ""){
        alert("Preencha os campos")
    }else{
        window.location.href = "cadastro3.html"
    }

}

function areaEnviar(){
    areaAtuacao = document.getElementById("areaAtuacao").value

    idade = document.getElementById("idade").value

    regiao = document.getElementById("regiao").value

   if(areaAtuacao == "" || idade == "" || regiao == ""){
    alert("Preencha os campos")
   }else{
   window.location.href = "index.html"
  

   }


}

