package me.atoncode.backend.controllers;

import lombok.AllArgsConstructor;
import me.atoncode.backend.model.Pantera;
import me.atoncode.backend.service.PanteraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController


public class PanteraController {

    @Autowired
    private PanteraService panteraService;

    @GetMapping("/pantera")
    public List<Pantera> EncontrarTodos(){return panteraService.BuscarTodos();}

    @GetMapping("/pantera/{id}")
    public Pantera BuscarPantera(@PathVariable("id")int id){
        return panteraService.BuscarPantera(id);
    }
    @GetMapping("/pantera/maxId")
    //Devolver el numero de panteras
    public int NumeroPanteras(){
        return panteraService.NumeroPanteras();
    }

    @PostMapping("/pantera/register")
    public Pantera CrearPantera(@RequestBody Pantera pantera){
        return panteraService.CrearPantera(pantera);
    }

    @DeleteMapping("/pantera/delete/{id}")
    public void EliminarPantera(@PathVariable("id")int id){
        panteraService.EliminarPantera(id);
    }
    
}