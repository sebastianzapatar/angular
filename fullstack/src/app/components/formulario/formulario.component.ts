import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router'
import {Producto} from '../../models/Producto'
import {ProductoService} from '../../services/Producto.service'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[ProductoService],
})
export class FormularioComponent implements OnInit {
  
  public campo:string;
  public producto:Producto;
  public status:string;
  constructor(private _productoService:ProductoService,
    private _router:Router,
    private _route:ActivatedRoute) { 
    this.producto=new Producto('','','',0);
  }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this._productoService.saveProducto(this.producto).subscribe(
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
  hasdadoclick(){
    alert("Gracias por dar click")
  }
  salir(){
    alert("Saliste del campo")
  }
  mensaje(){
    alert("enter :P")
  }
}
