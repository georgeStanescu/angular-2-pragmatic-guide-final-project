import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "../posts/posts.component";
import { UsersComponent } from "../users/users.component";
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
    {
      path: 'users', 
      component: UsersComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule {}
