package com.wakanda.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "pantera")
public class

Pantera {

	@Id
	private int id;
	private String username;
	@JsonIgnore
	private String password;
}