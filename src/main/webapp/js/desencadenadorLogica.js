import { aplicaEventListennersYFiltros } from "./aplicaEventsYFiltros.js";
import { generadorCard } from "./adjuntaTarjetas.js";
import {borraArticulo} from "./AJAX.js";
$().ready(() => {
  //Esta funcion aplica los Event Listenners y filtros a todos los campos del form
  aplicaEventListennersYFiltros();
  //Cargamos directamente las tarjetas de la BDD
  generadorCard();
  console.log("me ejecuto");
});
