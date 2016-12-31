import { Injectable } from '@angular/core';
import { AppConstants } from '../helpers/app.constants';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.class'

@Injectable()
export class UsersService {
    // users: User[];

    constructor(private _http: Http) { }

    getAuthorWithId(id: number): Observable<User> {
        return this.getAuthors(id)[0];
    }
    
    getAuthors(id?: number): Observable<User[]> {
         return this._http.get(AppConstants.API_URL + AppConstants.USER_URL + '/' + (id? id : ''))
            .map((response: Response) => response.json())
            .filter((user: User) => {
                return id ? user.id === id : true
            })
    }
}