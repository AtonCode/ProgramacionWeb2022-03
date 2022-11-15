package co.edu.javeriana.distribuidos.security.dto;

import javax.validation.constraints.NotBlank;
import lombok.*;
@Getter
@Setter
public class LoginUsuario {
    @NotBlank
    private String nombreUsuario;
    @NotBlank
    private String password;

}
