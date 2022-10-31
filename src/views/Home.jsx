import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from "axios";

//exemplos de biblioteca que podem ser usadas:
//axios biblioteCA vamos usar essa biblioteca otimizada
//fetch bibloteca Javascript
//ajax biblioteca

export default function Home() {
  const [cliente, setCliente] = useState([]);

  const listarCliente = async () => {
    try {
      await axios.get("http://localhost:8080/api/cliente").then((response) => {
        setCliente(response.data);
      });
    } catch (erro) {
      alert(erro.message);
    }
  };
  useEffect(() => {
    listarCliente();
  }, []);

//deletar 
const {id} = useParams();
const deleteCliente = async (id_cliente) => { 
  try { 
    await axios.delete(`http://localhost:8080/api/cliente/${id_cliente}`)
    .then((response) => {
      alert('Cliente excluido.')
      listarCliente();
    })
  } catch (erro) { 
    alert(erro.message)
  }
}


  return (
    <div className="container">
      <div div className="py-4">
        <table className="table table-success table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Cpf</th>
              <th scope="col">Email</th>
              <th scope="col">Nome</th>
              <th scope="col">Senha</th>
              <th scope="col"> - </th>
            </tr>
          </thead>
          <tbody>
            {cliente.map((cliente, key) => (
              <tr>
                <th scope="row"key={key}>{key + 1}</th>
                <td>{cliente.cpf_cliente}</td>
                <td>{cliente.email_cliente}</td>
                <td>{cliente.nome_cliente}</td>
                <td>{cliente.senha_cliente}</td>
                <td>
                <Link to={`/view/${cliente.id_cliente}`} className="btn btn-outline-success mx-2">
                    Ver
                  </Link>
                  <Link to={`/edit/${cliente.id_cliente}`} className="btn btn-success mx-2">
                    Editar
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteCliente(cliente.id_cliente)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
