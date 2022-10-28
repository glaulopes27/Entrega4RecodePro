package com.cadastro.model;

import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "pacote", schema = "agencia")
@Data
public class Pacote {
	@Id
	@Column(name = "id_pacote")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_pacote;

	@Column(name = "nome_pacote")
	private String nome_pacote;

	@Column(name = "valor_pacote")
	private double valor_pacote;

	@ManyToOne
	@JoinColumn(name = "compra_pacote")
	private Compra compra;

	@Override
	public int hashCode() {
		return Objects.hash(compra, id_pacote, nome_pacote, valor_pacote);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pacote other = (Pacote) obj;
		return Objects.equals(compra, other.compra) && id_pacote == other.id_pacote
				&& Objects.equals(nome_pacote, other.nome_pacote)
				&& Double.doubleToLongBits(valor_pacote) == Double.doubleToLongBits(other.valor_pacote);
	}

	public int getId_pacote() {
		return id_pacote;
	}

	public void setId_pacote(int id_pacote) {
		this.id_pacote = id_pacote;
	}

	public String getNome_pacote() {
		return nome_pacote;
	}

	public void setNome_pacote(String nome_pacote) {
		this.nome_pacote = nome_pacote;
	}

	public double getValor_pacote() {
		return valor_pacote;
	}

	public void setValor_pacote(double valor_pacote) {
		this.valor_pacote = valor_pacote;
	}

	public Compra getCompra() {
		return compra;
	}

	public void setCompra(Compra compra) {
		this.compra = compra;
	}

}
