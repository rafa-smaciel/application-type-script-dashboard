import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    padding: 25px; //Espassamento de 25px em todos os lados do conteiner;
`;