import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent {

  tourisms: any = [];

  constructor(private clientService: ClientService,) {}

  getAllTourisms() {
    this.clientService.getAllTourisms().subscribe(res=>{
      this.tourisms = res;
    });
  }

  ngOnInit() {
    this.getAllTourisms();
  }

  updateImg(img) {
    return 'data:image/jpeg;base64,' + img;
  }
}
