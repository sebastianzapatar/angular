import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/Producto.service'
import {Global} from '../../services/global'
import {Producto} from '../../models/Producto'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[ProductoService],
})
export class BlogComponent implements OnInit {
  public url:string;
  constructor(private _productoService:ProductoService) { 
    this.url=Global.url;
  }
  public productos:Producto[];

  ngOnInit(): void {
    this._productoService.pruebas();
    this._productoService.getProductos().subscribe(
      response=>{
        if(response.Productos){ /*
          Siempre revisar como nos devuelve los datos el servidor
          */
          this.productos=response.Productos;
        }
      },
      error=>{
        console.log("error")
      }
    );
  }
  

}
