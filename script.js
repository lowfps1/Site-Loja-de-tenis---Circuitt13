let slide = document.getElementById("slide");
let posicao = 0;
let larguraCard = 290; 

function avancar() {
    posicao -= larguraCard;
    slide.style.transform = `translateX(${posicao}px)`;
}

function voltar() {
    posicao += larguraCard;
    slide.style.transform = `translateX(${posicao}px)`;
}