import { Component, inject } from '@angular/core';
import { Blog } from '../../types/blog';
import { BlogService } from '../../blog.service';
import { CategoryService } from '../../category.service';
import { Category } from '../../types/category';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})


export class BlogsComponent {
  blogService = inject(BlogService);
  featuredBlogs!: Blog[];
  categoryService = inject(CategoryService);
  categoryList: Category[] = []
  blog: any;
  categoryName: string | any = null;


  ngOnInit() {
    this.blogService.getFeaturedBlogs().subscribe((result) => {
      this.featuredBlogs = result;
      console.log(this.featuredBlogs);
    })
    this.categoryService.getCategoryList().subscribe(result => { this.categoryList = result, console.log(this.categoryList) })
  }
  getCategoryName() {
    return this.categoryList.find(x => x.id == this.featuredBlogs[0]?.categoryId)?.name

  }
}

