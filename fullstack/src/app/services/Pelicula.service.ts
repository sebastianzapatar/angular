import {Injectable} from '@angular/core';
import {Pelicula} from '../models/Pelicula';

@Injectable()
export class PeliculaService{
    holaMundo(){
        return "Hola mundo desde el servicio";
    }
}