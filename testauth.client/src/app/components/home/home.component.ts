import { Component, inject } from '@angular/core';
import { BlogService } from '../../blog.service';
import { Blog } from '../../types/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})




export class HomeComponent {
  blogService = inject(BlogService); 
  featuredBlogs!: Blog[];
  ngOnInit() {
    this.blogService.getFeaturedBlogs().subscribe((result) => {
      this.featuredBlogs = result;
      console.log(this.featuredBlogs);
    })
  }
}
