package com.ecodeup.articulos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
 
import com.ecodeup.articulos.model.Articulo;
import com.ecodeup.articulos.model.Conexion;
 
/*
 * @autor: Elivar Largo
 * @web: www.ecodeup.com
 */
 
public class ArticuloDAO {
	private Conexion con;
	private Connection connection;
 
	public ArticuloDAO(String jdbcURL, String jdbcUsername, String jdbcPassword) throws SQLException {
		con = new Conexion(jdbcURL, jdbcUsername, jdbcPassword);
	}
 
	// insertar art�culo
	public boolean insertar(Articulo articulo) throws SQLException {
		String sql = "INSERT INTO articuloscards (ID, nomArticulo, descripcionArticulo, precioArticulo, stockArticulo) VALUES (?,?,?,?,?)";
		
		con.conectar();
		connection = con.getJdbcConnection();
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setString(1, null);
		statement.setString(2, articulo.getNombre());
		statement.setString(3, articulo.getDescripcion());
		statement.setDouble(4, articulo.getPrecio());
		statement.setInt(5, articulo.getExistencia());
		
		boolean rowInserted = statement.executeUpdate() > 0;
		statement.close();
		con.desconectar();
		return rowInserted;
	}
 
	// listar todos los productos
	public List<Articulo> listarArticulos() throws SQLException {
 
		List<Articulo> listaArticulos = new ArrayList<Articulo>();
		String sql = "SELECT * FROM articuloscards";
		con.conectar();
		connection = con.getJdbcConnection();
		Statement statement = connection.createStatement();
		ResultSet resulSet = statement.executeQuery(sql);
 
		while (resulSet.next()) {
			int id = resulSet.getInt("ID");
			String nombre = resulSet.getString("nomArticulo");
			String descripcion = resulSet.getString("descripcionArticulo");
			Double precio = resulSet.getDouble("precioArticulo");
			int existencia = resulSet.getInt("stockArticulo");
			Articulo articulo = new Articulo(id, nombre, descripcion, precio, existencia);
			listaArticulos.add(articulo);
		}
		con.desconectar();
		return listaArticulos;
	}
 
	// obtener por id
	public Articulo obtenerPorId(int id) throws SQLException {
		Articulo articulo = null;
 
		String sql = "SELECT * FROM articuloscards WHERE ID=?";
		con.conectar();
		connection = con.getJdbcConnection();
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setInt(1, id);
 
		ResultSet res = statement.executeQuery();
		if (res.next()) {
			articulo = new Articulo(res.getInt("ID"), res.getString("nomArticulo"),
					res.getString("descripcionArticulo"), res.getDouble("precioArticulo"), res.getInt("stockArticulo"));
		}
		res.close();
		con.desconectar();
 
		return articulo;
	}
 
	// actualizar
	public boolean actualizar(Articulo articulo) throws SQLException {
		boolean rowActualizar = false;
		String sql = "UPDATE articuloscards SET nomArticulo=?,descripcionArticulo=?,precioArticulo=?, stockArticulo=? WHERE ID=?";
		con.conectar();
		connection = con.getJdbcConnection();
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setString(1, articulo.getNombre());
		statement.setString(2, articulo.getDescripcion());
		statement.setDouble(3, articulo.getPrecio());
		statement.setDouble(4, articulo.getExistencia());
		statement.setInt(5, articulo.getId());
 
		rowActualizar = statement.executeUpdate() > 0;
		statement.close();
		con.desconectar();
		return rowActualizar;
	}
	
	//eliminar
	public boolean eliminar(Articulo articulo) throws SQLException {
		boolean rowEliminar = false;
		String sql = "DELETE FROM articuloscards WHERE ID=?";
		con.conectar();
		connection = con.getJdbcConnection();
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setInt(1, articulo.getId());
 
		rowEliminar = statement.executeUpdate() > 0;
		statement.close();
		con.desconectar();
 
		return rowEliminar;
	}
	
	//Obtenemos si el nombre ya est� registrado en la BDD
	public boolean obtenerPorNombre(String nombre) throws SQLException {
	  boolean resultado = false;
	  String sql = "SELECT nomArticulo FROM articuloscards WHERE nomArticulo =?";
	  con.conectar();
	  connection = con.getJdbcConnection();
	  PreparedStatement statement = connection.prepareStatement(sql);
	  statement.setString(1, nombre);
	  ResultSet resulSet = statement.executeQuery();
	  if(resulSet.next()) {
	    resultado = true; 
	  }
	  statement.close();
	  con.desconectar();
	  return resultado;
	}
	
}