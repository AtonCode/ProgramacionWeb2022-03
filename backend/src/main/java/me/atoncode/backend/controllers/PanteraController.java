package me.atoncode.backend.controllers;

import lombok.AllArgsConstructor;
import me.atoncode.backend.model.Pantera;
import me.atoncode.backend.service.PanteraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/pantera")
public class PanteraController {
    @Autowired
    private final PanteraService servicio;
    @GetMapping
    public List<Pantera> EncontrarTodos(){return servicio.BuscarTodos();}
    @GetMapping("/{id}")
    public Pantera BuscarPantera(@PathVariable("id")int id){
        return servicio.BuscarPantera(id);
    }
    @PostMapping(consumes="application/json")
    public Pantera CrearPantera(@RequestBody Pantera pantera){return servicio.CrearPantera(pantera);}
    @DeleteMapping("/{id}")
    public boolean EliminarProducto(@PathVariable("id") int id){return servicio.EliminarPantera(id);}
}