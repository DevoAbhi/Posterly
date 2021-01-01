//VV2jyDhqk0ylHaVj
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Post} from './post.model';
import { Subject } from 'rxjs';

@Injectable({providedIn : 'root'})
export class PostService{
  private posts : Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor (private http : HttpClient){}


  getPost(){
    this.http.get<{message: string; posts: Post[];}>('http://localhost:3000/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      })
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title : string , content : string){
    const post : Post = { id : null , title : title , content : content};
    this.http.post<{message: string}>('http://localhost:3000/posts', post)
      .subscribe((resData) => {
        console.log(resData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      })
  }
}



