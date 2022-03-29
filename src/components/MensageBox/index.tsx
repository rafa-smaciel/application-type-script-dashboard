import React from 'react'; //32. Creating the Wallet Status Card



import { Container } from './styles'; // 32. Creating the Wallet Status Card

interface ImessageBoxProps { //32. Creating the Wallet Status Card
    title: string;
    description: string;
    footerText: string;
    icon: string;
}

const MessageBox: React.FC<ImessageBoxProps> = ({title, description, footerText, icon}) => { // 32. Creating the Wallet Status Card
    return (
        <Container>
            <header>
                <h1>
                    {title} 
                    <img src={icon} alt={title}/> 
                </h1>
                <p>
                    {description}
                </p>
                <footer>
                    <span>{footerText}</span>
                </footer>
            </header>
        </Container>
    );
}

export default MessageBox;