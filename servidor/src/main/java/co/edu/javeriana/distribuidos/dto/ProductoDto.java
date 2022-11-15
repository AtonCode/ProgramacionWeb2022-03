package co.edu.javeriana.distribuidos.dto;

import lombok.*;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ProductoDto {

    @NotBlank
    private String nombre;
    @Min(0)
    private Float existencias;

}
