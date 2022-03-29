import styled from 'styled-components'; //32. Creating the Wallet Status Card

export const Container = styled.div` //32. Creating the Wallet Status Card
    width: 48%; //32. Creating the Wallet Status Card
    height: 260px; //32. Creating the Wallet Status Card

    background-color: ${props => props.theme.colors.tertiary}; //32. Creating the Wallet Status Card
    color: ${props => props.theme.colors.white}; //32. Creating the Wallet Status Card

    border-radius: 7px; //32. Creating the Wallet Status Card

    margin: 10px 0; //32. Creating the Wallet Status Card
    padding: 30px 20px; //32. Creating the Wallet Status Card

    display: flex; //32. Creating the Wallet Status Card
    flex-direction: column; //32. Creating the Wallet Status Card (por padrão ele coloca um do lado do outro, por isso coloco column para ficar um de baxo do outro)
    justify-content: space-between; //32. Creating the Wallet Status Card

    > header img{ //32. Creating the Wallet Status Card
        width: 35px;
        margin-left: 7px; //(só para a imagem não ficar tão grudada com o texto)
    }

    > header p { //32. Creating the Wallet Status Card (sobre o paragrafo)
        font-size: 18px;
    }
`;