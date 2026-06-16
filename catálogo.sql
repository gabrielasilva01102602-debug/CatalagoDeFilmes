create database Catálogo_filmes;
use Catálogo_filmes;
create table filmes(
id int auto_increment primary key,
titulo varchar(100),
descricao text,
imagem varchar(255),
categoria varchar(50)
);
insert into filmes
(titulo,descricao,imagem,categoria)
values ("O Homen do futuro","Homen volta no tempo para tentar cosertar sua vida","imagem.png","Ficcção Científica");

select* from filmes;

insert into filmes
(titulo,descricao,imagem,categoria)
values ("vingadores","Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos","https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg", "Ficcção Científica");

insert into filmes
(titulo,descricao,imagem,categoria)
values ("Batman","Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer.","https://media.themoviedb.org/t/p/w600_and_h900_face/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg","Ficcção Científica");

insert into filmes
(titulo,descricao,imagem,categoria)
values ("Homem-Aranha","Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói","https://media.themoviedb.org/t/p/w600_and_h900_face/xaKydnMw6wR1MBAjS5seGPVusbs.jpg","Ficcção Científica");

insert into filmes
(titulo,descricao,imagem,categoria)
values ("As Branquelas","O que acontece quando dois atrapalhados agentes do FBI se disfarçam de princesas mega-ricas para se infiltrarem na alta sociedade? O resultado é situações extremamente engraçadas e diversão total ao ver estes dois irmãos azarados transformando-se em duas senhoritas refinadas e com estilo!","https://media.themoviedb.org/t/p/w600_and_h900_face/aJZOcorpgloDLkPP6ED0t9sXjNu.jpg","Comédia");

insert into filmes
(titulo,descricao,imagem,categoria)
values ("Projeto Almanaque","Um grupo de jovens acaba descobrindo instruções secretas para montar uma máquina do tempo, e decidem construir o aparelho.","https://media.themoviedb.org/t/p/w600_and_h900_face/2krLUKMsKbnZk6j647IlkqlMZ2u.jpg","Ficcção Científica");

insert into filmes
(titulo,descricao,imagem,categoria)
values ("Mortal Kombat","O lutador de MMA Cole Young deve treinar para liberar seu verdadeiro poder para unir-se aos maiores campeões mundiais contra inimigos da Exoterra em uma batalha decisiva pelo universo.","https://media.themoviedb.org/t/p/w600_and_h900_face/4nW5X9iBrMlHMDcTsEOQWXKu3TZ.jpg","Ficcção Científica");

select* from filmes;






