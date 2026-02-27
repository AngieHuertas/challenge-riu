import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-article',
  imports: [],
  standalone: true,
  templateUrl: './featured-article.component.html',
  styleUrl: './featured-article.component.css'
})
export class FeaturedArticleComponent {
  article = {
    description: 'Lorem ipsum dolor sit amet',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
  }
}
