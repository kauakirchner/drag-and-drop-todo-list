const meuReduce = (callBack, initialValue, arrayInicial) => {
    let currentPreviousValue = initialValue;

    arrayInicial.forEach(element => {
        currentPreviousValue = callBack(currentPreviousValue, element);
    })

    return currentPreviousValue;
}

export { meuReduce }
