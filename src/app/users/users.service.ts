import { Injectable } from "@angular/core";
import { IUser } from "./user";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UsersService {
  private _usersUrl = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: Http) {
  }

  getUsers(): Observable<IUser []> {
    return this._http.get(this._usersUrl)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}
