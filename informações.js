<script>
  const subtitulos = document.querySelectorAll ('h2');
  const topicos = nem Array();
  subtitulos.forEach(subtitulo => {
    topicos.push(subtitulo.textContent);
  });
  lista = document.querySelector('ol');
  topicos.forEach(topico=>{
      const item = document.createElement('li')
      item.textcontent = topico;
      lista.append(item);
  });
  </script>
