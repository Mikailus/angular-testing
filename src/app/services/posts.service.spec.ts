import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import {Post } from './post';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../core/services/http.service';
import { of, asyncScheduler } from 'rxjs';

describe('PostsService', () => {
  let httpClient: HttpClient;
  let httpService: HttpService;
  let postsService: PostsService;
  let httpTestingController: HttpTestingController;
  
  const postsMock = [{ id: 1, title: 'Post 1', body: 'Description post one' }, { id: 2, title: 'Post 2', body: 'Description post two' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostsService,
        {
          provide: HttpService,
          useValue: {
            getData: jasmine.createSpy('getData').and.returnValue(of(postsMock, asyncScheduler))
          }
        }
      ]
    });

    httpService = TestBed.inject(HttpService);
    postsService = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(postsService).toBeTruthy();
  });

  it('should fetch posts data', async(() => {

    postsService.getPosts().subscribe((posts: Post[]) => {
      expect(httpService).toHaveBeenCalled();
      expect(posts.length).toBe(2);
      expect(posts).toEqual(postsMock);
    });
  }));
});
