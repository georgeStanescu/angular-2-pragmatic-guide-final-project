import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppRoutingModule } from "./routing/app-routing.module";
import { HomeModule } from "./home/home.module";
import { UsersModule } from "./users/users.module";
import { PostsModule } from "./posts/posts.module";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
