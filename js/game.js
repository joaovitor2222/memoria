const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const points = document.querySelector(".points")
const grid = document.querySelector('.grid');

let currentTime = 0;
let pontos = 0;


// quando a janela for carregada

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem("player");
    startTimer();
    loadGame();
    ProcessingInstruction.innerHTML = points;
}

const startTimer = () => {
    this.loop = setInterval(() => {

        points.innerHTML = pontos;
        currentTime++;
        timer.innerHTML = currentTime;


    }, 1000);
}

// array dos personagens das cartas
const characters = [
    'bills',
    'freeza',
    'vegeta',
    'whis',
    'boo',
    'bulma',
    'Mestre_kame',
    'kurilin',
    'goku',
    'jiren',
];

// dobrando o tamanho do array

const duplicateCharacters = [...characters, ...characters]

// emabaralhando

const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);


// funcao para criar elementos

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


// criar as cartas
const createCard = (character) => {

    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", " face back");

    front.style.backgroundImage = `url('../imagens/${character}.png')`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard)
    card.setAttribute("data-character", character);

    return card;
};

// funcao carregar o game
const loadGame = () => {

    shuffledArray.forEach((character) => {
        const card = createCard(character);

        grid.appendChild(card);


    });







};

// funcao revelar cartas

let firstCard = "";
let secondCard = "";


const revealCard = ({ target }) => {

    if (target.parentNode.className.includes("reveal-card")) {
        return;
    }

    if (firstCard === "") {
        target.parentNode.classList.add("reveal-card");
        firstCard = target.parentNode;
    } else if(secondCard === ""){
        target.parentNode.classList.add("reveal-card");
        secondCard = target.parentNode;
    }

    checkCards()

};

// funcao para checar as cartas

const checkCards = () => {

    const firstCharacter = firstCard.getAttribute("data-character");
    const secondCharacter = secondCard.getAttribute("data-character");

    if (firstCharacter === secondCharacter) {
        pontos += 10;
        // quando as cartas forem iguais
        firstCard.firstChild.classList.add("disabled-card");

        secondCard.firstChild.classList.add("disabled-card");

        firstCard = "";
        secondCard = "";

        

        checkEndGame()
        
    } else {
        pontos -= 2;
        // quando as cartas forem diferentes
        setTimeout(() => {

            firstCard.classList.remove("reveal-card")
            secondCard.classList.remove("reveal-card")

            firstCard = "";
            secondCard = "";

            

        }, 500);
    }
};

// funçao para checar fim e jogo

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled-card");
        
        if (disabledCards.length === 20) {

            localStorage.setItem("score", pontos)
            localStorage.setItem("recordTimer", currentTime)

            clearInterval(this.loop)

            setTimeout(() => {

            alert(`parabens ${spanPlayer.innerHTML}.
                  tempo total:${timer.innerHTML}
                  pontos: ${pontos}`)
                  

        }, 1000);

        const dialog = confirm("gostaria de jogar novamente?")

        if (dialog) {
            
        } else {
            
        }
    
    }
        
}