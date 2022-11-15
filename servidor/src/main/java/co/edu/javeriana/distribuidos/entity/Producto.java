package co.edu.javeriana.distribuidos.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;
@Getter
@Setter
@Entity
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private float existencias;

    public Producto() {
    }

    public Producto(String nombre, float Existencias) {
        this.nombre = nombre;
        this.existencias = Existencias;
    }
}
