const subtitulos = document.querySelectorAll ('h2');
 const topicos = new Array();
  subtitulos.forEach(subtitulo => {
   topicos.push(subtitulo.textContent);
  });
  lista = document.querySelector('ol');
  topicos.forEach(topico=> {
      const item = document.createElement('li')
      item.textContent = topico;
      lista.append(item);
  });
  var botaoreturn = document.querySelectorAll("#voltar");
  botaoreturn.addEventListener("click", function() {
    window.scrollTo(0, 0);
  });

$('.voltar a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});
 
