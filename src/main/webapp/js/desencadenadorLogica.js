import { aplicaEventListennersYFiltros } from "./aplicaEventsYFiltros.js";
//import {devuelveArticulos} from "./AJAX.js";
$().ready(() => {
  //Esta funcion aplica los Event Listenners y filtros a todos los campos del form
  aplicaEventListennersYFiltros();
  //devuelveArticulos();
});
