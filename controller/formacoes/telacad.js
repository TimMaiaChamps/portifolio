import { cadastrarCartao } from "./../../services/projetos/cartoes_projetos.js";
let id;

let telaCad = document.getElementById('telaCadastro');


export function escondeTelaCad() {
    telaCad.style.left = '-100vw';
}
export function mostraTelaCad() {
    telaCad.style.left = '0'
}

export function recolheDados() {

    let none = document.getElementById('nome');
    let link = document.getElementById('link');

    cadastrarCartao(nome.value, link.value);

    nome.value = '';
    link.value = '';

}   

export function recolherDados() {
    
    let nome = document.getElementById("input-nome");
    let link = document.getElementById("input-link");

    if (nome.link === '') {
        alert("nome em branco");
    } else {
        cadastrarCartao(id, nome.value, link.value);
        escondeTelacad();

        nome.value = '';
        link.value = '';
    }

}