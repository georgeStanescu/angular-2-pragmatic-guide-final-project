import { Component, OnInit } from '@angular/core';
import { PostsService } from "./posts.service";
import { UsersService } from "../users/users.service";
import { Post } from "./post";
import { IUser } from "../users/user";
import * as _ from 'underscore';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  users: IUser[] = [];
  pageTitle = "List of Posts";
  postsLoading: boolean;
  selectedPost: Post = null;
  commentsLoading: boolean = false;
  pagedPosts: Post[] = [];
  pageSize = 10;

  constructor(private _service: PostsService, private _usersService: UsersService) { }

  ngOnInit() {
    this.loadUsers();

    this.loadPosts();
  }

  private loadUsers() {
    this._usersService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  private loadPosts(filter?) {
    this.postsLoading = true;

    this._service.getPosts(filter)
      .subscribe(posts => {
        this.posts = posts;
        this.pagedPosts = this.getPostsInPage(1);
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

  reloadPosts(filter) {
    this.selectedPost = null;

    this.loadPosts(filter);
  }

  onPageChanged(page) {
    this.pagedPosts = this.getPostsInPage(page);
  }

  private getPostsInPage(page) {
    let result = [];
    let startingIndex = (page - 1) * this.pageSize;
    let endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

    for (let i = startingIndex; i < endIndex; i++) {
      result.push(this.posts[i]);
    }

    return result;
  }
}
