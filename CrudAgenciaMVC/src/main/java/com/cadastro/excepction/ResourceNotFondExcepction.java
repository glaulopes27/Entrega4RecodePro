package com.cadastro.excepction;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFondExcepction extends RuntimeException {

	private static final long serialVersionUID = 1L;
	private String resourceName;
	private String fieldName;
	private long fieldValue;

	public ResourceNotFondExcepction(String resourceName, String fieldName, long id_cliente) {
		super(String.format("%s nao encontrado com %s :'%s'", resourceName, fieldName, id_cliente));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = id_cliente;
	}

	public String getResourceName() {
		return resourceName;
	}

	public String getFieldName() {
		return fieldName;
	}

	public long getFieldValue() {
		return fieldValue;
	}

}
