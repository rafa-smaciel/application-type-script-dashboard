import React from 'react'; //34. Creating the Pie Chart Look
//import {
    // PieChart,
    // Pie,
    // Cell,
    //ResponsiveContainer
// } from 'recharts'; //34. Creating the Pie Chart Look

import { 
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight, 
} from './styles'; //34. Creating the Pie Chart Look

const PieChart: React.FC = () => ( //34. Creating the Pie Chart Look
        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    <Legend color="#F7931B">
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color="#E44C4E"> 
                        <div>95%</div>
                        <span>Sáidas</span>
                    </Legend>
                    <Legend color="#E44C4E"> 
                        <div>95%</div>
                        <span>Sáidas</span>
                    </Legend>
                    <Legend color="#E44C4E"> 
                        <div>95%</div>
                        <span>Sáidas</span>
                    </Legend>
                    <Legend color="#E44C4E"> 
                        <div>95%</div>
                        <span>Sáidas</span>
                    </Legend>
                </LegendContainer>
            </SideLeft>

            <SideRight>
             
            </SideRight>
        </Container>
);


export default PieChart // 34. Creating the Pie Chart Look