import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsersRoutingModule } from "../users/users-routing.module";
import { PostsComponent } from "../posts/posts.component";
import { HomeComponent } from "../home/home.component";

const appRoutes: Routes = [
    { 
      path: 'home', 
      component: HomeComponent 
    },
    { 
      path: 'posts', 
      component: PostsComponent 
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    UsersRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule {}
