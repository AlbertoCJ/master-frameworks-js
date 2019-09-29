import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public search: string;
  public articles: Article[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.search = params['search'];

      this._articleService.search(this.search).subscribe(
        response => {
          if (response.articles) {
            this.articles = response.articles;
          }
        },
        err => {
          console.log(err);
          this.articles = [];
        }
      );
    })
  }

}
