import { Injectable } from '@angular/core';
import { AppConstants } from '../helpers/app.constants';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.class'

@Injectable()
export class CommentsService {

    constructor(private _http: Http) { }

    getCommentsWithId(id: number): Observable<Comment> {
        return this.getComments(id)[0];
    }

    getComments(id?: number): Observable<Comment[]> {
        return this._http.get(AppConstants.API_URL + AppConstants.COMMENTS_URL)
            .map((response: Response) => response.json())
            .filter((comment: Comment) => {
                return id ? comment.postId === id : true
            });
    }
}