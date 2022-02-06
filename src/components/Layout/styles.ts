import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px auto; //Portanto, a primeira coluna vai ocupar 250px e o "auto" significa que o restante que sobrar será ocupado automáticamente.
    grid-template-rows: 70px auto; //Mesma idea. A primeira linha ocupará 70px e o restante da aplicação será atribuida pelo "auto".
    
    grid-template-areas: 
    'AS MH'
    'AS CT'; // Como se fosse um batalha naval. "Quem esta na primeira coluna e primeira linha: Aside (AS)"; "Quem esta na primeira linha e na segunda coluna: MainHeader"; "Quem esta na segunda linha e na primeira coluna: Aside"; "Quem esta na segunda linha e na segunda coluna: Content".

    height: 100vh; //Altura, 100% da altura de nossa viewport.
`;