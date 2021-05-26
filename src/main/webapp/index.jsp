<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE>
<html>
<head>
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Artículos Java Web JSP y Servlet</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  
</head>
<body>
	
	<form action="adminArticulo?action=register" method="post">
    <div class="container-md mt-4">
      <div class="row d-flex align-items-center">
      	<div class=" col-md-4">
      	  <h1>Alta Productos</h1>
      	</div>
      	
      	<div class="col-md-2 offset-md-6 flex-end">
			<input type="checkbox" class="checkbox" id="chk" />
			<label class="label" for="chk">
				<i class="fas fa-moon"></i>
				<i class="fas fa-sun"></i>
				<div class="ball"></div>
			</label>
		</div>

      </div>
      <div class="mb-3 col-6">
        <label for="labelNombre" class="form-label">Nombre</label>
        <input type="text" class="form-control form-control-sm" id="nombre"
          name="nombre" placeholder="No se admiten números ni carácteres especiales" required>
      </div>
      <div class="mb-3 col-12">
        <label for="labelDescripcion" class="form-label">Descripción</label>
        <textarea style="resize: none" class="form-control" id="descripcion" name="descripcion" rows="6"
          placeholder="Máximo de 100 carácteres" required></textarea>
      </div>
      <div class="mb-3 col-8">
        <label for="labelPrecio" class="form-label">Precio</label>
        <input type="text" class="form-control w-25" name="precio" id="precio" placeholder="" required>
      </div>
      <label for="labelStock" class="form-label">Stock</label>
      <div class="row align-items-end ">
        <div class="pe-0 col-4">
          <input type="text" class="form-control w-50" name="cantidad" id="stock" placeholder="" required>
        </div>
        <div class="col-md-2 offset-md-6 " id="barraEnviar">
          <button type="submit" class="btn btn-primary btn-md" id="enviar">Añadir</button>
        </div>
     </div>
     </div>
  </form>
  <!---->
  
  <!--Campo donde se almacenan las tarjetas-->
  <div class="container-md mt-4">
  <!-- Select del orden -->
  <label for="labelSelect" class="form-label">Ordenación</label>
  <select class="form-select form-select-sm" aria-label="Ordenar por:">
    <option selected value="Default">Creación</option>
    <option value="1">Nombre</option>
    <option value="2">Precio Ascendente</option>
    <option value="3">Precio Descendente</option>
    <option value="4">Stock Ascendente</option>
    <option value="5">Stock Descendente</option>
  </select>
  <!--  -->
  <div class="row tarjetas mt-4"></div>
  </div>
  <!---->
  <!--Offcanvas para la modificación de tarjetas, normalmente está oculto-->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Modificación</h5>
      <button type="button" class="btn-close text-reset" id="closeWindow" data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form action="#index" method="get" accept-charset=utf-8>
        <div class="container mt-4">
          <div class="mb-3 col-12">
            <label for="labelNombre" class="form-label saltoLinea">Nombre</label>
            <input type="text" class="form-control-sm groupModificacion" id="nombreModificacion"
              placeholder="No se admiten números ni carácteres especiales">
          </div>
          <div class="mb-3 col-12">
            <label for="labelDescripcion" class=" form-label saltoLinea">Descripción</label>
            <textarea style="resize: none" class="form-control-sm groupModificacion" id="descripcionModificacion"
              rows="5" cols="30" placeholder="Máximo de 100 carácteres"></textarea>
          </div>
          <div class="mb-3 col-10">
            <label for="labelPrecioModificacion" class="form-label saltoLinea">Precio</label>
            <input type="text" class="form-control-sm groupModificacion" id="precioModificacion" placeholder="">
          </div>
          <div class="mb-3 col-10 ">
            <label for="labelStock" class="form-label saltoLinea">Stock</label>
            <input type="text" class="form-control-sm groupModificacion" id="stockModificacion" placeholder="">
          </div>
          <div class="mb-3 col-md-2 " id="barraEnviarModificacion">
            <button type="submit" class="btn btn-primary btn-md" id="enviarModificacion">Guardar</button>
          </div>
          </div>
      </form>
    </div>
  </div>
  <!---->



  <script type="module" src="${pageContext.request.contextPath}/js/desencadenadorLogica.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
    crossorigin="anonymous"></script>
</body>
</html>