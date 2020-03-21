import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import {Post } from './post';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../core/services/http.service';

describe('PostsService', () => {
  let httpClient: HttpClient;
  let httpService: HttpService;
  let postsService: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PostsService,
        {
          provide: httpClient,
          useValue: jasmine.createSpyObj(HttpClient, ['get'])
        },
        {
          provide: httpService,
          useValue: jasmine.createSpyObj(HttpService, ['getData'])
        }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpService = TestBed.inject(HttpService);
    postsService = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(postsService).toBeTruthy();
  });

  it('should fetch posts data', async(() => {
    const postsMock = [{ id: 1, title: 'Post 1', body: 'Description post one' }, { id: 2, title: 'Post 2', body: 'Description post two' }];

    postsService.getPosts().subscribe((posts: Post[]) => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(postsMock);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts', 'call to Api - POST');
    expect(req.request.method).toBe('GET');
    req.flush(postsMock);
  }));
});
