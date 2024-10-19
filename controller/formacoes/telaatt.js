import { atualizarCartao } from "./../../services/projetos/cartoes_projetos.js";


let id;


let telaCad = document.getElementById('telaAtt');
export function escodeTelaAtt() {
    telaCad.style.right = '-100vw';
}
export function mostraTelaAtt() {
    telaCad.style.right = '0';
}

export function recolheDadosAtt(id) {
    let nome = document.getElementById('nomeAtt');
    let link = document.getElementById('linkAtt');

    atualizarCartao(id, nome.value, link.value);
    escodeTelaAtt();

    nome.value = '';
    link.value = '';
}
