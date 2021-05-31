import {generadorCard} from "./adjuntaTarjetas.js";
import {muestraCarrito} from "./carrito.js"
//Devuelve todos los artículos que se encuentran en la BDD
let orden = "Default";
export let modificaOrden = (nuevaOrden) =>{
	orden = nuevaOrden;
}
export let devuelveArticulos = () => {
	return $.ajax({
    url: "adminArticulo",
    type: "GET",
    data: {action: "enviarArticulos", orden: orden},
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
  });
};

//Añade un articulo al carrito
export let addItemCarrito = (id) =>{
	return $.ajax({
    url: "adminArticulo",
    type: "POST",
    data: {action: "añadeArticuloCarrito", id: id},
    success: function(){
     generadorCard();
    }
  });
}

//Devuelve los artículos del carrito
export let devuelveArticulosCarrito = () => {
	return $.ajax({
    url: "adminArticulo",
    type: "GET",
    data: {action: "obtenerArticulosCarrito"},
	success: function(){
	}
    });
}

//Borra el artículo del carrito indicado
export let eliminaArticuloCarrito= (idArticulo) =>{
return $.ajax({
    url: "adminArticulo",
    type: "POST",
    data: {action: "eliminaArticuloCarrito", id: idArticulo},
    success: function(){
     muestraCarrito();
    }
  });
}

//Elimina todos los artículos del carrito
export let eliminaTodoCarrito= () =>{
return $.ajax({
    url: "adminArticulo",
    type: "POST",
    data: {action: "eliminaTodosCarrito"},
    success: function(){
     //muestraCarrito();
    }
  });
}
