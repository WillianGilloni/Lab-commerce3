import React from 'react';
import './App.css';
import Filtro from './components/Filtro/Filtro'
import Produtos from './components/Produtos/Produtos';
import Carrinho from './components/Carrinho/Carrinho';
import Foguete from './icones/iconefoguete.png'


const viagens = [
  {
    id: 1,
    nome: "Viagem Saturno",
    valor: 100 * Math.floor(Math.random() * 99 + 1),
    imagem: "https://thumbs.dreamstime.com/b/planetas-do-sistema-solar-126618333.jpg/201/150",
  },
  {
    id: 2,
    nome: "Viagem Netuno",
    valor: 100 * Math.floor(Math.random() * 99 + 1),
    imagem: "https://thumbs.dreamstime.com/b/planetas-e-gal%C3%A1xia-papel-de-parede-da-fic%C3%A7%C3%A3o-cient%C3%ADfica-beleza-do-espa%C3%A7o-profundo-123015144.jpg",
  },
  {
    id: 3,
    nome: "Viagem Vênus",
    valor: 100 * Math.floor(Math.random() * 99 + 1),
    imagem: "https://thumbs.dreamstime.com/b/fundo-cient%C3%ADfico-abstrato-planetas-no-espa%C3%A7o-na-nebulosa-e-nas-estrelas-elementos-desta-imagem-fornecidos-pela-nasa-da-nasa-gov-84018359.jpg",
  },
  {
    id: 4,
    nome: "Viagem Lua",
    valor: 100 * Math.floor(Math.random() * 99 + 1),
    imagem: "https://thumbs.dreamstime.com/b/o-c%C3%A9u-stars-planetas-13013148.jpg",
  },
  {
    id: 5,
    nome: "Viagem Urano",
    valor: 100 * Math.floor(Math.random() * 99 + 1),
    imagem: "https://thumbs.dreamstime.com/b/cena-do-universo-com-planetas-estrelas-e-gal%C3%A1xias-no-espa%C3%A7o-que-mostra-beleza-da-explora%C3%A7%C3%A3o-do-espa%C3%A7o-elementos-fornecidos-84019292.jpg",
  },
  {
    id: 6,
    nome: "Viagem Mercurio",
    valor: 100 * Math.floor(Math.random() * 99 + 1),
    imagem: "https://thumbs.dreamstime.com/b/o-j%C3%BApiter-disparou-do-espa%C3%A7o-que-mostra-tudo-os-59788432.jpg",
  }
]

class App extends React.Component {
  state = {
    valorMinimo: 0,
    valorMaximo: 0,
    nomeProduto: "",
    produtos: viagens,
    itensCarrinho: [
      {
        id: 3,
        nome: "Viagem Vênus",
        valor: 100 * Math.floor(Math.random() * 99 + 1),
        imagem: "https://picsum.photos/202/150",
        quantidade: 2
      },
      {
        id: 2,
        nome: "Viagem Netuno",
        valor: 100 * Math.floor(Math.random() * 99 + 1),
        imagem: "https://picsum.photos/201/150",
        quantidade: 1
      }
    ]
  } 

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  onChangeNomeProduto = (event) => {
    this.setState({ nomeProduto: event.target.value })
  }



  onAddViagemCarrinho = (viagemId) => {
    const viagemNoCarrinho = this.state.itensCarrinho.find((item) => viagemId === item.id)

    if (viagemNoCarrinho) {
      const novaViagemCarrinho = this.state.itensCarrinho.map((item) => {
        if (viagemId === item.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1
          }
        }
        return item;
      })
      this.setState({ itensCarrinho: novaViagemCarrinho })
    } else {
      const viagemNoCarrinho2 = viagens.find((item) => viagemId === item.id)
      const novaViagemCarrinho2 = [...this.state.itensCarrinho, { ...viagemNoCarrinho2, quantidade: 1 }]

      this.setState({ itensCarrinho: novaViagemCarrinho2 })
    }
  }

  RemoverProduto = (viagemId) => {
    const novaListaCarrinho = this.state.itensCarrinho.map((item) => {
      if (item.id === viagemId) {
        return {
          ...item,
          quantidade: item.quantidade - 1
        };
      }
      return item;
    })
      .filter((item) => item.quantidade > 0);

    this.setState({ itensCarrinho: novaListaCarrinho });
  };



  render() {
    return (
      <div className='cabecalho'>
        <h1 className='texto-cabecalho'>
         <img src={Foguete} alt="icone de foguete"/>
          Ao infinito e além
        </h1>
        <p>Procurando por viagens espaciais baratas? Veio ao lugar certo!</p>

        <div className="App">

          <Filtro
            valorMinimo={this.state.valorMinimo}
            valorMaximo={this.state.valorMaximo}
            nomeProduto={this.state.nomeProduto}
            onChangeValorMinimo={this.onChangeValorMinimo}
            onChangeValorMaximo={this.onChangeValorMaximo}
            onChangeNomeProduto={this.onChangeNomeProduto}
          />

          <Produtos
            viagens={viagens}
            nomeProduto={this.state.nomeProduto}
            valorMinimo={this.state.valorMinimo}
            valorMaximo={this.state.valorMaximo}
            onAddViagemCarrinho={this.onAddViagemCarrinho}
          />

          <Carrinho
            itensCarrinho={this.state.itensCarrinho}
            RemoverProduto={this.RemoverProduto}
          />
        </div>
      </div>
    );
  }
}



export default App;
