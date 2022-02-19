import React from 'react';

import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

const SelectInput: React.FC<ISelectInputProps> = ({options}) => { //Tem a tipagem React.FC, porém tem as caracteristicas da interface;
    return (
        <Container>
           <select>
               {
               options.map(option => (
                   <option 
                   key={option.value}
                   value={option.value}>
                       {option.label}</option>
               ))
                }
           </select>
        </Container>
    );
}

export default SelectInput;