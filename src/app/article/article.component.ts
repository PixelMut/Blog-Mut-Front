import {Component, OnInit} from '@angular/core';
import {Article} from '../shared/article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../shared/services/article.service';
import {Meta, Title} from '@angular/platform-browser';
import {SharedService} from '../shared/services/shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article()

  constructor(public route: ActivatedRoute,
              private articleSrv: ArticleService,
              private router: Router,
              private titleSrv: Title,
              private sharedSrv: SharedService,
              private meta: Meta) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
         const key = param.key;
         this.articleSrv.getArticle(key).subscribe(
           article => {
             if(article){
               this.article = article;
               this.titleSrv.setTitle(`${this.article.title} - ${this.sharedSrv.blogTitle}` );
               this.meta.addTags([
                 { name : 'description', content: this.article.description },
                 { property: 'og:title', content: `${this.article.title} - ${this.sharedSrv.blogTitle}` },
                 { property: 'og:type', content: 'website'},
                 { property: 'og:url', content: this.sharedSrv.baseUrl + this.article.key},
                 { property: 'og:image', content: this.article.imageUrl},
                 { property: 'og:description', content: this.article.description},
                 { property: 'og:site_name', content: this.sharedSrv.blogTitle}
               ]);
             }else{
               this.router.navigateByUrl('404');
               return;
             }
           }
         );
      });
  }

}
