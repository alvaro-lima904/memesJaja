const button = document.getElementById('btn');
const imagem = document.getElementById('imagem');

imagem.src = "img2/meme37.jpg";

let memes = [
    "img2/meme2.jpg",
    "img2/meme3.jpg",
    "img2/meme1.jpg",
    "img2/meme4.jpg",
    "img2/meme5.jpg",
    "img2/meme6.jpg",
    "img2/meme7.jpg",
    "img2/meme8.jpg",
    "img2/meme9.jpg",
    "img2/meme10.jpg",
    "img2/meme11.jpg",
    "img2/meme12.jpg",
    "img2/meme13.jpg",
    "img2/meme14.jpg",
    "img2/meme15.jpg",
    "img2/meme16.jpg",
    "img2/meme17.jpg",
    "img2/meme18.jpg",
    "img2/meme19.jpg",
    "img2/meme20.jpg",
    "img2/meme21.jpg",
    "img2/meme22.jpg",
    "img2/meme23.jpg",
    "img2/meme24.jpg",
    "img2/meme25.jpg",
    "img2/meme26.jpg",
    "img2/meme27.jpg",
    "img2/meme28.jpg",
    "img2/meme29.jpg",
    "img2/meme31.jpg",
    "img2/meme32.jpg",
    "img2/meme33.jpg",
    "img2/meme34.jpg",
    "img2/meme35.jpg",
    "img2/meme36.jpg",
    "img2/meme37.jpg",
];

button.addEventListener('click', rotacao);

function rotacao() {
    let mudar = parseInt(Math.random()*memes.length);
    imagem.src = memes[mudar];
};