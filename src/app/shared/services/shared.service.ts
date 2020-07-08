import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  blogTitle = 'BlogMut';
  baseUrl = 'http://localhost:4200/';
  constructor() { }
}
