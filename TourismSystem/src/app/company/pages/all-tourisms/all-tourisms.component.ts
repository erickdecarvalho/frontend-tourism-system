import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-all-tourisms',
  templateUrl: './all-tourisms.component.html',
  styleUrls: ['./all-tourisms.component.scss']
})
export class AllTourismsComponent {

  tourisms: any;

  constructor(private companyService: CompanyService,
    private notification: NzNotificationService) {}

  ngOnInit() {
    this.getAllTourismsByUserId();
  }

  getAllTourismsByUserId() {
    this.companyService.getAllTourismsByUserId().subscribe(res => {
      this.tourisms = res;
    })
  }

  updateImg(img) {
    return 'data:image/jpeg;base64,' + img;
  }

  deleteTourism(tourismId:any) {
    this.companyService.deleteTourism(tourismId).subscribe(res => {
      this.notification
      .success(
        'SUCCESS',
        'Turismo deletado com sucesso',
        { nzDuration: 5000 }
      );
      this.getAllTourismsByUserId();
    })
  }
}
