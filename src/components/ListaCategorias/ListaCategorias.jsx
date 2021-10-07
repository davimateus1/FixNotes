import React, { Component } from "react";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
      if(e.key ==  "Enter"){
        console.log("Adicionar Categoria")
      }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
