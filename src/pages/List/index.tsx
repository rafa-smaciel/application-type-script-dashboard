import React, {useMemo, useState, useEffect} from 'react';
import { uuid } from 'uuidv4';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate'; //Após a importação eu coloco essa variavel no useEffect para formatar a data.
import listOfMonths from '../../utils/months';

import{ Container, Content, Filters } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string; //É um type, pois no arquivos de rotas também coloquei type.
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => { //No caso do return, dentro do useMemo, eu preciso pegar o tipo do URL, no caso desse tipo ele vem dos parametros da rota. Como ele vem dos parametros da rota, agente pode vir aqui e colocar como parametro da nossa lista, um cara chamado match, esse match esta disponivel graças ao react router dom. Porque o nosso lista vem dentro do Route path, do arquivo Routes. Esse cara esta dentro de um switch e dentro de um layout, que devolve o nosso AppRoutes  para  nosso index, que esta dento do browserRouter. o browser router disponibiliza pra gente esse match, que ele vai conter os parametros que tem na rota "URL". Porem, para ser usada, é necessário criar uma interface.
    const [data, setData] = useState<IData[]>([]); //Qual é a estrutura do useState? O useState é um array que na primeira posição "data", ele guarda o valor do estado e na seunda posição ele tem uma função que atualiza o valor do estado; ja nos colchetes do useState, conseguimos atribuir um valor inicial. Porém é legal nós criamos uma interface para dizer quais valores/informações agente vai lidar com  esse "data".Depois de criar o interface, eu coloco os simbolos de menor e passo a interface depois fecho com o simbolo de maior.

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));//Nesse estado eu guardo o mes selecionado no filtro. //(String(new Date().getMonth() +1)), serve para que toda a vez que iniciarmos a lista ele mostre o mês atual.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())); //Nesse estado eu guardo o ano selecionado no filtro. //(String(new Date().getFullYear())), serve para que toda a vez que iniciarmos a lista ele mostre o ano atual.

    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']); //Para o useEffect do handleFrequency, deve-se criar um novo estado para armazenar a frequencia. Portanto; eu estou dizendo que o nosso estado, selectedFrequecy, ele vai começar com um verto, um array, com os dois filtros de frequencia habilitados. Recorrente e Eventual.

    const { type } = match.params;

    const title = useMemo(() => { //Use memo memoriza valores. Trata-se de uma função anonima; na hora que bate no useMemo, ele ja vai disparar o conteudo da função automáticamente. Entre as chaves é o que agente quer fazer e colchete agente pode colocar um parametro, ou seja, agente pode definir assim: -Eu quero que esse cara atualize sempre quando tal coisa mudar". No nosso caso, vamos colocar a mudança da rota no url. Então quando a rota mudar, eu vou querer que mude o title do ContentHeader. Ainda sobre os colchetes vazios, o que agente colocar nele de constante ou varivel, se mudar, vai gerar uma nova renderização do title, graças ao useMemo; que fica escutando se o um determinado valor mudou.
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'//Operador Ternário
    },[type]); //Se eu colocar colchetes, sem nada, ele executa uma unica vez. Se eu passar o type no caso, eu estou criando uma dependencia.


    const lineColor = useMemo(() => { //Não esta funcionando 19/02/2022 - Rafael
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E' //Operador Ternário
    },[type]); //Agora vamos mudar a cor do subinhado a medida que eu mudar as telas.
    //Se eu colocar colchete vazio, sem nada, ele executa uma unica vez. Se eu passar o type no caso, eu estou criando uma dependencia.
    
    const listData = useMemo(() => { 
        return type === 'entry-balance' ? gains : expenses; //Operador Ternário
    },[type]);
        
    const years = useMemo(() => { //25. Carregando os meses e anos dinamicamente: Vou comentar o year pois vou usar o mesmo  nome pra fazer o nosso memo. useMemo, pois queremos decorar esses valores; como são valores que não irão mudar tanto, com uma frequencia grande, então usamos o useMemo pra ele decorar esses valores para nós; no casso essa listagem de anos. Vou criar uma variavel auxiliar que vou chamar de uniqueYears, porque se eu não usar ele e puxar os anos, ele vai me trazer um monte de 2020; eu quero ir controlando os anos que são unicos; então eu digo que o uniqueYears vai ser um vetor numerico; uma lista de números "number[]"; e por enquanto, inicialmente, ele vai ser uma lista vazia []. Depois eu vou pegar meu lsitData e vou percorrer cada item dele; aqui vou usar o forEach, porque eu não vou devolver uma lista pra ninguem, agora eu vou guardando os nueros unicos ali dentro, por isso eu vou usar o forEach. Vou passar dentro do forEach o item, poderia colocar como year, porem pode conflitar pelo fato de eu ja estar usando esse nome acima. Depois eu vou pegar a data, como agente ja esta acostumado; com uma const date, com um new Date do item.date; só que agora só me interessa o ano; observação, se eu tivesse usado o year la em cima, ja teria dado errado na const year do lsitData. Então dentro dessa constante, eu tenho o ano de cada registro. Depois eu lanço um if (if(!uniqueYears.includes(year))), para verificar se dentro desse array o ano esta incluso; se esta incluido dentro da lista. Se caso não existir, eu to negando; ou seja com o "!". Portanto se ele não esta incluida na lista eu passo dentro um push, adicionando o ano na lista. Portanto, na primeira vez ele vai adicionar o ano através do let uniqueYears pois estará vazia. Na segunda vez que o forEach girar ele vai verificar que tem um ano, então ele não vai entrar dentro do if, e não vai adicionar numeros; isso impede de termos dumeros duplicados la. 
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });
    //Do lado de fora irei retornar os meus valores. Ele tem que retornar no formato similar ao Json. Então eu pego o uniqueYears, faço um .map para retornar um novo objeto formatado. A ideia de usar o mapa é devido ao fato dele retornar uma nova lista. Vou passar o year, ja que o year existe somente nesse escopo, desse mapa. Retorno dentro do map um value, que vai ser um year e um label que será um year também.
        return uniqueYears.map(year => {
            return{
                value: year,
                label: year,
            }
        });
    },[listData]);

    const months = useMemo(() => {
        //Após criar o arquivo months.ts com a lista de meses e importar para dentro do projeto, vou retornar da minha lista de meses um map, onde passarei os mes(valor, tipo janeiro, fevereiro...) e o index é o numero respectivo a cada item da lista, iniciando do zero. Dentro do map, retorno o value e o label. No value vai ser o index + 1 e o label vai ser o conteudo mesmo, o month.
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    },[]);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency) //Eu quero saber se quando o usuario clicar em uma determinado estado, se ele ja esta selecionado ou não. Ou seja, explicando a const. Quando o usuario clicar, por exemplo em recorrentes, dentro dos parenteses estará o recorrente; eu quero encontrar o index em que o item seja igual a frequencia. 
        if(alreadySelected >= 0){
            const filtered = selectedFrequency.filter(item => item !== frequency);//Para executar a funcionalidade de filtro do recorrente ou eventual, eu vou criar uma constante que eu vu chamar de filtered que será igual ao selectedFrequency, e depois eu vou filtra, por isso ".filter", ou seja, irei filtrar, fazer um filtro. Dentro desse filtro, eu vou percorrer as frequencias que vou chamar de item; portanto, em sintexe eu vou pegar minha coleção que tera todo os filtro la e ai eu estou filtrando ela. Eu vou pedir para ela retornar todos os filtros que estam guardados la, menos esse que existe; ou seja, se o usuario clicar, se o filtro ja existir, é pq ele ta quenrendo desmarcar ele. 
            setSelectedFrequency(filtered); //Eu mando la pra dentro somente o que o usuario escolheu manter filtrado.
        }else{
            setSelectedFrequency((prev) => [...prev, frequency]); //Entre colchetes para entender que é uma lista. Continuando a lógica acima, com o else; caso o filtro ele não existe ainda é pq o usuario ainda esta clicando nele para que de fato ele seja filtrado. Inserindo uma prev com arrow funtion, eu consigo recuperar o estado anterior, para manter ele; então vou pegar o estado anterior, vou manter o que estiver selecionado la; então eu estou pegando do estado anterior "prev" e espalhando aqui dentro através do "...prev" e junto com os filtros anteriores eu quero adicionar o filtro frequency que o usuario esta adicionando.
        }
    }


    useEffect(() => {
        //Muito parecido com o useMemo, porém com a diferença que ele é disparado toda a vez que atela é carregada.
        const filteredData = listData.filter(item => { //Vou fazer um map no listData. E para cada item eu vou devolver com o return e vou copiar o formato que ele esta esperando do interface, conforme abaixo:

            //Fazendo a função de filtro. Primeiramente vou mudar de map para filter. Vou mudar para filter pois quero filtrar pelos valores que tem a mesma data e ano que estiver selecionado.
            const date = new Date(item.date); //Primeiramente vou pegar os numero dos dados mockados da pasta repositories e vou tratar esses dados; vou converter eles em data.
            const month = String(date.getMonth() + 1); //Para facilitar, vou deixar separado; //Para igualar com o retorno da função month === monthSelected, vou converter esse dado em string;
            const year = String(date.getFullYear()); //Para igualar com o retorno da função year === yearSelected, vou converter esse dado em string;

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency); //ou seja, eu vou retornar as tarefas que possuem o mês igual ao mês slecionado, e o ano selecionado.
        }); //Portanto primeiro eu filtrei pelo mês e ano.

        //Agora eu tenho que percorrer ele para formatar;
        const formattedData = filteredData.map(item => { 
            return {
                id: uuid(), //Para simplificar, vamos usar a biblioteca uuid para gerar um id unico com mais efetividade// //String(new Date().getTime()) + item.amount, Para gerar numeros diferentes com o (new Date().getTime() + item.amount); uma combinação de dois itens para gerar ID's diferentes. //String(Math.random() * data.length), era assim. Para criar um ID para o map abaixo, vou usar uma função do java script chamada math.random. Eu vu pedir pra ele criar pra mim um numero aleatório dentro da numeração do tamanho da nossa lista. Se alista tiver 49 itens, o random vai criar 49 id's. 
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date), // Conforme arquivo formatDate.ts;
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        })
        setData(formattedData); //Portanto depois eu pego e devolvo os valores formatados.        
    },[listData, monthSelected, yearSelected, data.length, selectedFrequency]);//Se não colocarmos nada nos colchetes, ele é disparado somente 1 vez. Se colocarmos uma constante ou variavel nos colchetes, ele sempre vai recarregar/renderizar se o valor que agente colocar nos colchetes mudar.


    //DefaultValue no return do SelectInput, faz parte da lógica de que quando eu recarregar a pagina, ele sempre mostre o valor doano padrão.

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
               <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/> 
               <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/> 
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-recurrent
                    ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}//Para melhorar o visual no momento de realizar o filtro clicando nos botões, vamos inserir um efeito de destacar o clicar e apagar o oposto. Assim, incluiremos uma classe baseado numa condição. Através da interpolação de string. Sobre a condição, apo´s o $, eu vou pegar a minha coleção do selectedFrequency, vou querer saber se la dentro esta incluso (includes) o recorrente. Se o recorrente esta la dentro da minha coleção de frequencia de filtro, quer dizer que ele esta sendo filtrado por recorrencia; e se isso for verdade eu vou acrescentar uma classe/tag chamada de tag-actived. 
                    onClick={() => handleFrequencyClick('recorrente')} //Quando eu clicar nesse botão, de recorrente, então eu vou chamar a nossa função que vou criar agora, que vai ser a função handleFrequencyClick, e depois vou passar para o parametro recorrente.
                >
                    Recorrentes
                </button>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-eventual
                    ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')} //Com o eventual a mesma coisa da nota acima, com a mudança de passar o eventual como parametro.
                >
                    Eventuais
                </button>
            </Filters>


            <Content> 
                {
                    data.map(item => (
                    <HistoryFinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                    />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List