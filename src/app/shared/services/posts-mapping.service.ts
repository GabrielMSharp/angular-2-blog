import { Injectable } from '@angular/core';
import { AppConstants } from '../helpers/app.constants';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.class';
import { Comment } from '../models/comment.class';
import { User } from '../models/user.class';
import { PostsService } from './posts.service';
import { UsersService } from './users.service';
import { CommentsService } from './comments.service';

@Injectable()
export class PostsMappingService {
    posts: Post[];

    constructor(
        private _http: Http,
        private _postsService: PostsService,
        private _usersService: UsersService,
        private _commentsService: CommentsService
    ) { }

    getPostWithId(id: number): Observable<Post> {
        return this.getAllPosts().map(posts => {
            return posts.filter(post => post.id === id)[0];
        })
    }

    getAllPosts(): Observable<Post[]> {

        var postsObservable = this._postsService.getPosts(),
            usersObservable = this._usersService.getAuthors(),
            commentsObservable = this._commentsService.getComments();


        return Observable.forkJoin(
            postsObservable,
            usersObservable,
            commentsObservable)
            .map((response: any) => {
                return this.postsFromData(response);
            });
    }

    postsFromData(data): Post[] {
        var postArray = [];
        var posts = <Post[]>data[0],
            users = data[1],
            comments = data[2];
        posts.forEach(post => {
            var postAuthor = this.userForId(post.userId, users);
            var postComments = this.commentsForId(post.id, comments);
            var newPost = new Post(post, postAuthor.name, postComments);
            postArray.push(newPost);
        });

        return postArray;
    }

    userForId(id: number, usersArray: User[]): User {
        var user: User;
        for (var i = 0; i < usersArray.length; i++) {
            user = usersArray[i];
            if (user.id === id) {
                return user;
            }
        }
        return null;
    }

    commentsForId(id: number, commentsArray: Comment[]): Comment[] {
        return commentsArray.filter(comment => {
            return comment.postId === id;
        });
    }
}