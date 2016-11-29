import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../common/shared.module";
import { PostsComponent } from './posts.component';
import { PostsService } from "./posts.service";
import { UsersModule } from "../users/users.module";
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersModule,
    DropdownModule
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
