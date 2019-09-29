import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas = [
        new Pelicula('Spiderman 4', 2019, 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'),
        new Pelicula('Los vengadores', 2018, 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'),
        new Pelicula('Batman vs Superman', 2015, 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'),
        new Pelicula('Iron man', 2011, 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'),
      ];

    getPeliculas(){
        return this.peliculas;
    }
}