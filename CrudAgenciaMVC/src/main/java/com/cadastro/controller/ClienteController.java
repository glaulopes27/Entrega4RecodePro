package com.cadastro.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cadastro.model.Cliente;
import com.cadastro.service.ClienteService;

@RestController
@RequestMapping("api/cliente")
@CrossOrigin("*")
public class ClienteController {

	@GetMapping("/home")
	public String hello() {
		return "oi";
	}

	private ClienteService service;
	
	public ClienteController(ClienteService service) {
		super();
		this.service = service;
	}

	// localhost:8080/api/cliente
	@GetMapping
	public ResponseEntity<List<Cliente>> findAll() {
		List<Cliente> cliente = service.getAllCliente();
		return ResponseEntity.ok().body(cliente);
	}
}
