
//Devuelve todos los artículos que se encuentran en la BDD
export let devuelveArticulos = () => {
	return $.ajax({
    url: "adminArticulo",
    type: "GET", // set to false so order of operations is correct
    data: {action: "enviarArticulos"},
    });
}

//Borra el artículo indicado
export let borraArticulo = (idArticulo) =>{
  $.post("adminArticulo?action=borrarArticulo&idArticulo=" + idArticulo).done(() =>{
  })
}