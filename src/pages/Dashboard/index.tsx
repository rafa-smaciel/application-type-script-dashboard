import React from 'react'

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Rafael', label: 'Rafael'},
        {value: 'Ana', label: 'Ana'},
        {value: 'Fulano', label: 'Fulano'},
    ]
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
               <SelectInput options={options}/> 
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;