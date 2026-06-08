const jogos = [
    {
        titulo: "Jurassic World Evolution - Ps4",
        imagem: "https://cdn.awsli.com.br/600x1000/53/53761/produto/29858445/eaf286a296.jpg",
        descricao: ""
    {
        titulo: "Pragmata - PS5",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg",
        descricao: "",
    },
    {
        titulo: "Split Fiction - PS5",
        imagem: "https://cdn.awsli.com.br/600x450/2835/2835417/produto/354716028/spplit-595wuxxfxo.png",
        descricao: "",
    },
    {
        titulo: "Deathloop - PS5",
        imagem: "https://m.media-amazon.com/images/I/71p+JoV6rCL._AC_UF1000,1000_QL80_.jpg",
        descricao: "",
    {
        titulo: "Lego Ninjago O Filme: Video Game - Xbox One",
        imagem: "https://m.media-amazon.com/images/I/81o-hUhRCqL.jpg",
        descricao: "",
    },
    {
        titulo: "LEGO The Incredibles - Xbox One",
        imagem: "https://m.media-amazon.com/images/I/81Lw7juE+UL.jpg",
        descricao: "LEGO novamente surpreende os fãs da franquia de sucesso da Warner Bros, desta vez reunindo o mundo divertido de LEGO com o mundo magico da Disney Pixar. Em LEGO DisneyPixar Os Incríveis você terá que ajudar a nossa família favorita de super-heróis. Ajude a família Pera a derrotar todos os inimigos e salvar a cidade de Metroville dos terríveis vilões que aparecerão por lá. A família é formada por Beto e Helena Pera, que se casaram e tiveram três filhos que também possuem superpoderes, Violeta, Flecha e o bebê Zezé. Cada um deles possui um poder único, Beto possui super força, Helena possui elasticidade, Flecha possui super velocidade, Violeta pode ficar invisível e criar um campo de força para protegê-los e o Zezé é um “curinga” ele possui diversos poderes, como: metamorfose, levitação, autocombustão, etc. O game suporta até 2 jogadores. Totalmente em Português.",
    }
]

const ListaJogo = document.getElementById("Listajogoo");
function mostrarjogo(lista) {
    Listajogos.innerHTML = ""
    lista.forEach(jogo => {
        Listajogos.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${jogo.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${jogo.titulo}</h3>
                        <p>${jogo.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${jogo.titulo}, ${jogo.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    });
}

mostrarJogos(jogos)

function verDetalhes(titulo, descricao){
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}