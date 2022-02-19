import React, {useMemo} from 'react'

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import{ Container, Content, Filters } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string; //É um type, pois no arquivos de rotas também coloquei type.
        }
    }
}

const List: React.FC<IRouteParams> = ({ match }) => { //No caso do return, dentro do useMemo, eu preciso pegar o tipo do URL, no caso desse tipo ele vem dos parametros da rota. Como ele vem dos parametros da rota, agente pode vir aqui e colocar como parametro da nossa lista, um cara chamado match, esse match esta disponivel graças ao react router dom. Porque o nosso lista vem dentro do Route path, do arquivo Routes. Esse cara esta dentro de um switch e dentro de um layout, que devolve o nosso AppRoutes  para  nosso index, que esta dento do browserRouter. o browser router disponibiliza pra gente esse match, que ele vai conter os parametros que tem na rota "URL". Porem, para ser usada, é necessário criar uma interface.
    const { type } = match.params;

    const title = useMemo(() => { 
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    },[type]); 
    //Use memo memoriza valores. Trata-se de uma função anonima; na hora que bate no useMemo, ele ja vai disparar o conteudo da função automáticamente. Entre as chaves é o que agente quer fazer e colchete agente pode colocar um parametro, ou seja, agente pode definir assim: -Eu quero que esse cara atualize sempre quando tal coisa mudar". No nosso caso, vamos colocar a mudança da rota no url. Então quando a rota mudar, eu vou querer que mude o title do ContentHeader. Ainda sobre os colchetes vazios, o que agente colocar nele de constante ou varivel, se mudar, vai gerar uma nova renderização do title, graças ao useMemo; que fica escutando se o um determinado valor mudou.
    //Operador Ternário
    //Se eu colocar colchetes, sem nada, ele executa uma unica vez. Se eu passar o type no caso, eu estou criando uma dependencia.


    const lineColor = useMemo(() => { 
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E' 
    },[type]); 
    //Operador Ternário
    //Agora vamos mudar a cor do subinhado a medida que eu mudar as telas.
    //Se eu colocar colchete vazio, sem nada, ele executa uma unica vez. Se eu passar o type no caso, eu estou criando uma dependencia.

    const months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
    ]
    const years = [
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},
    ]
    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
               <SelectInput options={months}/> 
               <SelectInput options={years}/> 
            </ContentHeader>

            <Filters>
                <button 
                type="button"
                className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button 
                type="button"
                className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>


            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    );
}

export default List