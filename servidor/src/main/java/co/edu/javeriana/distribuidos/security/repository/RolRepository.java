package co.edu.javeriana.distribuidos.security.repository;

import co.edu.javeriana.distribuidos.security.entity.Rol;
import co.edu.javeriana.distribuidos.security.enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
