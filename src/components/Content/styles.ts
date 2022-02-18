import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    padding: 25px; //Espassamento de 25px em todos os lados do conteiner;

    height: calc(100vh - 70px); //view port height, ou altura da tela;
    overflow-y: scroll; //todo o conteudo que não colber, ele gera uma barra de rolagem;

    ::-webkit-scrollbar{
        width: 10px; //largura;
    }

    ::-webkit-scrollbar-thumb{  //botão de rolagem
        background-color: ${props => props.theme.colors.secundary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{  //é a barra maior, que fica por fora
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }
`;