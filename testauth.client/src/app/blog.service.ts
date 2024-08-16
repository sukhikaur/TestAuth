import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Blog } from './types/blog';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class BlogService {
  private http = inject(HttpClient);

  constructor() { }

  getFeaturedBlogs()
  {
    return this.http.get<Blog[]>(environment.apiUrl + '/api/Blogs/featured');
  }


  getAllBlogs() {
    return this.http.get<Blog[]>(environment.apiUrl + "/api/Blogs").pipe(
      catchError(error => { console.error(error); throw error })
    )
  }


  getBlogById(id: number) {
    return this.http.get<Blog>(environment.apiUrl +'/api/Blogs/' + id);
  }

  deleteBlog(id: number) {
    return this.http.delete(environment.apiUrl + '/api/Blogs/' + id);
  }

  addBlog(blog: Blog) {
    return this.http.post(environment.apiUrl + '/api/Blogs', blog);
  }
  updateBlog(id:number,blog:Blog) {
    return this.http.put(environment.apiUrl + '/api/Blogs/'+id, blog);


  }




}
