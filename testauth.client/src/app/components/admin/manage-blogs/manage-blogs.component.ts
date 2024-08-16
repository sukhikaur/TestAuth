import { Component, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BlogService } from '../../../blog.service';
import { Blog } from '../../../types/blog';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../types/category';



@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrl: './manage-blogs.component.scss'
})
export class ManageBlogsComponent {
  displayedColumns: string[] = ['title', 'categoryId','action'];
  dataSource: MatTableDataSource<Blog>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.blogs);
  }

  blogs:Blog[]=[];
  blogService = inject(BlogService);
  categoryService = inject(CategoryService);
  categoryList: Category[] = [];

 ngOnInit() {
   this.blogService.getAllBlogs().subscribe(result => {
     this.blogs = result;
     this.dataSource.data = this.blogs;
   });
   this.categoryService.getCategoryList().subscribe(result => {this.categoryList=result })

}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

     getCategoryName(data: Blog){
       return this.categoryList.find(x => x.id === data.categoryId)?.name;
    }

  delete(data: Blog) {
    console.log(data.id);
    this.blogService.deleteBlog(data.id!).subscribe(() => {
      this.dataSource.data = this.blogs.filter((x) => x.id != data.id);
    });
  }
  }



