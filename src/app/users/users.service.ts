import { Injectable } from "@angular/core";
import { IUser } from "./user";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UsersService {
  private _usersUrl = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: Http) {
  }

  saveUser(user: IUser): Observable<IUser> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http
      .post(this._usersUrl, JSON.stringify(user), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUsers(): Observable<IUser []> {
    return this._http.get(this._usersUrl)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || { };
  }

  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
