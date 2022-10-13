const meuReduce = (callBack, initialValue, arrayInicial) => {
    debugger
    let currentPreviousValue = initialValue;

    arrayInicial.forEach(element => {
        currentPreviousValue = callBack(currentPreviousValue, element);
    })

    return currentPreviousValue;
}

export { meuReduce }

// prevValue, currentValue: vai retornar sempre o novo prevValue 