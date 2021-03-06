import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

interface IContentHeaderProps {
    title: string;
    lineColor: string;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children
}) => {
    return (
        <Container>
            <TitleContainer lineColor="#F7931B">
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;