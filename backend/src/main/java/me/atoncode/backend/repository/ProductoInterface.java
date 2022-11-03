package me.atoncode.backend.repository;

import me.atoncode.backend.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoInterface extends JpaRepository<Producto, Integer> {
}
