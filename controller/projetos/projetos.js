import { trocarBanner } from "./banner.js";    
import { trocarMenu } from "./menu.js";
import { escodeTelaAtt } from "./../formacoes/telaatt.js"
import { mostraTelaAtt } from "./../formacoes/telaatt.js"
import { recolheDadosAtt } from "./../formacoes/telaatt.js"
import { escondeTelaCad } from "./../formacoes/telacad.js"
import { mostraTelaCad } from "./../formacoes/telacad.js"
import { recolheDados } from "./../formacoes/telacad.js"

window.escodeTelaAtt = escodeTelaAtt
window.mostraTelaAtt = mostraTelaAtt
window.recolheDadosAtt = recolheDadosAtt
window.escondeTelaCad = escondeTelaCad
window.mostraTelaCad = mostraTelaCad
window.recolheDados = recolheDados


window.trocarMenu = trocarMenu
window.trocarBanner = trocarBanner


document.addEventListener("DOMContentLoaded", function (){

});