escrevoMasNaoEntendo = [];

function novaMsg() {
  const titulo = document.getElementById("titulo-post");
  console.log(titulo.value);
  const autor = document.getElementById("autor-post");
  console.log(autor.value);
  const conteudo = document.getElementById("conteudo-post");
  console.log(conteudo.value);
  let localOndeImprime = document.getElementById("container-de-posts");
  localOndeImprime.innerHTML +=`<h1>${titulo.value}</h1> \n <h2>${autor.value}</h2>\n <h3>${conteudo.value}</h3>`;

  const publicar = {
    titulo: titulo.value,
    autor: autor.value,
    conteúdo: conteudo.value,
  };

  titulo.value = "";
  autor.value = "";
  conteudo.value = "";

  arrayDoBlog.push(publicar);
  console.log(escrevoMasNaoEntendo);


}