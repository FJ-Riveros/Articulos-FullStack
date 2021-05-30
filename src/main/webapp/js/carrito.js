import {devuelveArticulosCarrito} from "./AJAX.js";


export let muestraCarrito = () =>{

	return new Promise(resolve =>{
	//Devuelve los artículos alojados en la BDD
  	devuelveArticulosCarrito().then(articulos=>{
  	$.each(articulos, (index, articulo) =>{
    	cuerpoCarrito(articulo);
 	 })
 	 resolve(true);
  })})
	
}
	
let cuerpoCarrito = () =>{
	
	let inner = `<div class="card w-75">
  	     		   <div class="card-body">
    	     	    <h5 class="card-title">${info.nombre}</h5>
    		        <p class="card-text">${info.descripcion}</p>
    		        <p class="card-text">${info.precio}</p>
			        <p class="card-text">${info.cantidad}</p>
  		          </div>
			   </div>`
}