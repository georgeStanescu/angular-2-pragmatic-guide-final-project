import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserEditorComponent } from "./user-editor.component";

const usersRoutes: Routes = [
    {
      path: 'users', 
      component: UsersComponent
    },
    { 
      path: 'users/new', 
      component: UserEditorComponent 
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class UsersRoutingModule {}
