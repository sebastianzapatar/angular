import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../../services/Pelicula.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService],
})
export class PeliculasComponent implements OnInit {

  constructor(private _peliculaService:PeliculaService) { }

  ngOnInit(): void {
    console.log(this._peliculaService.holaMundo());
  }

}
