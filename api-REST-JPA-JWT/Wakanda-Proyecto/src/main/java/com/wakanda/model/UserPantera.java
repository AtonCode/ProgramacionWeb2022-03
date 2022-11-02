package com.wakanda.model;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserPantera {
	private int id;
	private String username;
	private String password;
}