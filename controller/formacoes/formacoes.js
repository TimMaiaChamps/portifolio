import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";
import { escondeTelaCad } from "./telacad.js"
import { recolheDados } from "./telacad.js"

window.escondeTelaCad = escondeTelaCad;
window.esconderecolheDados = recolheDados;


document.addEventListener("DOMContentLoaded", () => {
    criarCartoes();
});