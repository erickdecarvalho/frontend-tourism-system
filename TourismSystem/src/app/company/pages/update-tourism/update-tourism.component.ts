import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-update-tourism',
  templateUrl: './update-tourism.component.html',
  styleUrls: ['./update-tourism.component.scss']
})
export class UpdateTourismComponent {

  tourismId: any = this.activatedroute.snapshot.params['id'];

    selectedFile: File | null;
    imagePreview: string | ArrayBuffer | null;
    validateForm!: FormGroup;
    existingImage: string | null = null;

    imgChanged = false;

    constructor(private fb: FormBuilder,
      private notification: NzNotificationService,
      private router: Router,
      private companySerice: CompanyService,
      private activatedroute: ActivatedRoute,
      private companyService: CompanyService) {}

    ngOnInit() {
      this.validateForm = this.fb.group({
        serviceName: [null, [Validators.required]],
        description: [null, [Validators.required]],
        price: [null, [Validators.required]],
      })
      this.getTourismById();
    }

    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
      this.previewImage();
      this.existingImage = null;
      this.imgChanged = true;
    }

    previewImage() {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
      reader.readAsDataURL(this.selectedFile);
    }

    updateTourism() {
      const formData: FormData = new FormData();

      if(this.imgChanged && this.selectedFile) {
        formData.append('img', this.selectedFile);

      }

      formData.append('serviceName', this.validateForm.get('serviceName').value);
      formData.append('description', this.validateForm.get('description').value);
      formData.append('price', this.validateForm.get('price').value);

      this.companySerice.updateTourism(this.tourismId, formData).subscribe(res => {
        this.notification
        .success(
          'SUCCESS',
          'Turismo atualizado com sucesso',
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


  getTourismById() {
    this.companyService.getTourismById(this.tourismId).subscribe(res=> {
      console.log(res);
      this.validateForm.patchValue(res);
      this.existingImage = 'data:image/jpeg;base64,' + res.returnedImg;
    })
  }
}
