const image = document.querySelector('img');
const numeroMaximoDePersonagens = 671;
let nomeDoPersonagem;


    generateRandomNumber = () => {
        return Math.floor(Math.random() * numeroMaximoDePersonagens);
    }
   
    getCharacter = () => {
        const id = generateRandomNumber();
        return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
        }
       
        }).then((response) => response.json()).then((data) => {
        image.src = data.image;
        image.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem = data.name;
        })
       
       }
        handleWithTheGame = () => {
            this.getCharacter()
            nomeDoPersonagem = nomeDoPersonagem.toLowerCase();
       }
