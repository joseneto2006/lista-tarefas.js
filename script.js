let tarefas = [];

let campo = document.getElementById("campo");
let adicionar = document.getElementById("adicionar");
let lista = document.getElementById("lista");

function atualizarTela(){
    lista.innerHTML = "";
    for(let i = 0; i < tarefas.length; i++){
        let li = document.createElement("li");
        li.textContent = tarefas[i];

        let botao = document.createElement("button");
        botao.textContent = "Remover";
        botao.type="button";

        li.appendChild(botao);
        lista.appendChild(li);
        botao.addEventListener("click", function(){
            tarefas = tarefas.filter((tarefa, indice) => indice != i);
            atualizarTela();
        });
    }
};

adicionar.addEventListener("click", function(){
    if(campo.value != ""){
        tarefas.push(campo.value);
        campo.value="";
        atualizarTela();
    }
});