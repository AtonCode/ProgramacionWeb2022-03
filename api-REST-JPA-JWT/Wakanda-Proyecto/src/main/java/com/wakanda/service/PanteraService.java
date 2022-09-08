package com.wakanda.service;

import java.util.ArrayList;
import java.util.List;

import com.wakanda.model.UserPantera;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wakanda.dao.PanteraInterface;
import com.wakanda.model.Pantera;

@Service
public class PanteraService implements UserDetailsService {

	@Autowired
	private PanteraInterface panteraInterface;
	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Pantera user = panteraInterface.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	public Pantera CrearPantera(UserPantera user) {
		Pantera newUser = new Pantera();
		newUser.setId(user.getId());
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return panteraInterface.save(newUser);

	}
	public List<Pantera> BuscarTodos() {
		return panteraInterface.findAll();
	}
	public Pantera BuscarPantera(int id) {
		return panteraInterface.findById(id).orElse(null);
	}
	public boolean EliminarPantera(int id){
		if ((panteraInterface.findById(id).orElse(null))!=null){
			panteraInterface.deleteById(id);
			return true;
		}
		return false;
	}
}