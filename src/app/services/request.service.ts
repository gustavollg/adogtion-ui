import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { PostListResponse, PostResponse } from '../app.interface';
import {TransferStateService} from "@scullyio/ng-lib";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly httpClient: HttpClient, private transferStateService: TransferStateService) {
  }

  getPost(postId: string): Observable<PostResponse> {
    return this.transferStateService.useScullyTransferState(
      'postId',
      this.httpClient.get<PostResponse>(`${environment.apiUrl}/posts/${postId}`)
    );
  }

  getPosts(): Observable<PostListResponse> {
    return this.transferStateService.useScullyTransferState(
      'postList',
      this.httpClient.get<PostListResponse>(`${environment.apiUrl}/posts`)
    );
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
