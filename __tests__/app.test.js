const { sumar, restar, esMayor } = require('../app');

describe('Validacion de la funcion sumar', () => {
    test('La funcion sumar debe estar definida', () => {
        expect(sumar).toBeDefined()
    });

    test('La suma de 2 + 2 debe ser 4', () => {
        let resultado = sumar(2, 2);
        expect(resultado).toBe(4);
    });
})

describe('Validacion de la funcion restar', () => {
    test('La funcion restar debe estar definida', () => {
        expect(restar).toBeDefined()
    });

    test('La resta de 2 - 2 debe ser 0', () => {
        let resultado = restar(2, 2);
        expect(resultado).toBe(0);
    });
})

test('La funcion esMayor debe indicar si es mayor edad', () => {
    expect(esMayor(18)).toBeTruthy();
})






/* test('Probando mi primer test', () => {
    expect(2).toBe(1);
})

test('Probando mi segundo test', () => {
    //console.log('Respuesta de mi primer test');
}) */