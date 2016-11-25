import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../common/shared.module";
import { PostsComponent } from './posts.component';
import { PostsService } from "./posts.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
