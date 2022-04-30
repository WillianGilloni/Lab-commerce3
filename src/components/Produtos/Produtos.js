import React from 'react';
import styled from 'styled-components'
import CardProduto from './CardProduto';

const Vitrine = styled.div`
    padding: 5px;
    margin: 10px;
    
`
const Conteudo = styled.section`

    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

`

const ConteudoGeral = styled.section`
    display:grid;
    grid-template-columns: 1fr;
`

const Menu = styled.section`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`

const LetrasBrancasP = styled.p`
    color: white;
    text-shadow: 3px 3px 3px rgb(160, 24, 201);
`
const LetrasBrancasLabel = styled.label`
    color: white;
    text-shadow: 3px 3px 3px rgb(160, 24, 201);
    font-size: 20px;
`


class Produtos extends React.Component {

    state = {
        sort: "decrescente"
    }


    onChangeOrdem = (event) => {
        this.setState({ sort: event.target.value });
    };

    ordemListaFiltrada = () => {
        return (
            this.props.viagens.filter((viagem) => {
                return viagem.nome.toLowerCase().includes(this.props.nomeProduto.toLowerCase())
            })
                .filter((viagem) => 
                    this.props.valorMinimo
                        ? viagem.valor >= this.props.valorMinimo
                        : true
                    /* metodo de comparação não estava funcionando como queriamos, testamos ternario. Revisar mais, mais complexo. */
                    /*  return viagem.valorMinimo === "" || viagem.valor >= this.props.valorMinimo */
                )
                .filter((viagem) => 
                    this.props.valorMaximo
                        ? viagem.valor <= this.props.valorMaximo
                        : true
                    /* return viagem.valorMaximo === "" || viagem.valor <= this.props.valorMaximo */
                )
                .sort((a, b) =>
                    this.state.sort === "crescente"
                        ? a.valor - b.valor
                        : b.valor - a.valor
                )
        )
    }

    render() {

        const novaOrdemDeListaFiltrada = this.ordemListaFiltrada();

        return (
            <Vitrine>
                <Menu>
                    <LetrasBrancasP>Quantidade de produtos: {this.props.viagens.length}</LetrasBrancasP>
                    <LetrasBrancasLabel>
                        Ordenação:
                        <select
                            name='ordem'
                            value={this.state.sort}
                            onChange={this.onChangeOrdem}
                        >
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </LetrasBrancasLabel>

                </Menu>

                <ConteudoGeral>
                    <Conteudo>

                        {novaOrdemDeListaFiltrada.map((viagem) => {
                            return <CardProduto
                                viagem={viagem}
                                onAddViagemCarrinho={this.props.onAddViagemCarrinho}
                            />
                        })}
                    </Conteudo>
                </ConteudoGeral>

            </Vitrine >

        )
    }
}

export default Produtos