import React from "react";
import { Link, Route } from "react-router-dom";

import HeaderInterno from "./HeaderInterno";
import Categoria from "./Categoria";
import Anuncio from "./Anuncio";

const Categorias = ({ categorias }) => {
  return (
    <div>
      <HeaderInterno />
      <div className="container" style={{ paddingTop: "120px" }}>
        <h1>Categorias</h1>
        <div className="row">
          <div className="col-lg-4">
            <ul>
              {categorias.map((cat) => {
                return (
                  <li key={cat.url}>
                    <Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*{json.stringify(props.categorias)} */}
          <div className="col-lg-8">
            <Route
              exact
              path="/categorias/:urlCategoria"
              component={Categoria}
            />
            <Route
              path="/categorias/:urlCategoria/:idAnuncio"
              render={(props) => <Anuncio {...props} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categorias;
