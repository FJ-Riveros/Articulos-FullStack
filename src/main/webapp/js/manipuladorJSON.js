//Array donde almacenamos las entradas
export var entradas = [];

//Función que recibe los .value del form y los formatea a JSON para añadirlos a las entradas
export let creaNuevaEntrada = (
  nombreInput,
  descripcionInput,
  precioInput,
  stockInput
) => {
  let nuevoItem = {
    nombre: nombreInput,
    descripcion: descripcionInput,
    precio: precioInput,
    stock: stockInput,
  };

  //LLamamos a la función que agrega el new item a nuestro registro
  addNuevaEntrada(nuevoItem);
};

//Añade la nueva entrada al array de entradas
let addNuevaEntrada = (nuevaEntrada) => entradas.push(nuevaEntrada);

//Devolvemos el registro
export var obtenerEntradas = () => entradas;

//Modificamos las entradas
export var eliminaEntrada = (id) => {
  entradas.splice(id, 1);
};

export var modificaEntrada = (
  id,
  nuevoNombre,
  nuevaDescripcion,
  nuevoPrecio,
  nuevoStock
) => {
  (entradas[id].nombre = nuevoNombre),
    (entradas[id].descripcion = nuevaDescripcion),
    (entradas[id].precio = nuevoPrecio),
    (entradas[id].stock = nuevoStock);
};

export const busquedaNombreExistente = (nombreInput) => {
  let entradas = obtenerEntradas();
  /*entradas.forEach((element) => {
    if (element.nombre == nombreInput) return true;
  });*/
  for (let i = 0; i < entradas.length; i++) {
    if (entradas[i].nombre == nombreInput) return true;
  }
  console.log(obtenerEntradas());
  console.log(nombreInput);
  return false;
};
