import React from "react";
import axios from "axios";

//variavel para chamar path da api
const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

// variavel para chamar acesso da api
const axiosConfig = {
  headers: {
    Authorization: "iuri-lami-dumont"
  }
};

class Form extends React.Component {
  state = {
    nameValue: "",
    emailValue: ""
  };

  // função para criar o body de um novo usuario
  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    };

    axios
        // metodo para registrar um novo usuario
      .post(
        `${baseUrl}`, body, axiosConfig
        )
        // metodo para receber  a resposta
      .then((response) => {
        alert("Usuário criado com sucesso!");
        this.setState({ nameValue: "", emailValue: "" });
      })
      // metodo para puxar a mensagem de error
      .catch((error) => {
        console.log(error.message);
      });
  };
  // funçoes para capturar mudanças
  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };
  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  
  render() {
    return (
      <div>
        <input value={this.state.nameValue} onChange={this.onChangeNameValue} />
        <input
          value={this.state.emailValue}
          onChange={this.onChangeEmailValue}
        />
        <button onClick={this.createUser}>Criar Usuário</button>
      </div>
    );
  }
}

export default Form;
