import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router'
import { Producto } from '../../models/Producto'
import { ProductoService } from '../../services/Producto.service'

@Component({
  selector: 'app-producto-editar',
  templateUrl: '../formulario/formulario.component.html',
  styleUrls: ['./producto-editar.component.css'],
  providers: [ProductoService],
})
export class ProductoEditarComponent implements OnInit {

  public producto: Producto;
  public status: string;
  public is_edit:boolean;
  constructor(private _productoService: ProductoService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.producto = new Producto('','', '', 0);
  }

  ngOnInit(): void {
    this.ObtenerArticulo();
  }
  onSubmit(){
    
    this._productoService.Update(this.producto).subscribe(
      response=>{
        if(response.status=="Exitoso"){
          this.status="Exitoso"
          this._router.navigate(['/blog']);
        }
        else{
          this.status="Error"
        }
      },
      error=>{
        console.log("Error")
        this.status="Error"
      }
    )
    this._router.navigate(['/blog']);
  }
  ObtenerArticulo(){
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this._productoService.getProducto(id).subscribe(
        response=>{
          if(response.Producto1){
            this.producto=response.Producto1;
          }
        },
        error=>{
          console.log("Error");
        }
      )
    })
  }

}
