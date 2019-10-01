import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        err => {
          console.log(err);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id) {

    Swal.fire({
      title: '¡Estas seguro?',
      text: "¡No podras revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this._articleService.delete(id).subscribe(
          response => {
            Swal.fire({
              title: '¡Artículo borrado.!',
              type: 'success',
              showConfirmButton: false
            });
            this._router.navigate(['/blog']);
          },
          err => {
            Swal.fire({
              title: '¡Artículo borrado.!',
              type: 'error'
            });
          }
        );
      }
    })
  }

}
