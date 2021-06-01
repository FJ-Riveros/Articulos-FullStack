//Funcionamiento del modal de confirmación de borrado

export function adjuntaTarjetaBorrado(infoTarjeta){
		let insertar = `
			<div class="innerConfirmacionBorrado">
			  <i class="fas fa-ban"></i>
			  <p class="font-weight-medium">¿Está seguro de borrar el artículo ${infoTarjeta.nombre}?<p>
			  <div class="d-flex justify-content-around">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
         		<button type="button" class="btn btn-primary" id="eliminarArticulosCarrito">Eliminar</button>
			  </div>
			</div>	
		`;
		$("#confirmacionBorrado").html(insertar);
		$("#modalBorrado").modal('show');
}