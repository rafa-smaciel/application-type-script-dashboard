import styled from 'styled-components';

interface ITagProps {
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};

    list-style: none; //Para tirar a bolinha do List
    border-radius: 7px; //Para arredondar um pouco mais as bordas

    margin: 10px; //para ter um espaço em cima e em baixo um do outro;
    padding: 12px 10px; //para ter um espaço em cima e em baixo dentro do card;

    display: flex;
    justify-content: space-between; //um para cada lado;
    align-items: center; //para centralizar na vertical;

    cursor: pointer; 
    transition: all .3s; //para ter uma transição de 3 segundos;

    position: relative;

    &:hover {
        opacity: .7; //quando passar o mouse dar aquela cor opaca;
        transform: translateX(10px); //para dar uma deslocadinha para o lado;
    }

    > div {
        display: flex;
        flex-direction: column; //para fica um debaixo do outro;
        justify-content: space-between; //fica nas extremidades de em cima e baixo, devido a flex-direction column;

        padding-left: 10px;
    }

    > div span {
        font-size: 22px;
        font-weight: 500;
    }
    
`;

export const Tag = styled.div<ITagProps>`
    width: 13px; 
    height: 60%; //60% do elemento que ela esta dentro;

    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`;