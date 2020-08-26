import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
@Component({
    selector:'mi-componente',
    templateUrl:'./mi-componente.component.html'
    
})
export class MiComponente implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public comentario:string;
    public year:number;
 constructor(){
     this.titulo="Primer componente"
     this.comentario="Sigo acá"
     this.year=2020
     console.log("Componenete cargado")
 }
 cambiartitulo(){
     this.titulo="Se ha cambiado el titulo"
 }
 ngOnInit(){
     console.log("Componente iniciado")
 }
 ngOnDestroy(){
     console.log("El componente se va a eliminar de la ejecución")
 }
 ngDoCheck(){
     console.log("DoCheck iniciado");
     console.log(this.titulo);
 }
}