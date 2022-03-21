import React, { useMemo } from 'react'; //31. Creating wallet movement cards
// import CountUp from 'react-countup'; //31. Creating wallet movement cards - COUNTUP ERROR

import dolarImg from '../../assets/dolar.svg'; //31. Creating wallet movement cards
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import arrowUpImg from '../../assets/arrow-up.svg'; //31. Creating wallet movement cards
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import arrowDownImg from '../../assets/arrow-down.svg'; //31. Creating wallet movement cards

import { Container } from './styles'; //31. Creating wallet movement cards

interface IWalletBoxProps { //31. Creating wallet movement cards
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC <IWalletBoxProps> = ({ //31. Creating wallet movement cards
    title,
    amount,
    footerlabel,
    icon,color
}) => {

    const iconSelected = useMemo(() => { //31. Creating wallet movement cards //Portanto na hora que nosso componente carregar, vamos verificar a opção de icone que a pessoa escolher, dolar, arrowUp ou arrowDown; depois agente devolve o arquivo de imagem correspondente. A sixtese do switch com useMemo.
        switch (icon) {
            case 'dolar':
                return dolarImg;
            case 'arrowUp':
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
            default:
                return undefined;
        }
    },[icon]);

//31. Creating wallet movement cards  <img src={iconSelected} alt={title} /> 
    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                {amount}
                {/* <CountUp  //31. Creating wallet movement cards - COUNTUP ERROR
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                    />     */}
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    );
}

export default WalletBox;