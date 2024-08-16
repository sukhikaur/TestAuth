import { Component, inject } from '@angular/core';
import { BlogService } from '../../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../types/blog';


@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})



export class BlogComponent {
    blogService = inject(BlogService);
    route = inject(ActivatedRoute);
    blog!: Blog;



    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        console.log(id);
        this.blogService.getBlogById(id).subscribe((result) => {
            this.blog = result;


        });

    }
}
