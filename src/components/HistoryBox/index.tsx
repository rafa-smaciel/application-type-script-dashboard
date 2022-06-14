import React from 'react';

import {
    ResponsiveContainer,
    LineChart,
    Line, 
    XAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

import { Container } from './styles';

const HistoryBox: React.FC = () => (
    <Container>
        <h2>Histórico de saldo</h2>
        <ResponsiveContainer>
            <LineChart data={[]}
        </ResponsiveContainer>
    </Container>
)

export default HistoryBox;