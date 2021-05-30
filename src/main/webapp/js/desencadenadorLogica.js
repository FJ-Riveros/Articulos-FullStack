import { aplicaEventListennersYFiltros } from "./aplicaEventsYFiltros.js";
import { generadorCard } from "./adjuntaTarjetas.js";
import {selectSeleccionado} from "./ordenacionCards.js";
import {muestraCarrito} from "./carrito.js";
$().ready(() => {
  //Esta funcion aplica los Event Listenners y filtros a todos los campos del form
  aplicaEventListennersYFiltros();

  //Recuerda la ordenación de las Cards y la refleja en el select
  selectSeleccionado();

  //Cargamos directamente las tarjetas de la BDD
  generadorCard();


  //Listenner del botón del carrito para hacer el fetch de los articulos
  $("#botonMuestraCarrito").click(async function(){
	let muestra = await muestraCarrito();
	$("#carritoModal").modal('show');
	});	

  /*Aplica el listenner al switch de cambio de tema*/
  $("#chk").change(() =>{
    document.body.classList.toggle('dark');
  });
});
