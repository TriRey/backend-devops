
import { describe, test } from "@jest/globals";
import { suma, restar, operar } from "../src/app/calculadora";

describe("nombre de la suite de test", () => {
    test("Prueba basica", () => {
        expect(1).toBe(1);
    });

    test("Pruebas de suma()", () => {
        // Prueba con un formato completo
        const resultado = suma(1, 2);
        expect(resultado).toBe(3);

        expect(suma(10, 1)).toBe(11);
        expect(suma(10, 1536)).toBe(1546);
        expect(suma(10, 1.1)).toBe(11.1);

        // errores forzados    
        let a: any = 1;
        let b: any = "1";
        expect(suma(a, b)).toBeNaN();

        a = 1;
        b = undefined;
        expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");

    });

    test("Pruebas de restar()", () => {
        // Prueba con un formato completo
        const resultado = restar(3, 2);
        expect(resultado).toBe(1);

        expect(restar(10, 1)).toBe(9);
        expect(restar(100, 9)).toBe(91);
        expect(restar(10, 1.1)).toBe(8.9);

        // errores forzados    
        let a: any = 1;
        let b: any = "1";
        expect(restar(a, b)).toBeNaN();

        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");

    });


});