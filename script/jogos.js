const jogos = [
    {
        titulo: "Jurassic World Evolution - Ps4",
        imagem: "https://cdn.awsli.com.br/600x1000/53/53761/produto/29858445/eaf286a296.jpg",
        descricao: "Use bioengenharia para criar mais de 40 espécies de dinossauros que pensam e reagem, gerencie instalações, e enfrente desafios de segurança, espionagem corporativa e desastres naturais.",
    },
    {
        titulo: "Pragmata - PS5",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg",
        descricao: "A humanidade descobriu na Lua um minério chamado Lunan, que deu origem ao material 'Luna Filament', capaz de replicar qualquer objeto. Quando as comunicações com a estação lunar são cortadas, uma equipe é enviada, mas um terremoto lunar separa o astronauta Hugh William de seus companheiros. Ferido, ele é salvo por Diana, uma androide única criada com essa tecnologia. Juntos, eles devem enfrentar robôs hostis controlados pela IA Idos para escapar.",
    },
    {
        titulo: "Split Fiction - PS5",
        imagem: "https://cdn.awsli.com.br/600x450/2835/2835417/produto/354716028/spplit-595wuxxfxo.png",
        descricao: "A trama acompanha Mio e Zoe, duas escritoras de gêneros totalmente opostos (ficção científica e fantasia, respectivamente). Após serem conectadas a uma máquina projetada para roubar ideias criativas, elas ficam presas dentro de suas próprias imaginações. Ambas devem superar a desavença inicial e colaborar para escapar, utilizando habilidades complementares para sobreviver a cenários que vão desde dragões e trolls até ninjas cibernéticos.",
    },
    {
        titulo: "Deathloop - PS5",
        imagem: "https://m.media-amazon.com/images/I/71p+JoV6rCL._AC_UF1000,1000_QL80_.jpg",
        descricao: " jogo de tiro em primeira pessoa onde você assume o papel de Colt, um assassino preso em um ciclo temporal na ilha de Blackreef Ciclo da morte.",
    },
    {
        titulo: "Lego Ninjago O Filme: Video Game - Xbox One",
        imagem: "https://m.media-amazon.com/images/I/81o-hUhRCqL.jpg",
        descricao: "jogo de ação e aventura onde você defende a ilha de Ninjago do maligno Lorde Garmadon e seu Exército de Tubarões.",
    },
    {
        titulo: "LEGO The Incredibles - Xbox One",
        imagem: "https://m.media-amazon.com/images/I/81Lw7juE+UL.jpg",
        descricao: "LEGO novamente surpreende os fãs da franquia de sucesso da Warner Bros, desta vez reunindo o mundo divertido de LEGO com o mundo magico da Disney Pixar. Em LEGO DisneyPixar Os Incríveis você terá que ajudar a nossa família favorita de super-heróis. Ajude a família Pera a derrotar todos os inimigos e salvar a cidade de Metroville dos terríveis vilões que aparecerão por lá. A família é formada por Beto e Helena Pera, que se casaram e tiveram três filhos que também possuem superpoderes, Violeta, Flecha e o bebê Zezé. Cada um deles possui um poder único, Beto possui super força, Helena possui elasticidade, Flecha possui super velocidade, Violeta pode ficar invisível e criar um campo de força para protegê-los e o Zezé é um “curinga” ele possui diversos poderes, como: metamorfose, levitação, autocombustão, etc. O game suporta até 2 jogadores. Totalmente em Português.",
    }
]

const ListaJogos = document.getElementById("ListaJogos");
function mostrarjogos(lista) {
    Listajogos.innerHTML = ""
    lista.forEach(jogo => {
        ListaJogos.innerHTML += `
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

mostrarjogos(jogos)

function verDetalhes(titulo, descricao){
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}