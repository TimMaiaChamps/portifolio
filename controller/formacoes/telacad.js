import { cadastrarCartao } from 

let telaCad = document.getElementById('telaCadastro');
export function escondeTelaCad(){
    telaCad.style.left = '-100';
}
export function mostraTelaCad(){
    telaCad.style.left = '0'
}

export function recolheDados(){

let none = document.getElementById('nome');
let valor = document.getElementById('valor');
let link = document.getElementById('link');

cadastrarCartao(nome.value, valor.value, link.value);

nome.value = '';
valor.value = '';
link.value = '';

}
