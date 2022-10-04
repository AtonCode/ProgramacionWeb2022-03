package me.atoncode.backend.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Pantera {
    @Id
    private int id;
    private String username;
}