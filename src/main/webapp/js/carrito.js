import {devuelveArticulosCarrito} from "./AJAX.js";


export let muestraCarrito = () =>{
	$("#carritoInsertar").empty();
	return new Promise(resolve =>{
	//Devuelve los artículos alojados en la BDD
  	devuelveArticulosCarrito().then(articulos=>{
  	$.each(articulos, (index, info) =>{
    	cuerpoCarrito(info);
 	 })
 	 resolve(true);
  })})
	
}
	
let cuerpoCarrito = (info) =>{
	
	let inner = `<div class="card w-75">
  	     		   <div class="card-body">
				     <div class="headerCard">
    	     	       <h5 class="card-title">${info.nombre}</h5>
					   <button type="button" class="btn-close eliminarArticuloCart"></button>
					 </div>
    		        <p class="card-text">${info.descripcion}</p>
    		        <p class="card-text"><span>${info.precio}</span>
					  <span>${info.existencia}</span></p>
  		          </div>
			   </div>`

	$("#carritoInsertar").append(inner);
}