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

 
