import axios from "axios";
import React from "react";


const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "iuri-lami-dumont"
  }
};

class Users extends React.Component {
  state = {
    userList: []
  };

  // função para descontrui e construir a cada mudança de pagina
  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios
        // metodo para ler banco de dados
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ userList: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // função para deletar usuario
  deleteUser = (userId) => {
    axios
        // metodo para deletar usuario já cadastrado
      .delete(`${baseUrl}/${userId}`, axiosConfig)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const renderUserList = this.state.userList.map((usuario) => {
      return (
        <p key={usuario.id}>
          {usuario.name}
          </p>
      );
    });
    // lista atualizada
    return <div>{renderUserList}</div>;
  }
}

export default Users;
