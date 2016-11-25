import { Component, OnInit } from '@angular/core';
import { PostsService } from "./posts.service";
import { Post } from "./post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  isLoading: boolean = true;

  constructor(private _service: PostsService) { }

  ngOnInit() {
    this._service.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      },
      null,
      () => {
        this.isLoading = false;
      });
  }

}
