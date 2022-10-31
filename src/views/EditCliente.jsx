import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function EditCliente() {
  const navigate = useNavigate();
  const {id_cliente} = useParams();

  const [cpf_cliente, setCpf_cliente] = useState("");
  const [email_cliente, setEmail_cliente] = useState("");
  const [nome_cliente, setNome_cliente] = useState("");
  const [senha_cliente, setSenha_cliente] = useState("");

  const editar = async (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/cliente/${id_cliente}`, {
       cpf_cliente: cpf_cliente,
       email_cliente: email_cliente,
       nome_cliente: nome_cliente,
       senha_cliente: senha_cliente,
      })
      .then((result) => {
        console.log("Cliente atualizado:" + result.data);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => { 
    carregaCliente();
  }, []);

  const carregaCliente = async () => { 
    const result = await axios.get(`http://localhost:8080/api/cliente/${id_cliente}`)
    console.log(result.data)
    setCpf_cliente(result.data.cpf_cliente)
    setEmail_cliente(result.data.email_cliente)
    setNome_cliente(result.data.nome_cliente)
    setSenha_cliente(result.data.senha_cliente)
   
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Atualizar Cliente</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="cpf_cliente" className="form-label">
                Cpf
              </label>
              <input
                type="text"
                className="form-control"
                id_cliente="cpf_cliente"
                aria-describedby="nomeHelp"
                placeholder="Insira seu cpf"
                value={cpf_cliente}
                onChange={(e) => setCpf_cliente(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email_cliente" className="form-label">
              email
              </label>
              <input
                type="text"
                className="form-control"
                id_cliente="email_cliente"
                placeholder="Insira seu email"
                value={email_cliente}
                onChange={(e) => setEmail_cliente(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nome_cliente" className="form-label">
              nome_cliente
              </label>
              <input
                type="nome_cliente"
                className="form-control"
                id_cliente="nome_cliente"
                aria-describedby="Nome"
                placeholder="Insira seu nome"
                value={nome_cliente}
                onChange={(e) => setNome_cliente(e.target.value)}
              />
              <div id_cliente="emailHelp" className="form-text">
               Seus dados estao sob sigilo absoluto.
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-success"
              onClick={editar}
            >
              Salvar
            </button>
            <Link to="/home" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );

}