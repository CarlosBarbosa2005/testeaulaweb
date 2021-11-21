sumariotitulo = document.querySelectorAll('h2');
const subt = new Array();
sumariotitulo.forEach(abc => {
	subt.push(abc.textContent);
	linka = document.createElement('a');
	linka.setAttribute('name',abc.textContent);
	abc.append(linka);
	inicio = document.createElement('a');
	inicio.setAttribute('href',`#`);
	inicio.textContent = 'voltar';
	abc.append(inicio);
});

listagem = document.querySelector('ol');
subt.forEach(ca => {
	item = document.createElement('li');
	item.textContent = ca;
	listagem.append(item);
	const link2 = document.createElement('a');
	link2.setAttribute('href',`#${ca}`);
	link2.textContent = '-' + ca;
	item.append(link2);
});
