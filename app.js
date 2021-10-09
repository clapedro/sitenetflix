let filmes = ["images/a-chegada.jpg","images/escola.jpg","images/Yesterday.jpg"]

function CarregarFilmes(){

    //array --> variável com subdivisões (índices)
    
   

    let totalFilmes = filmes.length
    let divListaFilmes = document.querySelector(".lista-filmes")
    divListaFilmes.innerHTML = ""

    //laço de repetição
    for(let i = 0; i < totalFilmes ; i++){


        divListaFilmes.innerHTML += "<img src="+ filmes[i] + ">"
       





    }


}

function AdicionarFilme(){
    let nomeFilme = document.querySelector("#nome-do-filme").value;
    let caminhoCompleto = "images/" + nomeFilme

    filmes.push(caminhoCompleto)
    CarregarFilmes()
    
}