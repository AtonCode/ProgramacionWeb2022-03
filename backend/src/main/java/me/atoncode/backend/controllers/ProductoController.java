package me.atoncode.backend.controllers;

import lombok.AllArgsConstructor;
import me.atoncode.backend.model.Producto;
import me.atoncode.backend.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController

public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/producto")
    public List<Producto> EncontrarTodosProductos(){return productoService.BuscarTodosProductos();}

    @GetMapping("/producto/{id}")
    public Producto BuscarProducto(@PathVariable("id")int id){
        return productoService.BuscarProducto(id);
    }
    @GetMapping("/producto/maxId")
    //Devolver el numero de productos
    public int NumeroProductos(){
        return productoService.NumeroProductos();
    }

    @PostMapping("/producto/crear")
    public Producto CrearProducto(@RequestBody Producto producto){
        return productoService.CrearProducto(producto);
    }

    @DeleteMapping("/producto/delete/{id}")
    public void EliminarProducto(@PathVariable("id")int id){
        productoService.EliminarProducto(id);
    }
}

