import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyDashboardComponent } from './services/company-dashboard/company-dashboard.component';
import { CreateTourismComponent } from './pages/create-tourism/create-tourism.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';
import { ReactiveFormsModule } from '@angular/forms';
import { AllTourismsComponent } from './pages/all-tourisms/all-tourisms.component';
import { UpdateTourismComponent } from './pages/update-tourism/update-tourism.component';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyDashboardComponent,
    CreateTourismComponent,
    AllTourismsComponent,
    UpdateTourismComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
