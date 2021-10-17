<script>
  const topicos = nem Array();
  lista = document.querySelector('ol');
  topicos.forEach(topico=>{
      const item = document.createElement('li')
      item.textcontent = topico;
      lista.append(item);
  });
  </script>
