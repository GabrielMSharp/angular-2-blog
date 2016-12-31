import { Component, OnInit } from '@angular/core';
import { Post } from './../shared/models/post.class'
import { User } from './../shared/models/user.class'
import { PostsMappingService } from './../shared/services/posts-mapping.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
    posts: Post[];

    constructor(private _postsMappingService: PostsMappingService) { }

    ngOnInit() {
        this.getAllPosts();
    }

    private getAllPosts(): void {
        this._postsMappingService.getAllPosts().subscribe(postsArray => {
            this.posts = postsArray;
        });
    }

    private handleError(error) {
        console.error(error);
    }
}