import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../types/category';
import { BlogService } from '../../../blog.service';
import { Blog } from '../../../types/blog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {
  formBuilder = inject(FormBuilder);
  blogForm = this.formBuilder.group({
    id: [null],
    title: ['', [Validators.required]],
    categoryId: [null, [Validators.required]],
    description:[''],
    content: ['',[Validators.required]],
    image:[''],
    isFeatured:[false],
  });


  categoryService = inject(CategoryService);
  blogService = inject(BlogService);
  categoryList: Category[] = [];
  router = inject(Router);
  route = inject(ActivatedRoute)
  isEdit = false;


  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.isEdit = true;
      this.blogService.getBlogById(+id).subscribe(result => {
        this.blogForm.patchValue(result as any)
      })
    }


    this.categoryService.getCategoryList().subscribe((result) => (this.categoryList = result));
  }

    create()
    {
      console.log(this.blogForm.value);
      let model: any = this.blogForm.value;
      this.blogService.addBlog(model as Blog).subscribe(() => {
        alert("Blog Created.")
       this.router.navigateByUrl("/admin/blogs")
      });
  }

  update() {
    console.log(this.blogForm.value);
    let model: any = this.blogForm.value;
    this.blogService.updateBlog(this.blogForm.value.id!,model as Blog).subscribe(() => {
      alert("Blog Updated.")
      this.router.navigateByUrl("/admin/blogs")
    });

  }


  }
