package me.atoncode.backend.service;

import me.atoncode.backend.model.Pantera;
import me.atoncode.backend.repository.PanteraInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PanteraService {
    @Autowired
    private PanteraInterface panteraInterface;

    public List<Pantera> BuscarTodos() {
        return panteraInterface.findAll();
    }
    
    public Pantera BuscarPantera(int id) {
        return panteraInterface.findById(id).orElse(null);
    }
    public Pantera CrearPantera(Pantera pantera){
        return panteraInterface.save(pantera);
    }
    public boolean EliminarPantera(int id){
        if ((panteraInterface.findById(id).orElse(null))!=null){
            panteraInterface.deleteById(id);
            return true;
        }
        return false;
    }

    public int NumeroPanteras() {
        return panteraInterface.findAll().size();
    }
}
