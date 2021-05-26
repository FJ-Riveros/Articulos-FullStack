import { aplicaEventListennersYFiltros } from "./aplicaEventsYFiltros.js";
import { generadorCard } from "./adjuntaTarjetas.js";
import {selectSeleccionado} from "./ordenacionCards.js";
$().ready(() => {
  //Esta funcion aplica los Event Listenners y filtros a todos los campos del form
  aplicaEventListennersYFiltros();
  //Cargamos directamente las tarjetas de la BDD
  generadorCard();

  selectSeleccionado();
  /*Aplica el listenner al switch de cambio de tema*/
  $("#chk").change(() =>{
    document.body.classList.toggle('dark');
  });
});
