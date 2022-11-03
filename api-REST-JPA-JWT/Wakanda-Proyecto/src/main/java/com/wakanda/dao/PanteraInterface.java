package com.wakanda.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wakanda.model.Pantera;

@Repository
public interface PanteraInterface extends JpaRepository<Pantera, Integer> {
	
	Pantera findByUsername(String username);
	
}