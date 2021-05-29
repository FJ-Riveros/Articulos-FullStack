import { adjuntarTarjeta } from "./adjuntaTarjetas.js";
import { vaciarCampos, eliminaError } from "./modificadoresVisualesCampos.js";
import { rellenaCamposModificacion } from "./rellenaCamposModificacion.js";
import {devuelveArticulos, borraArticulo} from "./AJAX.js";


//Recorre el registro y muestra todas las Cards
export function muestraCardsActuales() {
	return new Promise(resolve =>{
	//Devuelve los artículos alojados en la BDD
  	devuelveArticulos().then(articulos=>{
  	$.each(articulos, (index, articulo) =>{
    	adjuntarTarjeta(articulo);
 	 })
 	 resolve(true);
  })})
  
}

//Elimina la visualización de las Cards
export function destruyeDisplayCards() {
  $(".tarjetas").html("");
}

//Sirve para almacenar el valor de la tarjeta que ha solicitado una modificación
var id;
//Aplica los listenners de las Cards
export async function listennerCard(idCard) {
	
  $(`${idCard} div.card-header span.modify`).click(function (e) {
    e.preventDefault();
    id = $(this).parents(".card").attr("id").slice(5);

    //Rellenamos los campos del OffCanvas con los datos originales de la tarjeta a modificar
    rellenaCamposModificacion(id);

    var myOffcanvas = document.getElementById("offcanvasRight");

    //Listenner para cuando el offcanvas sea abierto
    myOffcanvas.addEventListener("shown.bs.offcanvas", function () {
      //Vaciamos todos los campos
      vaciarCampos(".form-control");

      //Reseteamos los colores y mensajes del form
      eliminaError(".form-control");
    });
    //Listenner para cuando el offcanvas sea cerrado
    myOffcanvas.addEventListener("hidden.bs.offcanvas", function () {
      //Vaciamos todos los campos
      vaciarCampos(".groupModificacion");

      //Reseteamos los colores y mensajes del form
      eliminaError(".groupModificacion");
    });
  });

  //Funcionalidad de añadir al carrito
  /*$(`${idCard} div.card-header img.addIcon`).click( function () {
    
  });*/

//Funcionalidad de borrado
  $(`${idCard} div.card-header img.delete`).click( function () {
    let id = $(this).parents(".card").attr("id").slice(5);
    //Eliminamos la entrada y mostramos las cards
    eliminaRegistro(id);
  });

  //Listenner del card para mostrar los iconos
  $(idCard).hover(
    function () {
      // over
      $(`#${$(this).attr("id")} div.card-header img`).css("display", "unset");
      $(`#${$(this).attr("id")} div.card-header span`).css("display", "unset");
    },
    function () {
      // out
      $(`#${$(this).attr("id")} div.card-header img`).css("display", "none");
      $(`#${$(this).attr("id")} div.card-header span`).css("display", "none");
    }
  );
}

//Elimina el registro deseado
function eliminaRegistro(id) {
  borraArticulo(id);
}

export async function presentacionCards(nameCard) {
  //Elimina el display de las Cards
  destruyeDisplayCards();
    
  //Muestra las Cards alojadas en la BDD
  let esperaCards = await muestraCardsActuales();
  
  //Listenner del contenido de las cards
  listennerCard(".card");
}

//Nos devuelve el ID de la tarjeta que ha solicitado una modificación
export function IDTarjetaAModificar() {
  return id;
}
