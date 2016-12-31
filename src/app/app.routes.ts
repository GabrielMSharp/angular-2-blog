import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent }   from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  { path: 'blog', component: PostsComponent },
  { path: 'post/:postId', component: PostComponent },
  { path: '',   redirectTo: '/blog', pathMatch: 'full' },
  { path: '**', component: PostsComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}