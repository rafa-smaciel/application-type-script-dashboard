import styled from 'styled-components';

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%; //Pegando 100% dos 100% da linha;

    display: flex;
    justify-content: space-between; //Para ficar oposto;

    margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`

    > h1 { //Para mexer somente no h1 do Container em questão //Para inserir retangulo abaixo do titulo
            color: ${props => props.theme.colors.white};

            &::after { //pseudo elemento
                content: ''; //obrigatório o content, se não for usar tem que colocar assim;
                display: block;
                width: 55px;
                border-bottom: 10px solid ${props => props.lineColor};
            }
        }
`;

export const Controllers = styled.div` //Melhorando os botões;
    display: flex; // Para um select fica ao lado do outro;
`;