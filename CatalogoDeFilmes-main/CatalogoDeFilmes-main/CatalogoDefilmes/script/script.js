const filmes = [
    {
        titulo: "Iron Man",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/mqN7RxojEiPoh3FTSTwOtwg7KAu.jpg",
        descricao: "Homem de ferro"
    },
    {
        titulo: "Batman",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
        descricao: "O Cavaleiro das Trevas"
    },
    {
        titulo: "Pantera Negra",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ubXNpxL2ASSzY0f8Hxv08pOsV2L.jpg",
        descricao: "Black Panther"
    },
    {
        titulo: "Velozes e Furiosos",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/cmhFOjy47UqrOafl0oQiygcJ7oT.jpg",
        descricao: "Turbo-Charged Prelude"
    },
    {
        titulo: "Velozes e Furiosos",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1kzW2GImY1YVmLRx3NLhXFBfLLO.jpg",
        descricao: "Desafio em Tóquio"
    },
    {
        titulo: "Tá dando Onda",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/edR3BjwAwUGHtOQMXJTWRfMYBvt.jpg",
        descricao: "Estréia de João Carlos"
    },
    {
        titulo: "Deadpool",
        Imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/tekExNqal2kcHp8BKiHX5jjxK9J.jpg",
        descricao:"O anti herói"
    }
]
const listaFilmes = document.getElementById
("listaFilmes");
function mostrarFilmes(lista){
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${filme.titulo}</h3>
                         <p>${filme.descricao}</p>
                         <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
                    </div>
                </div>
            </div> 
        `
    });
}

mostrarFilmes(filmes)

function verDetalhes(titulo){
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme"
        icon: "info"
    })
}