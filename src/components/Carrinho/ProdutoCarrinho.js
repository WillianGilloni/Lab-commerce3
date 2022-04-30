import React from "react";
import styled from "styled-components";

const CarrinhoGeral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;

`
const Quantidade = styled.div`
  margin-right: 10px;
`

const Botao = styled.button`
  height:30px;
  &:hover{
    background-color: rgb(160, 24, 201);
    color: white;
  }
`

class ProdutoCarrinho extends React.Component {
  render() {
    return (
      <CarrinhoGeral>
          <Quantidade>{this.props.produtoNoCarrinho.quantidade}x</Quantidade>
          <p>{this.props.produtoNoCarrinho.nome}</p>
          <Botao
          onClick= {() =>
          this.props.RemoverProduto(this.props.produtoNoCarrinho.id)}
          >Remover
          </Botao>
      </CarrinhoGeral>
    );
  }
}

export default ProdutoCarrinho;