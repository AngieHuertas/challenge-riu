import { Component, signal } from '@angular/core';
import { FeaturedArticleComponent } from '../../components/featured-article/featured-article.component';
import { ArticleComponent } from '../../components/article/article.component';

@Component({
  selector: 'app-home',
  imports: [
    FeaturedArticleComponent,
    ArticleComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomePage {
  articles = signal([1, 2, 3, 4]);
}
