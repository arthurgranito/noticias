const botaoAbrir = document.getElementById('botao-abrir');
const botaoFechar = document.getElementById('botao-fechar');
const body = document.querySelector('body');
const nav = document.querySelector('.mobile');

botaoAbrir.addEventListener('click', abrirMenu);

function abrirMenu() {
    body.classList.add('escurecer');
    nav.classList.add('abrir');
}

botaoFechar.addEventListener('click', fecharMenu);

function fecharMenu() {
    body.classList.remove('escurecer');
    nav.classList.remove('abrir');
}