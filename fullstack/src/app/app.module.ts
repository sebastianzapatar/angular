import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MiComponente} from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeadersComponent } from './components/headers/headers.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoEditarComponent } from './components/producto-editar/producto-editar.component';
@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    PruebasComponent,
    HeadersComponent,
    SliderComponent,
    FormularioComponent,
    BlogComponent,
    HomeComponent,
    ErrorComponent,
    PeliculaComponent,
    ProductosComponent,
    ProductoEditarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
