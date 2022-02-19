const formatDate = (date: string): string => { 
    const dateFormatted = new Date(date);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const year = dateFormatted.getFullYear();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const day = dateFormatted.getDate() > 9 
    ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const month = dateFormatted.getMonth() + 1 > 9
    ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`; //+1 pois a contagem inicia no zero no mes de janeiro. Somando mais 1 deverá igualar aos demais o método de contagem.

    return `${day}/${month}/${year}`//Sinal do dolar para entender que é uma variavel.
};

export default formatDate;