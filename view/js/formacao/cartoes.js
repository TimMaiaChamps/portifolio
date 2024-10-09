let cartoes = [
    { nome: 'VANDAL IMPERIUM', valor: 'R$64.98', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMTYOE7xrg1Cgm0QDtjIDUuBeZlHZVDhYMQ&s' },
    { nome: 'VANDAL ARAXYS', valor: 'R$77.71', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLhEP5zG9t-1FjzA2-c7kQlaShZMMHyA1vg&s' },
    { nome: 'VANDAL ONI', valor: 'R$65.19', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aIoYYMpjA29PkwxUZ2YM7OlTlGig9gksPQ&s' },
    { nome: 'VANDAL PASS', valor: 'R$49.02', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaNfAj_BL-OL6spEUDqVxAHJX4fyF46jfFQ&s' },
    { nome: 'VANDAL PRIME', valor: 'R$17.92', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR333nigNCdhAAYZ0LnISxQqmlumh5Hc9l0Yw&s' },
    { nome: 'VANDAL ANCI FOGO', valor: 'R$55.63', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjT4E7VxJgJQkVhtb7xcIqkV-u3hfauWp3Fw&s' },
    { nome: 'VANDAL RGX BLUE', valor: 'R$25.74', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgb5S7eu1_DktDeg3HnSkTHphA4xlS7q6BPA&s' },
    { nome: 'VANDAL PRIMRDIUM', valor: 'R$69.34', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYgaG7dHxfMB2LKhiUKrYnrYf_PhV-LRAZQ&s' },
    { nome: 'VANDAL GELINHO', valor: 'R$72.45', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBQovN-i0rgMzHiBzU68KY4Ct1xZuLvwb1g&s' },
    { nome: 'VANDAL RGX RED', valor: 'R$17.55', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIiPTD4N7WU7wvGBzL6iwhYwVvZdrVzuY7HA&s' },
    { nome: 'VANDAL LEGO', valor: 'R$13.56', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuIQrkynhUKuadl8AQqWPyhfFNz5RnufALw&s' },
    { nome: 'VANDAL CHAMPS', valor: 'R$96.20', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zql4CRfS7tItvEqKB-oO0RDGi9lmdinZTw&s' },
    

];



export function criarCartoes() {    

    let seactionCartoes = document.getElementById('cartoes')



    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao'
        let h1 = document.createElement('h1');
        h1.textContent = cartoes[i].nome;
        let img = document.createElement('img');
        img.src = cartoes[i].imagem;
        let h3 = document.createElement('h3');
        h3.textContent = cartoes[i].valor

        cartao.appendChild(h1);
        cartao.appendChild(img);
        cartao.appendChild(h3);

        seactionCartoes.appendChild(cartao);

    }


}

