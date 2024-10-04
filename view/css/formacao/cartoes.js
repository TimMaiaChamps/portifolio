let cartoes = [
    { nome: 'Vandal Anci-Fogo', valor: 'R$64.98', imagem: 'https://valorantstrike.com/wp-content/uploads/2020/07/Valorant-Elderflame-Collection-Vandal-HD.jpg' },
    { nome: 'CARTAO 2', valor: 'R$77.71', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZTzcuaupfxxrkcygDPXjOtulKUrvqxOz6w&s' },
    { nome: 'CARTAO 3', valor: 'R$65.19', imagem: 'https://dotesports.com/wp-content/uploads/2023/08/Champions-2023-Vandal-1.png?w=640' },
    { nome: 'CARTAO 4', valor: 'R$49.02', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaNfAj_BL-OL6spEUDqVxAHJX4fyF46jfFQ&s' },
    { nome: 'CARTAO 5', valor: 'R$17.92', imagem: 'https://dotesports.com/wp-content/uploads/2023/05/Horizon_Vandal.png?w=640' },
    { nome: 'CARTAO 6', valor: 'R$55.63', imagem: 'https://dotesports.com/wp-content/uploads/2023/05/Nunca-Vandal.png?w=640' },
    { nome: 'CARTAO 7', valor: 'R$25.74', imagem: 'https://dotesports.com/wp-content/uploads/2023/05/Forsaken_Vandal.png?w=640' },
    { nome: 'CARTAO 8', valor: 'R$69.34', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemaNuq8oIYYeNy47O8aw6FXsNvnd8c3rEvPQqGqQbHcEVARMwxMnn4TXXvQaPJDWm_7E&usqp=CAU' },
    { nome: 'CARTAO 9', valor: 'R$72.45', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJou3bxLNv21blzeuPnKa2a-_NwhBToIMcQ&s' },
    { nome: 'CARTAO 10', valor: 'R$17.55', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgNGmLIQora-KUgKNawRRIwDDUeIukOX3MA&s' },
    { nome: 'CARTAO 11', valor: 'R$13.56', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjwq8gGBowmUjtGaYaLjo4L_LDj77fYKgYA&s' },
    { nome: 'CARTAO 12', valor: 'R$96.20', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDZ9ZtCBYwCLTOkiUt_X6fDAxRgxMGB1SnA&s' },
    { nome: 'CARTAO 13', valor: 'R$18.65', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpRWhAuXg1GmEYyEDUFWWi8qxtxdu376g7XwPTdPzIl1WC8rbaRo3A-9pUeTz-uGWIao&usqp=CAU' },
    { nome: 'CARTAO 14', valor: 'R$38.48', imagem: 'https://dotesports.com/wp-content/uploads/2023/05/Prime_Vandal-2.png?w=640' },
    { nome: 'CARTAO 15', valor: 'R$64.13', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlUlcBCRWAZ5RwWgyBfayTcTOguxUsmscUQ&s' },
    { nome: 'CARTAO 16', valor: 'R$97.24', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdZ4V79hIm0JMTUjtdzxiLbG6jEF07VwCSQ&s' },
    { nome: 'CARTAO 17', valor: 'R$47.70', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBQLkRl0fXbGkGkseU3OcizjmGf2kmBNmDg&s' },
    { nome: 'CARTAO 18', valor: 'R$23.05', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaaVn9MyCYzNMvTTSQwjOxD4TEo35rrdsjA&s' },
    { nome: 'CARTAO 19', valor: 'R$73.19', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyxpTII3hay93vhtFd_EPtWMlc1-bHEIQh9_5ezdHjIven1CAPkBP-vviClh5D-vt5uY&usqp=CAU' },
    { nome: 'CARTAO 20', valor: 'R$90.52', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGteVrhGHVY4jwzYpt6ECMCdOuw-Q-cp3NXQ&s' }
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
        
 cartoes.style.backgroudImage = `url(${cartoes[i].img}`

      
        cartao.appendChild(h1);
        cartao.appendChild(img);
        cartao.appendChild(h3);

        seactionCartoes.appendChild(cartao);
    }


}

