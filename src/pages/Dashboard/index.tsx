import React, {useState, useMemo} from 'react'

import ContentHeader from '../../components/ContentHeader';
import MessageBox from '../../components/MensageBox'; //32. Creating the Wallet Status Card
import PieChartBox from '../../components/PieChartBox'; //34. Creating the Pie Chart Look//35. Loading the pie chart with data
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox'; //31. Creating wallet movement cards
import HistoryBox from '../../components/HistoryBox'; //36. Creating the Line Chart for the Balance Historian

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months'; //30. Creating the dashboard content header

import happyImg from '../../assets/happy.svg' // 32. Creating the Wallet Status Card
import sadImg from '../../assets/sad.svg' //33. Leaving cards with dynamic information

import { 
    Container,
    Content,
 } from './styles';

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1); //30. Creating the dashboard content header
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear()); //30. Creating the dashboard content header

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

    const totalExpenses = useMemo(() => { //33. Leaving cards with dynamic information //Boas práticas do SOLID
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date); //33. Leaving cards with dynamic information
            const year = date.getFullYear(); //33. Leaving cards with dynamic information
            const month = date.getMonth() + 1; //33. Leaving cards with dynamic information

            if(month === monthSelected && year === yearSelected){ //33. Leaving cards with dynamic information
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });

        return total;
    },[monthSelected, yearSelected]);

    const totalGains = useMemo(() => { //33. Leaving cards with dynamic information // Boas práticas do SOLID
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date); //33. Leaving cards with dynamic information
            const year = date.getFullYear(); //33. Leaving cards with dynamic information
            const month = date.getMonth() + 1; //33. Leaving cards with dynamic information

            if(month === monthSelected && year === yearSelected){ //33. Leaving cards with dynamic information
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });

        return total;
    },[monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    },[totalGains, totalExpenses]);

    const message = useMemo(() => {
        if(totalBalance < 0 ){
            return {
                title:"Que triste",
                description:"Neste mês, você gastou mais do que deveria.",
                footerText:"Verifique seues gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        }
        else if(totalBalance === 0){
            return {
                title:"Ufaa!",
                description:"Neste mês, você gastou exaamente o que ganhou.",
                footerText:"Tenha cuidado. No próximo mês, tente poupar o seu dinheiro.",
                icon: sadImg
            }
        }else{
            return {
                title:"Muito bem!",
                description:"Sua carteira está positiva!",
                footerText:"Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }

    },[totalBalance]);

    const relationExpensesVersusGains = useMemo(() => { //35. Loading the pie chart with data
        const total = totalGains + totalExpenses;

        const percentGains = (totalGains * total) / 100;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const percentExpenses = (totalGains * total) / 100;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data = [
            {
                name: 'Entradas',
                value: totalExpenses,
                percent: Number(percentGains.toFixed(1)), //35. Loading the pie chart with data
                color: '#E44c4e'
            },
            {
                name: 'Saidas',
                value: totalExpenses,
                percent: Number(percentGains.toFixed(1)), //35. Loading the pie chart with data
                color: '#F7931b'
            },
        ]
        return data; //35. Loading the pie chart with data
    },[totalExpenses, totalGains]);

    const handleMonthSelected = (month: string) => { //30. Creating the dashboard content header
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch{
            throw new Error('invalid month value. Is accept 0 - 24')
        }
    }

    const handleYearSelected = (year: string) => { // 30. Creating the dashboard content header
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch{
            throw new Error('invalid year value. Is accept integer numbers')
        }
    }

    // 30. Creating the dashboard content header
    // 32. Creating the Wallet Status Card <messageBox/>
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
                amount={totalBalance}
                footerlabel="atualizado com base nas entradas e saídas"
                icon="dolar"
            />
            <WalletBox
                title="entradas"
                color="#F7931B"
                amount={totalGains}
                footerlabel="atualizado com base nas entradas e saídas"
                icon="arrowUp"
            />
            <WalletBox
                title="saídas"
                color="#E44C4E"
                amount={totalExpenses}
                footerlabel="atualizado com base nas entradas e saídas"
                icon="arrowDown"
            />
            <MessageBox
                title={message.title}
                description={message.description}
                footerText={message.footerText}
                icon={message.icon}
            />

            <PieChartBox data={relationExpensesVersusGains} />

            <HistoryBox />
            </Content>
        </Container>

    );
}

export default Dashboard;