import {generadorCard} from "./adjuntaTarjetas.js";
//Devuelve todos los artículos que se encuentran en la BDD
export let devuelveArticulos = () => {
	return $.ajax({
    url: "adminArticulo",
    type: "GET",
    data: {action: "enviarArticulos"},
    });
}

//Borra el artículo indicado
export let borraArticulo = (idArticulo) =>{
return $.ajax({
    url: "adminArticulo",
    type: "POST",
    data: {action: "borrarArticulo", idArticulo: idArticulo},
    success: function(result){
     generadorCard();
    }
  });
    
}
    
//Modifica el artículo indicado
export let modificaArticulo = (idArticulo, name, description, price, existencias) =>{
  return $.ajax({
    url: "adminArticulo",
    type: "POST",
    data: {action: "editar", id: idArticulo , nombre: name, descripcion : description, precio: price, existencia: existencias},
    success: function(result){
     generadorCard();
    }
  });
}

//Crea un articulo
export let addArticulo = (name, description, price, existencias) =>{
  return $.ajax({
    url: "adminArticulo",
    type: "POST",
    data: {action: "register", nombre: name, descripcion: description, precio: price, cantidad: existencias},
    success: function(result){
     generadorCard();
    }
  });
  };
  
  
//Devuelve el articulo indicado por el id
export let devuelveArticulo= (id) =>{
  return $.get("adminArticulo", {action: "devuelveArticulo", identificador: id})};
  
//Devuelve true si el nombre de articulo no existe, false en caso contrario
export let compruebaNombre = (nombre) =>{
  return $.ajax({
  	url:"adminArticulo",
  	type: "GET",
  	data: {action: "compruebaNombreRepetido", nombre: nombre},
  	/*success: function(result){
  		return result;
  	}*/
  });
};