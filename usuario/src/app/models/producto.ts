export class Producto {
    id?: number;
    nombre: string;
    existencias: number;

    constructor(nombre: string, existencias: number) {
        this.nombre = nombre;
        this.existencias = existencias;
    }
}


