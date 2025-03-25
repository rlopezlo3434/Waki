import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  standalone: true,
  imports: [],
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.css'
})
export class CardBlogComponent {
  @Input() data: any;
}
