import { criarCartoes } from "../../view/js/formacao/cartoes.js";
import { escondeTelaCad } from
import { recolheDados } from

window.escondeTelaCad = escondeTelaCad;
window.esconderecolheDados = recolheDados;


document.addEventListener("DOMContentLoaded", () => {
    criarCartoes();
});