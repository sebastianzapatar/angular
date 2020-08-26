/*
var ProductoSchema=Schema({
    nombre:String,
    proovedor:String,
    precio:Number,
});
*/
export class Producto{
    /*public titulo:String;
    public imagen:String;
    public year:Number;

    constructor(titulo,imagen,year){
        this.titulo=titulo;
        this.imagen=imagen;
        this.year=year;
    }*/
    constructor(
        public id:string,
        public nombre:string,
        public proovedor:string,
        public precio:number,
       ){}
}
