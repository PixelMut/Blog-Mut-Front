import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {SharedService} from '../shared/services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'About';

  constructor(private titleSrv: Title,
              private sharedSrv: SharedService) { }

  ngOnInit(): void {
    this.titleSrv.setTitle(`${this.title} - ${this.sharedSrv.blogTitle}` );
  }

}
