import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent {

  tourisms: any = [];
  validateForm!: FormGroup;

  constructor(private clientService: ClientService,
    private fb: FormBuilder) {}

  getAllTourisms() {
    this.clientService.getAllTourisms().subscribe(res=>{
      this.tourisms = res;
    });
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      service: [null, [Validators.required]]
    })
    this.getAllTourisms();
  }

  searchTourismByName() {
    this.clientService.searchTourismByName(this.validateForm.get(['service']).value).subscribe(res => {
      this.tourisms = res;
    })
  }

  updateImg(img) {
    return 'data:image/jpeg;base64,' + img;
  }
}
