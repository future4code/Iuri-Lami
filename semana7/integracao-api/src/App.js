import './App.css';
import React from "react";
import axios from "axios";

// App react
class App extends React.Component {
  // variaveis que irei mudar
  state= {
    form: true
  };

  // mudança de pagina com renderização condicional
  changePage = () => {
    // estado recebe novo valor : oposto ao proprio valor
    this.setState({form: !this.state.form});
  };
  
  render() {
    // função retorna Form para true e Users para false
    const page = this.state.form ? <Form /> : <Users />;
    // retorno para o usuario (o que ele enxerga)
    return(
      <div className ="App">
        {page}
        <button onClick = {this.changePage}>Mudar de Página</button>
      </div>

    );
  }
}