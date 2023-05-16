/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.pruebaicfes.crud.Service;

import com.pruebaicfes.crud.Model.Producto;
import com.pruebaicfes.crud.dao.ProductoDao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author julia
 */
@Service
public class ProductoServiceImplement implements ProductoService{
    @Autowired
    private ProductoDao productoDao;
    
    @Override
    @Transactional(readOnly=true)
    public List<Producto> findAll()
    {
        return (List<Producto>) productoDao.findAll();
    }
    
    @Override
    @Transactional(readOnly=false)
    public Producto save(Producto producto)
    {
        return productoDao.save(producto);
    }
    
    @Override
    @Transactional(readOnly=true)
    public Producto findById(Integer id)
    {
        return productoDao.findById(id).orElse(null);
    }
    
    @Override
    @Transactional(readOnly=false)
    public void delete (Integer id)
    {
        productoDao.deleteById(id);
    }
    
    
}
