package com.wakanda.dao;

import com.wakanda.model.Pantera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PanteraInterface extends JpaRepository<Pantera, Integer> {
	
	Pantera findByUsername(String username);
	
}