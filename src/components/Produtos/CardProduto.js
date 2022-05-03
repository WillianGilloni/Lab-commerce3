import React from "react";
import styled from "styled-components";

const Cards = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin: 10px;
    max-height: 50vh;
    background-color: white ;
    border-radius: 20px;
`

const TituloViagem = styled.p`
    color: rgb(86, 1, 165);
`

const Botao = styled.button `
    &:hover{
    background-color: rgb(160, 24, 201);
    color: white;
  }
`

const Imagem = styled.img`
    max-width: 200px;
    height: 150px;
`

class CardProduto extends React.Component {
  render() {
    const item = this.props.viagem;
    return (
      <Cards>
          <TituloViagem>{item.nome}</TituloViagem>
          <Imagem src={item.imagem} />
          <p>R${item.valor},00</p>
         
          <Botao
             onClick={() => this.props.onAddViagemCarrinho(item.id)}>
                Adicionar
          </Botao>
        
      </Cards>
    );
  }
}

export default CardProduto;