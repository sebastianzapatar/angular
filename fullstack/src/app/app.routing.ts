import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
 ///Importar los componentes

 import {HomeComponent} from './components/home/home.component';
 import {BlogComponent} from './components/blog/blog.component'
 import {FormularioComponent} from './components/formulario/formulario.component'
import {ErrorComponent} from './components/error/error.component'
import  { ProductoEditarComponent } from './components/producto-editar/producto-editar.component';

//Agregar las rutas
const appRoutes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'blog',component:BlogComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'formulario/:nombre',component:FormularioComponent},
    {path:'blog/editar-producto/:id',component:ProductoEditarComponent},
    {path:'home/editar-producto/:id',component:ProductoEditarComponent},
    {path:'**',component:ErrorComponent},//La ruta de error siempre es la última

]
//Exportar el modulo de rutas
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
