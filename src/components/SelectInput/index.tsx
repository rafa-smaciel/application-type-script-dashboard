import React from 'react';

import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;   //Ou seja, esse função; toda vez que mudar o valor, eu quero capturar esse valor. Esse onchange vai ser usado no retorno do list.
    defaultValue?: string | number; //Faz parte da lógica de que quando eu recarregar a pagina, ele sempre mostre o valor doano padrão.
}

const SelectInput: React.FC<ISelectInputProps> = ({ options, onChange, defaultValue }) => { //Tem a tipagem React.FC, porém tem as caracteristicas da interface; //defaulValue: Faz parte da lógica de que quando eu recarregar a pagina, ele sempre mostre o valor doano padrão.
    return (
        <Container>
           <select onChange={onChange} defaultValue={defaultValue}> 
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