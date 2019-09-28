import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor() { 
    this.peliculas = [
      new Pelicula('Spiderman 4', 2019, 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'),
      new Pelicula('Los vengadores', 2018, 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'),
      new Pelicula('Batman vs Superman', 2015, 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'),
      new Pelicula('Iron man', 2011, 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'),
    ];
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit() {
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
