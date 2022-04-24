import styled from 'styled-components' //34. Creating the Pie Chart Look

interface ILegendProps {
    color: string;  
}

export const Container = styled.div`
    width: 48%auto;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;
`; //34. Creating the Pie Chart Look
export const SideLeft = styled.aside` //34. Creating the Pie Chart Look //adide como secundário
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px; //Pra ele empurrar o texto para baixo;
    }
`; 

export const LegendContainer = styled.ul`//34. Creating the Pie Chart Look //ul, uma lista não ordenada;
    list-style: none;
    
    max-height: 175px; //Altura limite;
    padding-right: 5px 10px; //Em todas as direções;
    overflow-y: scroll; //Pra ele rolar;

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

export const Legend = styled.li<ILegendProps>` //34. Creating the Pie Chart Look //li, uma lista
    display: flex;
    align-items: center;

    margin-bottom: 7px;

    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        border-radius: 5px;

        font-size: 18px; 
        line-height: 40px; //Para os numeros porcentagem ficarem no centro;
        text-align: center; //Texto no centro;

    }
    >span {
        margin-left: 5px; // Para desgruda o box da porcenagem com o texto de Entrada e Sáidas;
    }
`; 


export const SideRight = styled.main`

`; //34. Creating the Pie Chart Look //main como principal

