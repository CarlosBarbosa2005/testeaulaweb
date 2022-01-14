const formulario = document.querySelector("form");
        formulario.addEventListener("submit", insereTarefa);
        let abc = 0;
        function getTextoInput(formulario) {
            const input = formulario.querySelector("input[type=text]");
            const texto = input.value;
            input.value = "";
            input.focus();
            return texto;
        }

        function insereTarefa(evento) {
            evento.preventDefault();
            const texto = getTextoInput(evento.target);
            if (texto == "") return;
            const tarefa = novaTarefa(texto);
            document.querySelector("#lista").append(tarefa);
            // salva tarefa
            withDB(db => {
                let req = db.add({"texto": texto, "feito": false});
                req.onsuccess = evento => {
                    tarefa.setAttribute('id', `task-${evento.target.result}`);
                }
            });
        }

        function novaTarefa(texto) {
            const tarefa = document.createElement("p");
            tarefa.append(criaCheckbox());
            tarefa.append(texto + " ");
            tarefa.append(criaLixeira());
			tarefa.append(criarBotoes());
            return tarefa;
        }

        function criaCheckbox() {
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.addEventListener("click", salvaChecagem);
            checkbox.addEventListener("click", atribuiEstiloOculto);
            return checkbox;
        }

        function atribuiEstiloOculto(evento) {
            if (evento.target.checked) {
                evento.target.parentNode.classList.add("oculto");
            } else {
                evento.target.parentNode.classList.remove("oculto");
            }
        }

        function salvaChecagem(eventoCheckbox) {
            withDB(db => {
                let id = eventoCheckbox.target.parentNode.id;
                let key = parseInt(id.slice(5));
                let req = db.get(key);
                req.onsuccess = eventoReq => {
                    let registro = eventoReq.target.result;
                    registro["feito"] = eventoCheckbox.target.checked;
                    db.put(registro, key);
                }
            });
        }

        function criaLixeira() {
            const lixeira = document.createElement("span");
            lixeira.classList.add("fa");
            lixeira.classList.add("fa-trash-o");
            lixeira.addEventListener("click", removeTarefa);
            return lixeira;
        }

        function removeTarefa(evento) {
            const lixeira = evento.target;
            const tarefa = lixeira.parentNode;
            tarefa.remove();
            withDB(db => {
                let id = tarefa.id;
                let key = parseInt(id.slice(5));
                db.delete(parseInt(key));
            });
        }

        function withDB(callback) {
            let request = indexedDB.open("listaTarefas", 1);
            request.onerror = console.error;
            request.onsuccess = () => {
                let db = request.result;
                callback(getStore(db));
            }
            request.onupgradeneeded = () => {
                let db = request.result;
                db.createObjectStore("tarefas", {autoIncrement: true});
            }
            function getStore(db) {
                return db.transaction(["tarefas"], "readwrite").objectStore("tarefas");
            }
        }

        function carregaTarefas(db) {
            db.openCursor().onsuccess = evento => {
                let cursor = evento.target.result;
                if (cursor) {
                    const tarefa = novaTarefa(cursor.value.texto);
                    document.querySelector("#lista").append(tarefa);
                    const id = cursor.key;
                    tarefa.setAttribute("id", `task-${id}`);
                    if (cursor.value.feito) {
                        tarefa.firstElementChild.click();
                    }
                    cursor.continue();
                }
            }
        }
		document.querySelector("#mostraEscondeConcluidos").addEventListener( "click", evento => {
            const estilo = document.querySelector("#estiloOculto");
            estilo.disabled = !estilo.disabled;
        });
		
		function criarBotoes() {
	     const botao = document.createElement("button");
		 botao.innerHTML = 'alterar';
		 botao.addEventListener('click', alterarTexto);
		 return botao
	     
		 
}
function alterarTexto(evento){
	const reformular = evento.target;
    const tarefa = reformular.parentNode;
	const pegarX = tarefa.firstElementChild.nextSibling.textContent;
	const pgelemento = document.getElementById("NT");
	pgelemento.value = pegarX;
	const selcform = document.querySelector('form');
	if(abc == 0){
	const botao = document.createElement("button");
		 botao.innerHTML = 'atualizar';
		 botao.setAttribute("id", 'caduzin');
		 botao.addEventListener('click', function(){
			 botaoAtualiza(tarefa)
		 });
		 selcform.after(botao);
		 abc = 8;
	}
}
function botaoAtualiza(xy){
	const pgelemento = document.getElementById("NT");
	let texto = pgelemento.value;
	let id = xy.id;
	let tf = document.getElementById(id);
	let ql = tf.childNodes[1];
	ql.textContent = texto;
	pgelemento.value = '';
	pgelemento.focus();
	withDB(db => {
                let key = parseInt(id.slice(5));
                let req = db.get(key);
                req.onsuccess = eventoReq => {
                    let registro = eventoReq.target.result;
                    registro["texto"] = texto;
                    db.put(registro, key);
                }
            });
			const r = document.getElementById('caduzin');
			r.remove();
			abc = 0;
}
