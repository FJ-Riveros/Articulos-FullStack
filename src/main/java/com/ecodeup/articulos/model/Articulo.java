package com.ecodeup.articulos.model;

public class Articulo {
	private int id;
	private String nombre;
	private String descripcion;
	private int existencia;
	private double precio;
	
	public Articulo(int id, String nombre, String descripcion, double precio, int existencia) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.existencia = existencia;
		this.precio = precio;
	}
	//getters y setters
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public int getExistencia() {
		return existencia;
	}
	public void setExistencia(int existencia) {
		this.existencia = existencia;
	}
	public double getPrecio() {
		return precio;
	}
	public void setPrecio(double precio) {
		this.precio = precio;
	}
}