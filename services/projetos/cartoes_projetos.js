import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";

export async function buscarCartoes() {
    try {
        const response = await fetch('https://backendportifolio.vercel.app/cartoes');
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
        const response = await fetch('https://backendportifolio.vercel.app/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function cadastrarCartao(nome, imagem) {
    try {
        const response = await fetch('https://backendportifolio.vercel.app/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                imagem,
            }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function atualizarCartao(id, nome, imagem) {
    try {
        const response = await fetch('https://backendportifolio.vercel.app/cartoes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                imagem,
                id,
            }),
        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}