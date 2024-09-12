import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent {

  services: any;

  constructor(private companyService: CompanyService,) {}

  ngOnInit() {
    this.getAllTourismServices();
  }

  getAllTourismServices() {
    this.companyService.getAllTourismServices().subscribe(res => {
      console.log(res);
      this.services = res;
    })
  }
}
