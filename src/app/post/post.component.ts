import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Post } from './../shared/models/post.class'
import { PostsMappingService } from './../shared/services/posts-mapping.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
    post: Post;

    constructor(private _postsMappingService: PostsMappingService, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.getPostWithId(+this._activatedRoute.snapshot.params['postId']);
    }

    private getPostWithId(id: number): void {
        this._postsMappingService.getPostWithId(id)
            .subscribe(post => {
                this.post = post;
            }, error => this.handleError);
    }

    private handleError(error) {
        console.error(error);
    }
}