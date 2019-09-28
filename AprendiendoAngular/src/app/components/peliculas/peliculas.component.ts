import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<any>;

  constructor() { 
    this.peliculas = [
      {year: 2019, title: 'Spiderman 4', image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwioh9XTt_PkAhULDxQKHbGDCbYQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Fspiderman-best-marvel-cinematic-universe-moments%2F&psig=AOvVaw1MSr_8dAtRH5W3rzYhyrN-&ust=1569757258713432'},
      {year: 2018, title: 'Los vengadores', image: 'https://static2.diariouno.com.ar/media/2019/04/avengers-endgame-poster-square-crop-700x674.jpg'},
      {year: 2015, title: 'Batman vs Superman', image: 'https://pics.filmaffinity.com/Batman_v_Superman_El_amanecer_de_la_Justicia-728293826-large.jpg'},
      {year: 2011, title: 'Iron man', image: 'https://pics.filmaffinity.com/Batman_v_Superman_El_amanecer_de_la_Justicia-728293826-large.jpg'}
    ];
  }

  ngOnInit() {
    console.log(this.peliculas);
  }

}
