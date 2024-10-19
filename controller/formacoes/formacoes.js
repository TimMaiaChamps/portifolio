import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";
import { escondeTelaCad } from "./telacad.js"
import { recolheDados } from "./telacad.js"
import { escodeTelaAtt } from "./telaatt.js";
import { recolheDadosAtt } from "./telaatt.js";


window.escondeTelaCad = escondeTelaCad;
window.esconderecolheDados = recolheDados;
window.escodeTelaAtt = escodeTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;

document.addEventListener("DOMContentLoaded", function () {
    criarCartoes();
});