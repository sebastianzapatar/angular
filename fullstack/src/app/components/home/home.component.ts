import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {Pelicula} from '../../models/Pelicula'
import {Global} from '../../services/global'
import {ProductoService} from '../../services/Producto.service'
import {Producto} from '../../models/Producto';
import { Input } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProductoService]
})
export class HomeComponent implements OnInit {
  public peliculas:Array<Pelicula>;
  public productos:Producto[];
  constructor(private _router:Router,private _productoService:ProductoService) { 
      }

  ngOnInit(): void {
    this._productoService.getProductos("res").subscribe(
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
  
  redireccion(){
    this._router.navigate(['/formulario','sebastian'])
  }

}
