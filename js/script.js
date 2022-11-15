const button = document.getElementById('btn');
const imagem = document.getElementById('imagem');

imagem.src = "img/meme1.jpeg";

let memes = [
    "img/meme1.jpeg",
    "img/meme2.jpeg",
    "img/meme3.jpeg",
    "img/meme4.jpeg",
    "img/meme5.jpeg",
    "img/meme6.jpeg",
    "img/meme7.jpeg",
    "img/meme8.jpeg",
    "img/meme9.jpeg",
    "img/meme10.jpeg",
    "img/meme11.jpeg",
    "img/meme12.jpeg",
    "img/meme13.jpeg",
    "img/meme14.jpeg",
    "img/meme15.jpeg",
    "img/meme16.jpg",
    "img/meme17.jpg",
    "img/meme18.jpg",
    "img/meme19.jpg",
    "img/meme20.jpg",
    "img/meme21.jpg",
    "img/meme22.jpg",
    "img/meme23.jpg",
    "img/meme24.jpg",
    "img/meme25.jpg",
    "img/meme26.jpg",
    "img/meme27.jpg",
    "img/meme28.jpg",
    "img/meme29.jpg",
    "img/meme30.jpg",
    "img/meme31.jpg",
    "img/meme32.jpg",
    "img/meme33.jpg",
    "img/meme34.jpg",
    "img/meme35.jpg",
    "img/meme36.jpg",
    "img/meme37.jpg",
    "img/meme38.jpg",
    "img/meme39.jpg",
    "img/meme40.jpg",
    "img/meme41.jpg",
    "img/meme42.jpg",
    "img/meme43.jpg",
    "img/meme44.jpg",
    "img/meme45.jpg",
    "img/meme46.jpg",
    "img/meme47.jpg",
    "img/meme48.jpg",
    "img/meme49.jpg",
    "img/meme50.jpg",
    "img/meme51.jpg",
    "img/meme52.jpg",
    "img/meme53.jpg",
    "img/meme54.jpg",
    "img/meme55.jpg",
    "img/meme56.jpg",
    "img/meme57.jpg",
    "img/meme58.jpg",
    "img/meme59.jpg",
    "img/meme60.jpg",
];

button.addEventListener('click', rotacao);

function rotacao() {
    let mudar = parseInt(Math.random()*memes.length);
    imagem.src = memes[mudar];
};