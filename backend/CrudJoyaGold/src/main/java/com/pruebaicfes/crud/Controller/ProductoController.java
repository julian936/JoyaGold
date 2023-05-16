/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.pruebaicfes.crud.Controller;

import com.pruebaicfes.crud.Model.Producto;
import com.pruebaicfes.crud.Service.ProductoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author julia
 */
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api")
public class ProductoController {
    @Autowired
    private ProductoService productoService;
    
    //listar
    @GetMapping("/productos")
    public List<Producto> listar()
    {
        return productoService.findAll();
    }
    
    //guardar
    @PostMapping("/productos")
    public  Producto guardar(@RequestBody Producto producto)
    {
        return productoService.save(producto);
    }
    
    //get una tarea
    @GetMapping("/productos/{id}")
    public Producto getUnProducto(@PathVariable Integer id)
    {
        return productoService.findById(id);
    }
    
    //Modeficar
    @PutMapping("/productos/{id}")
    public Producto modifecar(@RequestBody Producto producto,@PathVariable Integer id)
    {
        Producto productoActual= productoService.findById(id);
        productoActual.setNombre(producto.getNombre());
        productoActual.setMaterial(producto.getMaterial());
        productoActual.setTipo(producto.getTipo());
        productoActual.setPrecio(producto.getPrecio());
        productoActual.setConsumidor(producto.getConsumidor());
        productoActual.setReferencia(producto.getReferencia());
        productoActual.setColor(producto.getColor());
        return productoService.save(productoActual);
    }
    
            
    
    @DeleteMapping("/productos/{id}")
    public void eliminar(@PathVariable Integer id)
    {
        productoService.delete(id);
    }
    
}
