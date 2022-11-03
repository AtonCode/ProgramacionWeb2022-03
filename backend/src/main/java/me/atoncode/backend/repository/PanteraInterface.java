package me.atoncode.backend.repository;
import me.atoncode.backend.model.Pantera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PanteraInterface extends JpaRepository<Pantera, Integer> {

}