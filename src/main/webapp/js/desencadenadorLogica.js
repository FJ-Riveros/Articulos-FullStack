import { aplicaEventListennersYFiltros } from "./aplicaEventsYFiltros.js";
import { generadorCard } from "./adjuntaTarjetas.js";

$().ready(() => {
  //Esta funcion aplica los Event Listenners y filtros a todos los campos del form
  aplicaEventListennersYFiltros();
  //Cargamos directamente las tarjetas de la BDD
  generadorCard();
});
