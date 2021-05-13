
var articulosRecibidos;
//Devuelve todos los artículos que se encuentran en la BDD
export let devuelveArticulos = () => {
	
	/*$.get("adminArticulo", {action: "enviarArticulos"}).done((articulos)=>{
	$.each(articulos, (index, articulo) =>{
		console.log(articulo);
	})
	})*/
	
	$.ajax({
    url: "adminArticulo",
    type: "GET",
    async: false, // set to false so order of operations is correct
    data: {action: "enviarArticulos"},
    success: function(data){
        articulosRecibidos = data;
    }})
	
	return articulosRecibidos;
}