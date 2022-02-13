import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    
    background-color: ${props => props.theme.colors.secundary};
    padding-left: 20px; //Para que o icone do dashboard ande para direita 20px;
    border-right: 1px solid ${props => props.theme.colors.gray}; //Para fazer a linha de fora a afora em branco, marcando o conteiner, na vertical;
`;

export const Header = styled.header`
    height: 70px; //Para afastar do limite superior da tela. Igual ao styles do layout. 70p;
    display: flex;
    align-items: center; //Para o minha carteira ficar centralizado na vertical;
`;

export const LogImg = styled.img`
    height: 40px; //Reduzindo a altura da imagem/icone do $ da minha carteira;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};    
    margin-left: 10px; //Para o minha carteiria ficar mais delocado para direita na horizontal;
`;

export const MenuContainer = styled.nav`
    display: flex; //Por padrão, o display flex irá deixar os valores dashboard, entradas, saidas e sair; um ao lado do outro;
    flex-direction: column; //Com o flex-direction, iremos orientar a classificaçao em colunas, deixando um a baixo do outro;  
    margin-top: 50px; //Para descer a escrito dashboard da escrita minha carteira;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info}; //Para colocar a cor com propriedade para a escrita dashboard; A cor dele é a "info";
    text-decoration: none; //Para tirar o sublinhado de baixo da escrita dashboard, caracterisitica dos itens que possuem link;
    margin: 7px 0; //Deixando os menus mais espassados;
    display: flex; //Para enquadrar os icones ao lado dos menus;
    align-items: center; //Para alinhar os icones ao lado dos menus;

    transition: opacity: .3s; //Quando a transição for opcidade, demorará 3 seundo a transição;

    &:hover {
        opacity: .7; //A apacidade é de 0 - 1, portanto .7, ou 70%;
    }

    > svg {
        font-size: 18px; //Aumentando os icones do menu;
        margin-right: 5px; //Dando um espassamento dos icones em relação ao menu;
    }

`;