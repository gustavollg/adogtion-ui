import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { PostListComponent } from './list/post-list.component';
import { PostComponent } from './post.component';
import { PostCreationComponent } from './creation/post-creation.component';
import { PostRemovalConfirmationComponent } from './removal-confirmation/post-removal-confirmation.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    PostCreationComponent,
    PostRemovalConfirmationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PostModule { }
