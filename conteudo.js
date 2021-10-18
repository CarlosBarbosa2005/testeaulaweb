const subtitulos = document.querySelectorAll ('h2');
const topicos = new Array();
subtitulos.forEach(element => {
//insere todos os textos em topicos 	
    topicos.push(element.textContent);
	
/* cria e insere a ancora para cada seção 	
    const ancora = document.createElement('a');
    ancora.setAttribute('name', element.textContent);
    element.append(ancora);
	
//cria e insere o link para retornar ao início	
    const retorno = document.createElement('a');
    retorno.setAttribute('href','#');
    retorno.textContent = "início";
    element.parentElement.insertBefore(retorno, element.nextElementSibling);
    */
 });	
	  
 const lista = document.querySelector('ol');
  topicos.forEach(topico=> {
	  
//insere os elementos da lista 	  
      const item = document.createElement('li')
      item.textContent = topico;
      lista.append(item)
	  
	/*  
//criar e insere o link de cada seção	  
const link = document.createElement('a');
link.setAttribute('href',`#${topico}`);
link.textContent = topico;
item.append(link);
*/
	  
});

document.querySelector("body > center > ol > li:nth-child(1)").innerHTML = "<a href='#flamengo'>flamengo</a>";
document.querySelector("body > center > ol > li:nth-child(2)").innerHTML = "<a href='#corinthians'>corinthians</a>";
document.querySelector("body > center > ol > li:nth-child(3)").innerHTML = "<a href='#saopaulo'>saopaulo</a>";
document.querySelector("body > center > ol > li:nth-child(4)").innerHTML = "<a href='#palmeiras'>palmeiras</a>";
document.querySelector("body > center > ol > li:nth-child(5)").innerHTML = "<a href='#vasco'>vasco</a>";
document.querySelector("body > center > ol > li:nth-child(6)").innerHTML = "<a href='#cruzeiro'>cruzeiro</a>";

var flamengo = document.querySelector("#flamengo");
flamengo.insertAdjacentHTML('afterend', "<a href='#'>ÍNICIO</a><br>");

var cruzeiro = document.querySelector("#cruzeiro");
cruzeiro.insertAdjacentHTML('afterend', "<a href='#'>ÍNICIO</a><br>");

var saopaulo = document.querySelector("#saopaulo");
saopaulo.insertAdjacentHTML('afterend', "<a href='#'>ÍNICIO</a><br>");

var vasco = document.querySelector("#vasco");
vasco.insertAdjacentHTML('afterend', "<a href='#'>ÍNICIO</a><br>");

var corinthians = document.querySelector("#corinthians");
corinthians.insertAdjacentHTML('afterend', "<a href='#'>ÍNICIO</a><br>");

var palmeiras = document.querySelector("#palmeiras");
palmeiras.insertAdjacentHTML('afterend', "<a href='#'>ÍNICIO</a><br>");

 
