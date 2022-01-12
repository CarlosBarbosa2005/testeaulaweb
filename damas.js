const tamanhoCelula = 40;
let pecaId = 0;
let atual = 99;
let sair = 97;
let abc = '';
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
			celula.setAttribute("id",`${j}` +" "+`${i}`);
            linha.append(celula);

            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
			pecaId = pecaId + 1;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
				celula.setAttribute("class", "droptarget")
                if (i * 8 + j <= 24) {
                    celula.append(criaPeca('black', pecaId));
                } else if (i * 8 + j >= 40) {
                    celula.append(criaPeca('red', pecaId));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}

function criaPeca(cor,ids) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `img/${cor}.png`);
    imagem.setAttribute('width', `${tamanhoCelula-4}px`);
    imagem.setAttribute('height', `${tamanhoCelula-4}px`);
	imagem.setAttribute("id",ids);
	imagem.setAttribute("class",cor);
    return imagem;
}
function dragstart(){
	document.addEventListener("dragstart", function(event) {
		event.dataTransfer.setData("Text", event.target.id);
		atual = event.path[1].id.toString();
		abc = event.path[0].className;
		console.log(atual);
	});
}

function dragend() {
	document.addEventListener("dragend", function(event) {
	});
}

function dragover() {
	document.addEventListener("dragover", function(event) {
	  event.preventDefault();
	});
}

function drop(){
	document.addEventListener("drop", function(event) {
		event.preventDefault();
		let arg = event.path[0].childElementCount;
		sair = event.target.id.toString();
		let xa = atual.substring(0,1);
		let ya = atual.substring(2,3);
		let xs = sair.substring(0,1);
		let ys = sair.substring(2,3);
		console.log(sair);
		if ( event.target.className == "droptarget") {
			const data = event.dataTransfer.getData("Text");
			if ( arg == '0' && ys != ya) {
				if( abc == 'red' && ya > ys && ya - ys == 1 || abc == 'black' && ya < ys && ya - ys == -1) {
			event.target.appendChild(document.getElementById(data));
		}
		};
		}
	});
}
dragstart();
dragend();
dragover();
drop();
