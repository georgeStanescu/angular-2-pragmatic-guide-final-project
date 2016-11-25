import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsService } from "./posts.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostsComponent
  ],
  exports: [
    PostsComponent
  ],
  providers: [ PostsService ]
})
export class PostsModule { }
