
let localStorage= window.localStorage;

//Cada vez que se visualice la web recordará la selección que se hizo de orden
export function selectSeleccionado(){
	let elementos = document.getElementsByTagName("option");
	for(let i=0; i<elementos.length; i++){
		if(elementos[i].value == localStorage.getItem("order")){
			elementos[i].setAttribute("selected", "");
		}
	}
}

export function ordenacion(classId) {
  $(classId).change(function(){
	localStorage.setItem("order", $(this).find("option:selected").attr("value"))
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}