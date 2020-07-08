import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/article';
import {ArticleService} from '../shared/services/article.service';
import {Title} from '@angular/platform-browser';
import {SharedService} from '../shared/services/shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articlesrv: ArticleService,
              private titleSrv: Title,
              private sharedSrv: SharedService) { }

  ngOnInit(): void {
    this.titleSrv.setTitle(`${this.sharedSrv.blogTitle}`);
    this.getArticles();
  }

  getArticles(): void{
    this.articlesrv
      .getArticles()
      .subscribe(articles => ( this.articles = articles));
  }

}
