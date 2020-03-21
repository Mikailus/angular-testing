import { Injectable } from '@angular/core';
import { HttpService } from '../core/services/http.service';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  urlAPI = 'https://jsonplaceholder.typicode.com';

  constructor(private httpService: HttpService) { }

  public getPosts(): Observable<Post[]> {
    return this.httpService.getData<Post[]>(`${this.urlAPI}/posts`);
  }
}
