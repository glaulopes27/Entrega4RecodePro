import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AddCliente() {
  const navigate = useNavigate();

  const [cpf_cliente, setCpf_cliente] = useState("");
  const [email_cliente, setEmail_cliente] = useState("");
  const [nome_cliente, setNome_cliente] = useState("");
  const [senha_cliente, setSenha_cliente] = useState("");

  const salvar = async (e) => {
    e.preventDefault();
    console.log(cpf_cliente, email_cliente, nome_cliente,senha_cliente);
    await axios
      .post("http://localhost:8080/api/cliente", {
       cpf_cliente: cpf_cliente,
       email_cliente: email_cliente,
       nome_cliente: nome_cliente,
       senha_cliente: senha_cliente,
      })
      .then((result) => {
        alert("cliente adicionado.");
        navigate("/home");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Cliente de Cliente</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputNome1" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputNome1"
                value={nome_cliente}
                onChange={(e) => setNome_cliente(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputSobrenome1" className="form-label">
                Cpf
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputSobrenome1"
                value={cpf_cliente}
                onChange={(e) => setCpf_cliente(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email_cliente}
                onChange={(e) => setEmail_cliente(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-success"
              onClick={salvar}
            >
              Salvar
            </button>
            <Link to="/home" type="submit" className="btn btn-outline-danger mx-2">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
