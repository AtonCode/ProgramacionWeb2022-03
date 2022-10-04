package me.atoncode.backend.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @JsonIgnore
    private String password;
}