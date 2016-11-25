import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserEditorComponent } from "./user-editor.component";
import { PreventUnsavedChangesGuard } from "../common";

const usersRoutes: Routes = [
    {
      path: 'users', 
      component: UsersComponent
    },
    {
      path: 'users/:id', 
      component: UserEditorComponent,
      canDeactivate: [ PreventUnsavedChangesGuard ]
    },
    { 
      path: 'users/new', 
      component: UserEditorComponent,
      canDeactivate: [ PreventUnsavedChangesGuard ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ PreventUnsavedChangesGuard ]
})
export class UsersRoutingModule {}
