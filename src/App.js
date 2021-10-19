import React, { Component } from "react";
import Formulario from "./components/Form";
import ListaDeNotas from "./components/ListNotas";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import arrayNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias;
    this.notas = new arrayNotas;
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.deletarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
