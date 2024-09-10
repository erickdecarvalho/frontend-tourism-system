import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tourism',
  templateUrl: './create-tourism.component.html',
  styleUrls: ['./create-tourism.component.scss']
})
export class CreateTourismComponent {

  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private companySerice: CompanyService) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      serviceName: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  postTourism() {
    const formData: FormData = new FormData();

    formData.append('img', this.selectedFile);
    formData.append('serviceName', this.validateForm.get('serviceName').value);
    formData.append('description', this.validateForm.get('description').value);
    formData.append('price', this.validateForm.get('price').value);

    this.companySerice.postTourism(formData).subscribe(res => {
      this.notification
      .success(
        'SUCCESS',
        'Turismo cadastro com sucesso',
        { nzDuration: 5000 }
      );
      this.router.navigateByUrl('/companhia/turismos')
    }, error => {
      this.notification
      .error(
        'ERROR',
        `${error.error}`,
        { nzDuration: 5000 }
      );
    })
  }
}
