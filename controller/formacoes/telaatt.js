import { atualizarCartao } from "./../../services/projetos/cartoes_projetos.js";


let id;


let telaCad = document.getElementById('telaAtt');
export function escodeTelaAtt() {
    telaCad.style.right = '-100vw';
}
export function mostraTelaAtt(index) {
    id = index
    telaCad.style.right = '0';
}

export function recolheDadosAtt() {
    let nome = document.getElementById('nomeAtt');
    let link = document.getElementById('linkAtt');

    atualizarCartao(id, nome.value, link.value);
    escodeTelaAtt();

    nome.value = '';
    link.value = '';
}
