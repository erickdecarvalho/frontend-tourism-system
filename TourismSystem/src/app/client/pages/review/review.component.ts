import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  serviceId: number = this.activatedroute.snapshot.params['Id'];
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private clientService: ClientService,
    private activatedroute: ActivatedRoute,
    private notification: NzNotificationService) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      rating: [null, [Validators.required]],
      review: [null, [Validators.required]]
    })
  }

  giveReview() {
    const reviewDto = {
      rating: this.validateForm.get("rating").value,
      review: this.validateForm.get("review").value,
      userId: UserStorageService.getUserId(),
      serviceId: this.serviceId
    }

    this.clientService.giveReview(reviewDto).subscribe(res => {
      this.notification
      .success (
        'SUCCESS',
        'Resenha postada com sucesso',
        { nzDuration: 5000 }
      );
      this.router.navigateByUrl("cliente/turismos");
    }, error => {
      this.notification
      .error(
        'ERROR',
        `${error.message}`,
        { nzDuration: 5000 }
      )
    })
  }
}
