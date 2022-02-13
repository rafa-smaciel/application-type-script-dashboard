import React, {useMemo} from 'react';

import emojis from '../../utils/emojis'

import { 
    Container, 
    Profile, 
    Welcome, 
    UserName 
} from './styles';

const MainHeader: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice]
    },[]);
    return (
        <Container>
            <h1>MainHeader</h1>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Rafael Maciel</UserName>

            </Profile>
        </Container>
    );
}

export default MainHeader