import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { FeaturedArticleComponent } from '../../components/featured-article/featured-article.component';
import { ArticleComponent } from '../../components/article/article.component';
import { SwiperItemComponent } from '../../components/swiper-item/swiper-item.component';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  imports: [
    FeaturedArticleComponent,
    ArticleComponent,
    SwiperItemComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomePage {
  articles = signal([1, 2, 3, 4]);
  swiperItems = signal([1, 2, 3, 4]);
}
