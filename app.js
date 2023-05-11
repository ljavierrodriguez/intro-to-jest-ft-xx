function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function esMayor(edad){
    return edad >= 18 ? true : false;
}


module.exports = {
    sumar,
    restar,
    esMayor
}