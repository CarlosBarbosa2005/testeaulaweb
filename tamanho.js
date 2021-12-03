document.addEventListener("DOMContentLoaded", validar);

let proporção = 2;
numero = 1;

function validar(){
validacao = document.querySelector(`h${numero}`);
	if(validacao != null){
		criarBotoes();
		carregatamanho(numero);
	} else if (validacao == null && numero < 7){
		numero += 1;
		validar();

	}
}

function carregatamanho(){
	const palavra = document.querySelector(`h${numero}`);
	palavra.style.fontSize = `${proporção}em`;
	
}

function criarBotoes() {
	div = document.createElement("div");
	div.innerHTML = `
	<button onclick = "aumenta()">+</button>
	<button onclick = "diminuir()">-</button>	
	`;
	document.body.prepend(div);
}

function aumenta(){
	if (proporção != 10){
        proporção += 1;
	    carregatamanho(); 
	}

}
function diminuir(){
	if (proporção > 1){
		proporção -= 1;
		carregatamanho();
	}
}
