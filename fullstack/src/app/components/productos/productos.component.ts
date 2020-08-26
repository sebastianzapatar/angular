import { Component, OnInit, Input } from '@angular/core';
import {Producto} from '../../models/Producto';
import {Global} from '../../services/global';
import {ProductoService} from '../../services/Producto.service'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductoService],
})
export class ProductosComponent implements OnInit {
  @Input() productos:Producto[];
  public url:string;
  constructor(private _productoService:ProductoService) { 
    this.url=Global.url;
  }

  ngOnInit(): void {
  }
  eliminar(id:string){
    this._productoService.delete(id).subscribe(
      response=>{
        alert("Eliminado");
      },
      error=>{
        alert("error");
      }
    )
  }

}
