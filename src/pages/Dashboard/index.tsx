import React, {useState, useMemo} from 'react'

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox'; //31. Creating wallet movement cards

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months'; //30. Creating the dashboard content header

import { 
    Container,
    Content,
 } from './styles';

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1); //30. Creating the dashboard content header
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear()); //30. Creating the dashboard content header

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const options = [
        {value: 'Rafael', label: 'Rafael'},
        {value: 'Ana', label: 'Ana'},
        {value: 'Fulano', label: 'Fulano'},
    ]

    const years = useMemo(() => { //30. Creating the dashboard content header
        let uniqueYears: number[] = [];

        [ ...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });
  
        return uniqueYears.map(year => {
            return{
                value: year,
                label: year,
            }
        });
    },[]);

    const months = useMemo(() => { //30. Creating the dashboard content header
       
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    },[]);

    const handleMonthSelected = (month: string) => { //30. Creating the dashboard content header
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch(error){
            throw new Error('invalid month value. Is accept 0 - 24')
        }
    }

    const handleYearSelected = (year: string) => { // 30. Creating the dashboard content header
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch(error){
            throw new Error('invalid year value. Is accept integer numbers')
        }
    }

    // 30. Creating the dashboard content header
    
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected}/> 
            </ContentHeader>
        <Content>
            <WalletBox
                title="saldo"
                color="#4E41F0"
                amount={150.00}
                footerlabel="atualizado com base nas entradas e saídas"
                icon="dolar"
            />
            <WalletBox
                title="entradas"
                color="#F7931B"
                amount={5000.00}
                footerlabel="atualizado com base nas entradas e saídas"
                icon="arrowUp"
            />
            <WalletBox
                title="saídas"
                color="#E44C4E"
                amount={485.00}
                footerlabel="atualizado com base nas entradas e saídas"
                icon="arrowDown"
            />
            </Content>
        </Container>

    );
}

export default Dashboard;