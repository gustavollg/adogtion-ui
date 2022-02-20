import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { PostListResponse, PostResponse } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getPost(postId: string): Observable<PostResponse> {
    return this.httpClient.get<PostResponse>(`${environment.apiUrl}/posts/${postId}`);
  }

  getPosts(): Observable<PostListResponse> {
    return this.httpClient.get<PostListResponse>(`${environment.apiUrl}/posts`);
  }

  createPost(postInfo: PostResponse): Observable<PostResponse> {
    return this.httpClient.post<PostResponse>(`${environment.apiUrl}/posts`, postInfo);
  }

  updatePost(postId: number, postInfo: PostResponse): Observable<PostResponse> {
    return this.httpClient.put<PostResponse>(`${environment.apiUrl}/posts/${postId}`, postInfo);
  }

  removePost(postId: number): Observable<PostResponse> {
    return this.httpClient.delete<PostResponse>(`${environment.apiUrl}/posts/${postId}`);
  }
}
