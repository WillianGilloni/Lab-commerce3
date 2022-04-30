import React from 'react';
import styled from 'styled-components';
import ProdutoCarrinho from './ProdutoCarrinho';

const Compras = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin: 10px;
    height: 100vh;
    background-color: white ;
    border-radius: 20px;
`

const Titulo = styled.h2`
    text-shadow: 2px 2px 2px rgb(160, 24, 201);
`


class Carrinho extends React.Component {

    SomarValorTotal = () => {
        let valorTotal = 0;

        for (let elemento of this.props.itensCarrinho) {
            valorTotal += elemento.valor * elemento.quantidade;
        }

        return valorTotal;
    };

    render() {
        return (
            <Compras>
                <Titulo>Carrinho</Titulo>

                {this.props.itensCarrinho.map((item) => {
                    return (
                        <ProdutoCarrinho
                            produtoNoCarrinho={item}
                            RemoverProduto={this.props.RemoverProduto}
                        />
                    );
                })}

                <p>Valor total: R${this.SomarValorTotal()},00</p>

            </Compras>
        )
    }
}

export default Carrinho