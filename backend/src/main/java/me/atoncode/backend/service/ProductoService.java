package me.atoncode.backend.service;

import me.atoncode.backend.model.Producto;
import me.atoncode.backend.repository.ProductoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {
    @Autowired
    private ProductoInterface productoInterface;

    public List<Producto> BuscarTodosProductos() {
        return productoInterface.findAll();
    }

    public Producto BuscarProducto(int id) {
        return productoInterface.findById(id).orElse(null);
    }
    public Producto CrearProducto(Producto producto){
        return productoInterface.save(producto);
    }
    public boolean EliminarProducto(int id){
        if ((productoInterface.findById(id).orElse(null))!=null){
            productoInterface.deleteById(id);
            return true;
        }
        return false;
    }

    public int NumeroProductos() {
        return productoInterface.findAll().size();
    }
}
