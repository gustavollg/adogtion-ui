import {Component, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {RequestService} from "../../services/request.service";
import {Post, PostResponse} from "../../app.interface";

@Component({
  selector: 'post-removal-confirmation',
  templateUrl: './post-removal-confirmation.component.html'
})
export class PostRemovalConfirmationComponent {

  @ViewChild('removalConfirmationModal') modal!: TemplateRef<any>;

  @Input() postId!: number;

  @Output() postRemoved: EventEmitter<Post> = new EventEmitter<Post>();

  constructor(
    private readonly modalService: NgbModal,
    private readonly requestService: RequestService
  ) { }

  openModal() {
    this.modalService.open(this.modal);
  }

  removePost() {
    this.requestService.removePost(this.postId).subscribe((post: PostResponse) => {
      this.postRemoved.next(post.data);
      this.modalService.dismissAll();
    });
  }
}
