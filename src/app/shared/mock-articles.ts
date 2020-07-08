import {Article} from './article';

export const ARTICLES: Article[] = [
  {
    id : 1,
    title: 'My first article',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere felis placerat, interdum velit sit amet, suscipit mauris. Vestibulum sit amet mi a ipsum placerat convallis. Vivamus vel ligula at mauris sodales ultrices at nec eros. Nunc dui ipsum, laoreet id nisl nec, commodo hendrerit libero. Nunc finibus placerat dolor, sed ultricies tortor scelerisque eu. Aenean interdum diam magna, vitae tempus ante interdum a. Cras quis lacinia nunc. Etiam eu ligula nec risus faucibus tempor. Etiam sollicitudin sodales ligula quis hendrerit. Mauris a urna ligula. Fusce id felis vitae tortor gravida pulvinar. Curabitur ultrices metus vel auctor venenatis. Cras sollicitudin ex eu nunc mollis gravida. Ut accumsan, odio eu bibendum auctor, leo elit suscipit urna, eu convallis dolor nulla non libero. Sed sit amet mauris eget velit efficitur porttitor.',
    description : 'This is my first article with some description in it',
    key: 'my-first-article',
    imageUrl : 'http://angular.io/assets/images/logos/angular/angular.png',
    date: new Date()
  },
  {
    id : 2,
    title: 'My second article',
    content: 'Integer lacinia dui id sodales consequat. Fusce laoreet id velit vel tempus. Nunc molestie at turpis in faucibus. Aliquam vel gravida leo, eget gravida odio. Quisque sodales, sapien vel venenatis blandit, velit dolor tempor massa, ut facilisis eros purus non turpis. Fusce consectetur sapien nisi, in molestie quam finibus non. Cras non leo est. Curabitur sollicitudin eros ac mattis congue. Duis congue eget massa sed posuere. Pellentesque nisl nisi, cursus eget nisi nec, fermentum scelerisque sapien. Donec id sapien vitae erat laoreet commodo non sed felis. Phasellus et ultrices eros, et commodo metus. Nulla non magna vitae enim aliquam varius. Morbi ornare pellentesque consequat. Curabitur cursus turpis est, sit amet interdum nisl ultricies non.',
    description : 'This is the second article with some description in it',
    key: 'my-second-article',
    imageUrl : 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png',
    date: new Date()
  }
]

