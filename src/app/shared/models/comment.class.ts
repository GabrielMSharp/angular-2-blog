export class Comment {
    id: number;
    postId: number;
    name: string;
    body: string;

    constructor(comment: Comment) {
        this.id = comment.id;
        this.postId = comment.postId;
        this.name = comment.name;
        this.body = comment.body;
    }
}