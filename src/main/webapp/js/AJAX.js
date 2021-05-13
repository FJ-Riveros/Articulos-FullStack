
var articulosRecibidos;
export let devuelveArticulos = () => {
	
	/*$.get("adminArticulo", {action: "enviarArticulos"}).done((articulos)=>{
	$.each(articulos, (index, articulo) =>{
		console.log(articulo);
	})
	})*/
	
	
	
	
	/*$.get("adminArticulo", {action: "enviarArticulos"}, function(articulos){
		guardaArticulos(articulos);
		
	})*/
	
	let guardaArticulos = (input) =>{
		articulosRecibidos = input;
	}
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