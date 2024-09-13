import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-my-tourisms',
  templateUrl: './my-tourisms.component.html',
  styleUrls: ['./my-tourisms.component.scss']
})
export class MyTourismsComponent {

  tourismsService: any;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getMyTourisms();
  }

  getMyTourisms() {
    this.clientService.getMyTourisms().subscribe(res => {
      this.tourismsService = res;
    })
  }
}
