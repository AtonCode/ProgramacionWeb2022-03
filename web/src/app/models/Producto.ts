export class Producto{
    id:String;
    nombre:String;
    existencias:String;

    constructor(_id:String, _nombre:String, _existencias:String){
        this.id=_id;
        this.nombre=_nombre;
        this.existencias=_existencias;
    }
}