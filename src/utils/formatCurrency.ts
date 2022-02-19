const formatCurrency = (current: number): string => { //Basicamente essa constante diz que eu vou receber um numero, o current e o retorno dessa função irá devolver uma string. Portanto o retorno será o current, que será passado para o nosso idioma, passará a ter a formatação de uma moeda, o formato Brasileiro, e devolve tudo isso em uma string.
    return current.toLocaleString(
        'pt-br',
        {style: 'currency', currency: 'BRL'}
    )
}

export default formatCurrency;