import { Component, OnInit } from '@angular/core';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { RequestService } from '../../services/request.service';
import { Post } from '../../app.interface';
import { PostRemovalConfirmationComponent } from '../removal-confirmation/post-removal-confirmation.component';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  faPen = faPen;
  faTrash = faTrashAlt;

  constructor(private readonly requestService: RequestService) {
  }

  ngOnInit() {
    this.requestService.getPosts().subscribe(posts => {
      this.posts = posts.data;
    });
  }

  onPostCreated(post: Post) {
    this.posts.push(post);
  }

  openPostRemovalConfirmationModal(removalConfirmationModal: PostRemovalConfirmationComponent) {
    removalConfirmationModal.openModal();
  }

  onPostRemoved(post: Post) {
    const postIndex: number = this.posts.findIndex((postElement: Post) => postElement.id === post.id);
    this.posts.splice(postIndex, 1);
  }
}
