import React, { Component } from "react";
import HeaderInterno from "./HeaderInterno";
import base, { storage } from "./base";
import { Redirect } from "react-router-dom";

class NovoAnuncio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const file = this.foto.files[0];
    const { name, size } = file;
    const ref = storage.ref(name);

    ref.put(file).then((img) => {
      img.ref
        .getDownloadURL()
        .then((result) => {
          const novoAnuncio = {
            nome: this.nome.value,
            descricao: this.descricao.value,
            preco: this.preco.value,
            vendedor: this.vendedor.value,
            telefone: this.telefone.value,
            categoria: this.categoria.value,
            foto: result,
          };

          base
            .push("anuncios", {
              data: novoAnuncio,
            })
            .then(() => {
              console.log("success");
              this.setState({ success: true });
            });
        })
        .catch((e) => console.log(e));
    });
    console.log("----" + this.foto, this.foto.files);

    //console.log("****" + novoAnuncio);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        {this.state.success && <Redirect to="/" />}
        <HeaderInterno />
        <div className="container" style={{ paddingTop: "120px" }}>
          <p>Success:{this.state.success}</p>
          <h1>Novo anúncio</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="foto">Foto</label>
              <input
                type="file"
                className="form-control"
                id="foto"
                placeholder="foto"
                ref={(ref) => (this.foto = ref)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="nome"
                ref={(ref) => (this.nome = ref)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="categorias">Categorias</label>

              <select ref={(ref) => (this.categoria = ref)}>
                {this.props.categorias.map((cat) => (
                  <option key={cat.url} value={cat.url}>
                    {cat.categoria}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                placeholder="Descrição"
                ref={(ref) => (this.descricao = ref)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="preco">Preço</label>
              <input
                type="text"
                className="form-control"
                id="preco"
                placeholder="preco"
                ref={(ref) => (this.preco = ref)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="telefone"
                placeholder="Telefone"
                ref={(ref) => (this.telefone = ref)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="vendedor">Vendedor</label>
              <input
                type="text"
                className="form-control"
                id="vendedor"
                placeholder="Vendedor"
                ref={(ref) => (this.vendedor = ref)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Salvar anúncio
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default NovoAnuncio;
