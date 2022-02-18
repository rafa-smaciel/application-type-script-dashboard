import React from 'react';

import { Container, Tag } from './styles';

interface IHistoryFinanceCardProps { //Aqui eu declarei.
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    cardColor,
    tagColor,
    title, //Aqui eu trago elas pra usar dentro do meu componente.
    subtitle,
    amount
}) => {
    return (
        <Container color={cardColor}>
          <Tag color={tagColor} />
          <div>
              <span>{title}</span>
              <small>{subtitle}</small>
          </div>
          <h3>{amount}</h3>
        </Container>
    );
}

export default HistoryFinanceCard