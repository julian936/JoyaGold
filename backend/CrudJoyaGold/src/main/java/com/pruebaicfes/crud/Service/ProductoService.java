/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.pruebaicfes.crud.Service;

import com.pruebaicfes.crud.Model.Producto;
import java.util.List;

/**
 *
 * @author julia
 */
public interface ProductoService {
    public List<Producto> findAll();
    public Producto save(Producto producto);
    public Producto findById(Integer id);
    public void delete(Integer id);
}
