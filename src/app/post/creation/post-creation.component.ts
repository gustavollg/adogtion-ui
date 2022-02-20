import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RequestService} from "../../services/request.service";
import {Post, PostResponse} from "../../app.interface";

@Component({
  selector: 'post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {

  @Output() postCreated: EventEmitter<Post> = new EventEmitter<Post>();

  createPostFormGroup!: FormGroup;

  constructor(
    private readonly modalService: NgbModal,
    private readonly formBuilder: FormBuilder,
    private readonly requestService: RequestService) {
  }

  ngOnInit() {
    this.createPostFormGroup = this.formBuilder.group({
      user: 'John Doe',
      announcement: ''
    })
  }

  open(content: any) {
    this.createPostFormGroup.patchValue({
      user: 'John Doe'
    });
    this.modalService.open(content);
  }

  createAnnouncement() {
    const postInformation: PostResponse = { data: this.createPostFormGroup.value };
    this.requestService.createPost(postInformation).subscribe((postResponse) => {
      this.postCreated.next(postResponse.data);
      this.modalService.dismissAll();
      this.createPostFormGroup.reset();
    });
  }
}
