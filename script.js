




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
   window.location.href = "homepage.html"
  

   }


}


// Inicio dos códigos referentes ao endereço da página
function inicioP(){
window.location.href = "homepage.html"
}

function notificacaoP (){
    window.location.href = "notificacao.html"

}

function vagasP(){
    window.location.href = "região.html"

}

function enpresasP(){
    window.location.href = "empresas.html"

}

function menssagensP(){
    window.location.href = "menssagens.html"

}

// Fim do código referente as páginas


function limparInput(){
    document.getElementById("pes").textContent = ""
}