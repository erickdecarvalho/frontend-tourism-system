import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';

@Component({
  selector: 'app-tourism-detail',
  templateUrl: './tourism-detail.component.html',
  styleUrls: ['./tourism-detail.component.scss']
})
export class TourismDetailComponent {

  tourismId = this.activatedroute.snapshot.params['tourismId'];
  avatarUrl: any;
  tourism: any;

  reviews: any;

  validateForm!: FormGroup;

  constructor(private clientService: ClientService,
    private activatedroute: ActivatedRoute,
    private notification: NzNotificationService,
    private router: Router,
    private fb: FormBuilder) {}

    ngOnInit() {
      this.validateForm = this.fb.group({
        serviceDate: [null, [Validators.required]]
      })
      this.getTourismDetailsByTourismId();
    }

    getTourismDetailsByTourismId() {
      this.clientService.getTourismDetailsByTourismId(this.tourismId).subscribe(res => {
        this.avatarUrl = 'data:image/jpeg;base64,' + res.tourismDTO.returnedImg;
        this.tourism = res.tourismDTO
        this.reviews = res.reviewDTOList;
      })
    }

    tourismService() {
      const tourismServiceDTO = {
        tourismDate : this.validateForm.get(['serviceDate']).value,
        tourismId: this.tourismId,
        userId: UserStorageService.getUserId()
      };

      console.log("DTO a ser enviado:", tourismServiceDTO);  // Verifique o conteúdo enviado aqui
      this.clientService.tourismService(tourismServiceDTO).subscribe(res => {
        this.notification
          .success(
            'SUCCESS',
            'Requisição feita com sucesso',
            { nzDuration: 5000 }
          );
      });
    }
}
