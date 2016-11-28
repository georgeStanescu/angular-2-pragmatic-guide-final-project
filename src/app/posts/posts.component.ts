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
  pageTitle = "List of Posts";
  postsLoading: boolean = true;
  selectedPost: Post = null;
  commentsLoading: boolean = false;

  constructor(private _service: PostsService) { }

  ngOnInit() {
    this._service.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      },
      null,
      () => {
        this.postsLoading = false;
      });
  }

  onPostClicked(selectedIndex: number) {
    this.selectedPost = this.posts[selectedIndex];
    this.selectedPost.comments = [];
    this.commentsLoading = true;

    this._service.getCommentsForPost(selectedIndex)
      .subscribe(comments => {
        this.selectedPost.comments = comments;
      },
      null,
      () => {
        this.commentsLoading = false;
      });
  }

}
