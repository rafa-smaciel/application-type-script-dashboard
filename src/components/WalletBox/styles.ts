import styled from 'styled-components'; //31. Creating wallet movement cards

interface IContainerProps { //31. Creating wallet movement cards
    color: string;
}

export const Container = styled.div<IContainerProps>` //31. Creating wallet movement cards
   width: 32%;
   height: 150px;
   margin: 10px 0;
   
   background-color: ${props => props.color};
   color: ${props => props.theme.colors.white};

   border-radius: 7px;
   padding: 10px 20px;

   position: relative;
   overflow: hidden; //Para recortar imagem em relação ao card.

   > img { //Para editar as imagens. //31. Creating wallet movement cards
       height: 110%;

       position: absolute;
       top: -10px;
       right: -30px;

       opacity: .3; //Para deixar a imagem opaca.
   }

   > span { //Para reorganizar o texto do saldo, entradas e saídas. //31. Creating wallet movement cards
       font-size: 18px;
       font-weight: 500;
   }

   > small { //Para reorganizar o texto. //31. Creating wallet movement cards
       font-size: 12px;
       position: absolute;
       bottom: 10px;
   }
`;