export class Pantera{
    id:String;
    username:String;
    password:String;

    constructor(_id:String, _nombre:String, _contrasena:String){
        this.id=_id;
        this.username=_nombre;
        this.password=_contrasena;
    }

    getId(){
        return this.id;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    setId(_id:String){
        this.id=_id;
    }
    setUsername(_nombre:String){
        this.username=_nombre;
    }
    setPassword(_contrasena:String){
        this.password=_contrasena;
    }
    
}