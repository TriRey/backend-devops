function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'restar') {
        return restar(a, b);
    } else if (operacion === 'multiplicar') {
        return multiplicar(a, b);
    } else if (operacion === 'dividir') {
        return dividir(a, b);
    } else if (operacion === 'elevar') {
        return potencia(a, b);
    } else if (operacion === 'factorial') {
        return factorizar(a);
    }

}

function suma(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}

function factorizar(a: number) {
    if (a === undefined) {

        throw new Error("No se puede factorizar indefinidos");
    }
    if (typeof a !== 'number') {
        return NaN;
    }

    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result;

    
}

function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede elevar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a ** b;
}

export { suma, operar, restar, multiplicar, dividir, factorizar, potencia};