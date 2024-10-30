import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";

export async function buscarCartoes() {
    try {
        const response = await fetch('https://backendportifolio.vercel.app/');
        const data = await response.json();
        const cartoes = data.cartoes;
        return cartoes;
    }
    catch (e) {
        console.log(e);
    }
}

export async function excluirCartoes(index) {
    try {
        const response = await fetch('https://backendportifolio.vercel.app/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ index: index }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function cadastrarCartao(nome, valor, link) {
    try {
        const response = await fetch('https://backendportifolio.vercel.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                img: link,
            }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function atualizarCartao(id, nome, valor, img) {
    try {
        const response = await fetch('https://backendportifolio.vercel.app/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                img: img,
                id: id,
            }),
        });
    } catch (e) {
        console.log(e);
    }
}