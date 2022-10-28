package com.cadastro.service;

import java.util.List;

import com.cadastro.model.Cliente;



public interface ClienteService {
	Cliente saveCliente(Cliente cliente);
	List<Cliente>getAllCliente();
	Cliente getClienteById(long id_cliente);
	Cliente updateCliente(Cliente cliente, long id_cliente);
	void deleteCliente(long Id_cliente);

}

