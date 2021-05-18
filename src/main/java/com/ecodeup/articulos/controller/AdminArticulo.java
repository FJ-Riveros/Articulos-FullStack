package com.ecodeup.articulos.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
 
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import com.ecodeup.articulos.dao.ArticuloDAO;
import com.ecodeup.articulos.model.Articulo;
import com.google.gson.Gson;
import com.mysql.fabric.xmlrpc.base.Param;
 
/**
 * Servlet implementation class AdminArticulo
 */
@WebServlet("/adminArticulo")
public class AdminArticulo extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ArticuloDAO articuloDAO;
 
	public void init() {
		String jdbcURL = getServletContext().getInitParameter("jdbcURL");
		String jdbcUsername = getServletContext().getInitParameter("jdbcUsername");
		String jdbcPassword = getServletContext().getInitParameter("jdbcPassword");
		try {
 
			articuloDAO = new ArticuloDAO(jdbcURL, jdbcUsername, jdbcPassword);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
 
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AdminArticulo() {
		super();
		// TODO Auto-generated constructor stub
	}
 
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String action = request.getParameter("action");
		
		try {
			switch (action) {
			
			case "register":
				registrar(request, response);
				break;
			
			case "editar":
				editar(request, response);
				break;
			case "enviarArticulos":
				enviarArticulos(request, response);
				break;
			case "borrarArticulo":
        eliminaArticulo(request, response);
        break;
			
			case "devuelveArticulo":
			  devuelveArticulo(request, response);
				break;
				
			default:
			}			
		} catch (SQLException e) {
			e.getStackTrace();
		}
		
	}
 
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
	
	private void registrar(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
		Articulo articulo = new Articulo(0, request.getParameter("nombre"), request.getParameter("descripcion"), Double.parseDouble(request.getParameter("precio")), Integer.parseInt(request.getParameter("cantidad")));
		articuloDAO.insertar(articulo);
	}
	
	private void editar(HttpServletRequest request, HttpServletResponse response) throws SQLException, ServletException, IOException{
		Articulo articulo = new Articulo(Integer.parseInt(request.getParameter("id")), request.getParameter("nombre"), request.getParameter("descripcion"), Double.parseDouble(request.getParameter("precio")), Integer.parseInt(request.getParameter("existencia")));
		articuloDAO.actualizar(articulo);
	}
	
	private void enviarArticulos(HttpServletRequest request, HttpServletResponse response) throws SQLException, ServletException, IOException{
		List<Articulo> listaArticulos= articuloDAO.listarArticulos();
		response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
	    String json = new Gson().toJson(listaArticulos);
	    response.getWriter().write(json);
	}
	
	private void eliminaArticulo(HttpServletRequest request, HttpServletResponse response) throws SQLException, ServletException, IOException{
	  Articulo articulo = articuloDAO.obtenerPorId(Integer.parseInt(request.getParameter("idArticulo")));
    articuloDAO.eliminar(articulo);
  }
	
	private void devuelveArticulo(HttpServletRequest request, HttpServletResponse response) throws SQLException, ServletException, IOException{
	  Articulo articuloDeseado= articuloDAO.obtenerPorId(Integer.parseInt(request.getParameter("identificador")));
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    String json = new Gson().toJson(articuloDeseado);
    response.getWriter().write(json);  
	}
}