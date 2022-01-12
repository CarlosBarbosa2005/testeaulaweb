document.querySelector("#DDD").addEventListener("change", buscaDadosApi);
guardar = new Array();
function buscaDadosApi(evento){
    fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
	.then(resposta => resposta.json())
	.then(dados => {
        guardar = dados.cities;
		darValor();	 
	 });
}
function darValor(){
	listagem = document.querySelector('ol');
	listagem.textContent = '';
    guardar.forEach(ca => {
	    item = document.createElement('li');
	    item.textContent = ca;
	    listagem.append(item);
    });
}
