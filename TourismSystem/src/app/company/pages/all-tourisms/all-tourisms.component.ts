import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-all-tourisms',
  templateUrl: './all-tourisms.component.html',
  styleUrls: ['./all-tourisms.component.scss']
})
export class AllTourismsComponent {

  tourisms: any;

  constructor(private companyService: CompanyService,) {}

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
}
