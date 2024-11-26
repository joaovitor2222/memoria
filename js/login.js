// variaveis

const form = document.querySelector(".login-form");
const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");

// função para acionar botao jogar

const validateInput = ({target}) => {

    if(target.value.length > 2) {
        button.removeAttribute("disabled")
        return;
    }

    button.setAttribute("disabled", "")
};

// função para guardar o nome
const handleSubmit = (event) => {

    event.preventDefault();


    //salva a chave player no local storage
    localStorage.setItem("player", input.value);


    //direciona para nova pagina do game
    window.location = "pages/game.html";

};


input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);