/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.pruebaicfes.crud.dao;


import com.pruebaicfes.crud.Model.Producto;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author julia
 */
public interface ProductoDao extends CrudRepository<Producto, Integer>{
    
}
