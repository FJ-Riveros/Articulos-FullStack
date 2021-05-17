

let comprobacion = [false, false, false, false];

export let modificaComprobacion = (posicionAmodificar, valor) =>{
	comprobacion[posicionAmodificar] = valor;
}

//Resetea la comprobación una vez que se adjunte un articulo
export let reseteaComprobacion = () => {
	for(let x = 0; x<comprobacion.length; x++) comprobacion[x] = false;
}


//Devuelve true si todos los campos del form están correctamente rellenados
export let validaComprobacion = () =>{
console.log(comprobacion);
	/*comprobacion.forEach(elemento =>{
		if(elemento === false){
			return false;
		}
	return true;
	})*/
	for(let y = 0; y<comprobacion.length; y++){
		if(comprobacion[y] === false){
		  return false;
		}
	}
	return true;
}
