import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../shared/article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../shared/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article()

  constructor(public route: ActivatedRoute,
              private articleSrv: ArticleService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
         const key = param.key;
         this.articleSrv.getArticle(key).subscribe(
           article => {
             if(article){
               this.article = article;
             }else{
               this.router.navigateByUrl('404');
               return;
             }
           }
         );
      });
  }

}
