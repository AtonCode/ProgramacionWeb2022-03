package com.wakanda.controller;

import java.util.List;
import com.wakanda.model.Pantera;
import com.wakanda.service.PanteraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.wakanda.config.JwtTokenUtil;
import com.wakanda.model.JwtRequest;
import com.wakanda.model.JwtResponse;
import com.wakanda.model.UserPantera;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private PanteraService panteraService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = panteraService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserPantera user) throws Exception {
		return ResponseEntity.ok(panteraService.CrearPantera(user));
	}


	@GetMapping("/pantera")
	public List<Pantera> EncontrarTodos(){return panteraService.BuscarTodos();}
	
	@GetMapping("/pantera/{id}")
	public Pantera BuscarPantera(@PathVariable("id")int id){
		return panteraService.BuscarPantera(id);
	}
	@DeleteMapping("/pantera/{id}")
	public boolean EliminarPantera(@PathVariable("id") int id){return panteraService.EliminarPantera(id);}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}