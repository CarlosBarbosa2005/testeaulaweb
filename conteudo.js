const subtitulos = document.querySelectorAll ('h2');
const topicos = new Array();
subtitulos.forEach(element => {
    topicos.push(element.textContent);
    const ancora = document.createElement('a');
    ancora.setAttribute('name', element.textContent);
    element.append(ancora);
    const retorno = document.createElement('a');
    retorno.setAttribute('href','#');
    retorno.textContent = "início";
    element.parentElement.insertBefore(retorno, element.nextElementSibling);
 });	
	  
 const lista = document.querySelector('ol');
  topicos.forEach(topico=> {
      const item = document.createElement('li')
      item.textContent = topico;
      lista.append(item);
	  
  });

const link = document.createElement('a');
link.setAttribute('href',`#${topico}`);
link.textContent = topico;
item.append(link);

});
  
$('.voltar a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});
 
