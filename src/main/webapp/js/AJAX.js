

export let devuelveArticulos = () => {
	var articulosRecibidos;
	/*$.get("adminArticulo", {action: "enviarArticulos"}).done((articulos)=>{
	$.each(articulos, (index, articulo) =>{
		console.log(articulo);
	})
	})*/
	$.get("adminArticulo", {action: "enviarArticulos"}, function(articulos){
		guardaArticulos(articulos);
		
	})
	
	let guardaArticulos = (input) =>{
		articulosRecibidos = input;
	}
	console.log(articulosRecibidos + "no");
	return articulosRecibidos;
}