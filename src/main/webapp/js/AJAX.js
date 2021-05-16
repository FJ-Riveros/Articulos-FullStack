
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


//Modifica el artículo indicado
export let modificaArticulo = (idArticulo, name, description, price, existencias) =>{
  $.post("adminArticulo", {action: "editar", id: idArticulo , nombre: name, descripcion : description, precio: price, existencia: existencias });
}