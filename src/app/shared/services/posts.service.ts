import { Injectable } from '@angular/core';
import { AppConstants } from '../helpers/app.constants';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.class'
import { Comment } from '../models/comment.class'
import { User } from '../models/user.class'

@Injectable()
export class PostsService {
    constructor(private _http: Http) { }

    getPostWithId(id: number): Observable<Post> {
        return this.getPosts().filter(post => {
                return id ? post['id'] === id : true
        })[0];
    }

    getPosts(id?: number): Observable<Post[]> {
        return this._http.get(AppConstants.API_URL + AppConstants.POSTS_URL)
            .map((response: Response) => response.json());
    }


}