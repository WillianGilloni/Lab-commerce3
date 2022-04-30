import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin: 10px;
    height: 100vh;
    background-color: white ;
    border-radius: 20px;
`

const InputsValor = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px; 
`

const Titulo = styled.h2`
    text-shadow: 2px 2px 2px rgb(160, 24, 201);
`

class Filtro extends React.Component{
    render (){
        return (
            <Container>
                <Titulo>Filtro</Titulo>
                <InputsValor>
                    Valor mínimo:
                    <input 
                        placeholder='Digite valor mínimo' 
                        type="number"
                        value={this.props.valorMinimo}
                        onChange={this.props.onChangeValorMinimo}

                    />
                </InputsValor>

                <InputsValor>
                    Valor máximo:
                    <input 
                        placeholder='Digite valor máximo'
                        type="number"
                        value={this.props.valorMaximo}
                        onChange={this.props.onChangeValorMaximo}
                    />  
                </InputsValor>

                <InputsValor>
                    Busca por nome:
                    <input 
                        placeholder='Digite nome do produto'
                        type="Texto"
                        value={this.props.nomeProduto}
                        onChange={this.props.onChangeNomeProduto}
                    />
                </InputsValor>

            </Container>
        )
    }
}

export default Filtro