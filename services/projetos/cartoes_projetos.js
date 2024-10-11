import { criarCartoes } from "../../view/js/formacao/cartoes";

export async function buscarCartoes() {
    try {
        const response = await fetch('http://localhost:3000/cartoes');
        if (!response.ok) {
            throw new Error('Erro ao buscar os cartões do backend');
        }
        const data = await response.json();
        const cartoes = data.cartoes;
        return cartoes;
    } catch (error) {
        console.error('Erro no carregamento dos cartões:', error);
    }
}

export async function excluirCartoes(index) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'applicatiom/json',
            },
            body: JSON.stringify({ cartao: index }),

        });
        criarCartoes()
    }
    catch (e) {
        console.error.log(e);

    }
}

