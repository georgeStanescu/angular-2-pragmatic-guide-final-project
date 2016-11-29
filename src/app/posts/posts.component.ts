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
  pageSize = 5;

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
        this.pagedPosts = _.take(this.posts, this.pageSize);
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

  onPageChanged(page: number) {
    let startIndex = (page - 1) * this.pageSize;
    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
  }
}
