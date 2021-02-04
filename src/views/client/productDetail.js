import React from 'react';
import axios from 'axios';
import Navbar from '../../component/navbarClient';
import SearchBox from '../../component/searchBox';
import { BsArrowDown, BsArrowUp} from "react-icons/bs";
import ShoppingCartButton from '../../component/cartButton';
import { validateToken } from '../../services/validateUser';
import '../../App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="jumbotron">
          <h1>Detalhes do produto</h1>
          <hr className="my-4" />
          <div className="container-fluid">
            <div className="">
              <div className="col-12"></div>
              <section className="row espacamento">
              <div className="card col-8">
                <div className="card-body">
                  <img className="image" src={localStorage.getItem('serverest/imagemProduto') }/>
                  <h5 className="card-title negrito">{ localStorage.getItem('serverest/nomeProduto') }</h5>
                  <br />
                  <h6 className="card-subtitle mb-2 text-muted negrito">Preço: </h6>
                  <h6 className="card-subtitle mb-2 text-muted">$ { localStorage.getItem('serverest/precoProduto') }</h6>
                  <br />
                  <a className="card-subtitle mb-2 text-muted negrito ">Qtd: </a>
                  <a className="card-subtitle mb-2 text-muted"> { localStorage.getItem('serverest/quantidadeProduto') }</a>
                  <br />
                  <br />
                  <h6 className="card-subtitle mb-2 text-muted negrito">Descrição: </h6>
                  <h6 className="card-subtitle mb-2 text-muted negrito">{ localStorage.getItem('serverest/descricaoProduto')}</h6>
                  <br></br>
                  <a href="#" class="card-link">Adicionar ao Carrinho</a>
                  <div>
                  <br></br>
                  </div>
                </div>
             </div>
              </section>
              <br />
              <a href="/home" class="card-link">Voltar</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
