import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostResponse } from '../app.interface';
import { RequestService } from '../services/request.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostRemovalConfirmationComponent } from './removal-confirmation/post-removal-confirmation.component';

@Component({
  selector: 'post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post!: Post;

  updatePostFormGroup!: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly requestService: RequestService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit() {
    const postId: string = this.activatedRoute.snapshot.params['postId'];

    this.getPostById(postId);
  }

  private getPostById(postId: string) {
    this.requestService.getPost(postId).subscribe((post: PostResponse) => {
      this.updatePostFormGroup = this.formBuilder.group({
        user: 'John Doe',
        announcement: post.data.attributes.announcement
      });

      this.post = post.data;
    });
  }

  openPostRemovalConfirmationModal(removalConfirmationModal: PostRemovalConfirmationComponent) {
    removalConfirmationModal.openModal();
  }

  onPostRemoved() {
    this.router.navigate(['/']);
  }

  updateAnnouncement() {
    const postInformation: PostResponse = { data: this.updatePostFormGroup.value };

    this.requestService.updatePost(this.post.id, postInformation).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
