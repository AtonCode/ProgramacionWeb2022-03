package co.edu.javeriana.distribuidos.security.service;

import co.edu.javeriana.distribuidos.security.repository.RolRepository;
import co.edu.javeriana.distribuidos.security.entity.Rol;
import co.edu.javeriana.distribuidos.security.enums.RolNombre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class RolService {

    @Autowired
    RolRepository rolRepository;

    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return rolRepository.findByRolNombre(rolNombre);
    }

    public void save(Rol rol){
        rolRepository.save(rol);
    }
}
