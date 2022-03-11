import styled from 'styled-components';

export const Container = styled.div`
`;
export const Content = styled.div`
`;
export const Filters = styled.div`
    width: 100%; //irá ocupar 100% da largura da tela;
    display: flex;
    justify-content: center; //para ficar tudo no centro;
    margin-bottom: 30px; //para espaçar  card para baixo;

    .tag-filter{
        font-size: 18px; 
        font-weight: 500; 
        background: none; //para sumir o fundo;
        color: ${props => props.theme.colors.white};

        margin: 0 10px; //para ele se afatar um do outro;

        transition: opacity -3s;
        opacity: .4;//Para executar o passo 27, adicionei a caracteristica de opacity .4, assim por enquanto, ambos ficam opacos. 

        :hover{
            opacity: .7;
        }
    }

        .tag-filter-recurrent::after {
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.sucess};
    }
        .tag-filter-eventual::after {
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
        .tag-actived{
            opacity: 1;
        }
`;