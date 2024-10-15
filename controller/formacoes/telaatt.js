import { atualizarCartao } from "../../view/js/formacao/cartoes_view.js";

let telaCad = document.getElementById('telaAtt');
export function escodeTelaAtt(){
    telaCad.style.right = '-100vw';
}
export function mostraTelaAtt(){
    telaCad.style.right = '0';
}

export function recolheDadosAtt(id){
       let nome = document.getElementById('nomeAtt'); 
       let valor = document.getElementById('valorAtt'); 
       let link = document.getElementById('linkAtt'); 

       atualizarCartao(id, nome.value, valor.value, link.value);
       escodeTelaAtt();

       nome.value = '';
       valor.value = '';
       link.value = '';
}