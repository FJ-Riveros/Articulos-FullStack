import {modificaOrden} from "./AJAX.js";
import { generadorCard } from "./adjuntaTarjetas.js";
//Creamos la instancia de LocalStorage para manipularla
let localStorage= window.localStorage;

//Cada vez que se visualice la web recordará la selección que se hizo de orden
export function selectSeleccionado(){
	let elementos = document.getElementsByTagName("option");
	for(let i=0; i<elementos.length; i++){
		if(elementos[i].value == localStorage.getItem("order")){
			elementos[i].setAttribute("selected", "");
			modificaOrden(localStorage.getItem("order"));
		}
	}
}

//Modificacion de llamadas AJAX de mostrar tarjetas
export function ordenacion(classId) {
  $(classId).change(function(){
	localStorage.setItem("order", $(this).find("option:selected").attr("value"))
	modificaOrden(localStorage.getItem("order"));
	generadorCard();
	
  });
}