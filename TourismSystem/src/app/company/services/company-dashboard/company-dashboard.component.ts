import { Component } from '@angular/core';
import { CompanyService } from '../company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent {

  services: any;

  constructor(private companyService: CompanyService,
    private notification: NzNotificationService) {}

  ngOnInit() {
    this.getAllTourismServices();
  }

  getAllTourismServices() {
    this.companyService.getAllTourismServices().subscribe(res => {
      console.log(res);
      this.services = res;
    })
  }

  changeServiceStatus(serviceId: number, status: string) {
    this.companyService.changeServiceStatus(serviceId, status).subscribe(res => {
      this.notification
      .success(
        'SUCCESS',
        'Status do serviço alterado com sucesso',
        { nzDuration: 5000 }
      );
      this.getAllTourismServices();
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
