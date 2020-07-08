import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/article';
import {ARTICLES} from '../shared/mock-articles';
import {ArticleService} from '../shared/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articlesrv: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void{
    this.articlesrv
      .getArticles()
      .subscribe(articles =>( this.articles = articles));
  }

}
