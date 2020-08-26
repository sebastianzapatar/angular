import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Producto} from '../models/Producto'
import {Global} from './global'
@Injectable()
export class ProductoService{
    public url:string;
    constructor(private _http:HttpClient){
        this.url=Global.url; /*
        Se creó una variable con la dirección del backend 
        Por si cambia tener más orden*/ 
    }   
    pruebas(){
        console.log("Soy el componente de producto");
    }
    getProductos(last:any=null):Observable<any>{//porque en el método
        if(last!=null){
            return this._http.get(this.url+'listarproducto/se');
        }
        return this._http.get(this.url+'listarproducto');
    }
    saveProducto(producto:Producto):Observable<any>{
        let params =JSON.stringify(producto);//debido a que hay que pasar un json 
        let headers=new HttpHeaders().set('Content-Type','application/json');//Este es el de angular si fuera otro sería diferente
        console.log(this.url+'saveproducto');
        return this._http.post(this.url+'saveproducto',params,{headers:headers});
    }
    Update(producto:Producto):Observable<any>{
        let params =JSON.stringify(producto);//debido a que hay que pasar un json 
        let headers=new HttpHeaders().set('Content-Type','application/json');//Este es el de angular si fuera otro sería diferente
        return this._http.put(this.url+'actualizarproducto/'+producto.id,params,{headers:headers});
    }
    delete(_id:string):Observable<any>{
        return this._http.delete(this.url+"borrarproducto/"+_id);
    }
    getProducto(id:string):Observable<any>{
        return this._http.get(this.url+'getproducto/'+id);
    }
}