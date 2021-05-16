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
		System.out.println("Ejecutando el init");
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
			case "index":
				index(request, response);
				break;
			case "nuevo":
				System.out.print("Response: " + response);
				nuevo(request, response);
				break;
			case "register":
				registrar(request, response);
				break;
			case "mostrar":
				mostrar(request, response);
				break;
			case "showedit":
				showEditar(request, response);
				break;	
			case "editar":
				editar(request, response);
				break;
			case "eliminar":
				eliminar(request, response);
				break;
			case "enviarArticulos":
				enviarArticulos(request, response);
				break;
			case "borrarArticulo":
        eliminaArticulo(request, response);
        break;
			default:
				break;
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
	
	private void index (HttpServletRequest request, HttpServletResponse response) throws SQLException, ServletException, IOException{
		RequestDispatcher dispatcher= request.getRequestDispatcher("index.jsp");
		List<Articulo> listaArticulos= articuloDAO.listarArticulos();
		request.setAttribute("lista", listaArticulos);
		dispatcher.forward(request, response);
	}
 
	private void registrar(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
		Articulo articulo = new Articulo(0, request.getParameter("nombre"), request.getParameter("descripcion"), Double.parseDouble(request.getParameter("precio")), Integer.parseInt(request.getParameter("cantidad")));
		articuloDAO.insertar(articulo);
	}
	
	private void nuevo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
		RequestDispatcher dispatcher = request.getRequestDispatcher("/vista/register.jsp");
		dispatcher.forward(request, response);
	}
	
	
	private void mostrar(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException , ServletException{
		RequestDispatcher dispatcher = request.getRequestDispatcher("/vista/mostrar.jsp");
		List<Articulo> listaArticulos= articuloDAO.listarArticulos();
		request.setAttribute("lista", listaArticulos);
		dispatcher.forward(request, response);
	}	
	
	private void showEditar(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
		Articulo articulo = articuloDAO.obtenerPorId(Integer.parseInt(request.getParameter("id")));
		request.setAttribute("articulo", articulo);
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/vista/editar.jsp");
		dispatcher.forward(request, response);
	}
	
	private void editar(HttpServletRequest request, HttpServletResponse response) throws SQLException, ServletException, IOException{
		Articulo articulo = new Articulo(Integer.parseInt(request.getParameter("id")), request.getParameter("nombre"), request.getParameter("descripcion"), Double.parseDouble(request.getParameter("precio")), Integer.parseInt(request.getParameter("existencia")));
		articuloDAO.actualizar(articulo);
		index(request, response);
	}
	
	private void eliminar(HttpServletRequest request, HttpServletResponse response) throws SQLException, ServletException, IOException{
		//Si el usuario refresca la p�gina despu�s de borrar un art�culo el servidor no cae, porque se comprueba que el ID a borrar exista.
				if(articuloDAO.obtenerPorId(Integer.parseInt(request.getParameter("id"))) == null) {
					RequestDispatcher dispatcher = request.getRequestDispatcher("adminArticulo?action=mostrar");
					dispatcher.forward(request, response);
				}else {
					Articulo articulo = articuloDAO.obtenerPorId(Integer.parseInt(request.getParameter("id")));
					articuloDAO.eliminar(articulo);
					RequestDispatcher dispatcher = request.getRequestDispatcher("adminArticulo?action=mostrar");
					dispatcher.forward(request, response);
				}
		
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
	
}