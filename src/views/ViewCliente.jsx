import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewCliente() 
{

  const { id_cliente } = useParams();
  const [cpf_cliente, setCpf_cliente] = useState("");
  const [email_cliente, setEmail_cliente] = useState("");
  const [nome_cliente, setNome_cliente] = useState("");
  const [senha_cliente, setSenha_cliente] = useState("");

  useEffect(() => {
    carregaCliente();
  }, []);

  const carregaCliente = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/cliente/${id_cliente}`
    );
    console.log(result.data);
    setCpf_cliente(result.data.Email_cliente);
    setNome_cliente(result.data.ultimoNome);
    setSenha_cliente(result.data.email);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> Atualizar Cliente</h2>
            <div className="card">
              <div className="card text-center">
                <div className="card-header">ID: {id_cliente}</div>
                <div className="card-body">
                  <p className="card-title">
                    <b>Cpf: </b> {cpf_cliente}
                  </p>
                  <p className="card-title">
                    <b>Email: </b> {email_cliente}
                  </p>
                  <p className="card-title">
                    <b>Nome: </b> {nome_cliente}
                  </p>
                  <p className="card-title">
                    <b>Senha: </b> {senha_cliente}
                  </p>
                  <Link
                    to="/home"
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Voltar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
