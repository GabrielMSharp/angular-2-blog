import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PostComponent } from './post/post.component'; 
import { PostsComponent } from './posts/posts.component'; 
import { AppRoutingModule } from './app.routes'; 
import { PostsService } from './shared/services/posts.service';
import { UsersService } from './shared/services/users.service';
import { CommentsService } from './shared/services/comments.service';
import { PostsMappingService } from './shared/services/posts-mapping.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PostsService,
    UsersService,
    CommentsService,
    PostsMappingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
