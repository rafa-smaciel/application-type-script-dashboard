import React from 'react'

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import{ Container } from './styles';

const List: React.FC = () => {
    const options = [
        {value: 'Rafael', label: 'Rafael'},
        {value: 'Ana', label: 'Ana'},
        {value: 'Fulano', label: 'Fulano'},
    ]
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E" cjhildren={undefined}>
               <SelectInput options={options}/> 
            </ContentHeader>
        </Container>
    );
}

export default List