import { Comment } from './comment.class';

export class Post {
    id: number;
    userId: number;
    author: string;
    title: string;
    body: string;
    comments: {
        total: number,
        comments: Comment[]
    };

    constructor(
        post: Post,
        author: string,
        comments: Comment[]
    ) {
        this.id = post.id;
        this.userId = post.userId;
        this.title = post.title;
        this.body = post.body;
        this.author = author;
        this.comments = {
            total: comments.length,
            comments: comments
        }
    }
}