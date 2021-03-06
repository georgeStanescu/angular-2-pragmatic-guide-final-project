import { Injectable } from "@angular/core";
import { Post } from "./post";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Comment } from "./comment";

@Injectable()
export class PostsService {
  private _url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) {

  }
  
  getPosts(filter?): Observable<Post []> {

    let url = this._url;
    if (filter && filter.userId){
      url += "?userId=" + filter.userId;
    }

    return this._http.get(url)
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }

  getCommentsForPost(postId: number): Observable<Comment []> {
    return this._http.get(`${this._url}/${postId}/comments`)
      .map((response: Response) => <Comment []> this.extractData(response))
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
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
