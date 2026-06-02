const series = [
    {
        titulo: "The Chosen",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9Um6qPWSWHP8cl60fTtOU15uXqb.jpg",
        descricao: "Aprofundando-se nas histórias de fundo e no contexto das pessoas e eventos dos evangelhos, a Primeira Temporada do projeto de mídia de maior financiamento coletivo pelo público de todos os tempos apresenta pessoas como Simão Pedro, Nicodemos, Maria Madalena, Mateus e, claro, Jesus de uma forma nunca antes vista em filme.",
    },
    {
        titulo: "Os Simpsons",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg",
        descricao: "Uma animação sobre uma típica família dos Estados Unidos. Homer é o pai de família nada saudável ou inteligente, que adora beber cerveja. Marge é a esposa e mãe de família dedicada. Bart é o filho de 10 anos, que não leva a escola a sério e tem orgulho disso. Lisa é a garota de 8 anos, um gênio não apreciado. E Maggie é a bebê que não larga a chupeta",
    },
    {
        titulo: "O Show de Tom e Jerry",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/t0VTMU4UI8XlaryymvNKjnD1TXc.jpg",
        descricao: "Tom, um gato cinzento atrapalhado, está sempre perseguindo Jerry, um pequeno e esperto ratinho marrom. Juntos, os dois aprontam e vivem as mais hilariantes aventuras, ao lado de Spike e Tyke (dois cachorros), Butch (um gato preto), Tuffy (um ratinho cinza-claro), Quacker (um simpático patinho amarelo) e muitos outros.",
    },
    {
        titulo: "Os Flintstones",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/kJpL6zkMyoN0CuoPKftWxEJ6Y9T.jpg",
        descricao: "Os Flintstones (em inglês: The Flintstones) é uma série de televisão animada que foi exibida de 1960 a 1966 e criada por William Hanna e Joseph Barbera. O desenho retrata o cotidiano de uma família de classe média da Idade da Pedra. Calcula-se que já foi assistido por 300 milhões de espectadores em 80 países, sendo dublado em 22 idiomas. A série estreou às 20:30 do dia 30 de setembro de 1960, no canal ABC, e durou até 1 de abril de 1966. Entre 1 de outubro de 1992 e 1 de janeiro de 2004 foi emitida no Cartoon Network dos Estados Unidos. Os Flintstones parecem uma família típica de classe média da década de 60, mas suas aventuras são ambientadas na Idade da Pedra. Eles utilizam eletrodomésticos que são uma mistura de tecnologia com artefatos de pedra lascada e dinossauros.",
    },
    {
        titulo: "iCarly",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/vX5q7GqGWJOgR2r0kAyWAtGWfD0.jpg",
        descricao: "Carly Shay tem sua vida radicalmente mudada quando seu programa na internet torna-se um sucesso entre os jovens. Como seus pais estão viajando, Carly precisa contar com a ajuda de seu irmão e amigos para administrar sua recente fama.",
    },
    {
        titulo: "Os Jovens Titãs em Ação",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/7YAFoSGn6gBhZFzuWhHaGa3jJOi.jpg",
        descricao: "Robin, Estelar, Ravena, Mutano e Ciborgue são super-heróis que moram juntos. Quando não estão ocupados brigando e competindo, garantem a segurança de Jump City.",
    }
]

const ListaSeries = document.getElementById("ListaSeries");
function mostrarSeries(lista) {
    ListaSeries.innerHTML = ""
    lista.forEach(serie => {
        ListaSeries.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${serie.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${serie.titulo}</h3>
                        <p>${serie.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}, ${serie.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    });
}

mostrarSeries(series)

function verDetalhes(titulo, descricao){
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}