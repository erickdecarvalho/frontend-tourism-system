import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourismDetailComponent } from './pages/tourism-detail/tourism-detail.component';
import { MyTourismsComponent } from './pages/my-tourisms/my-tourisms.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientDashboardComponent,
    TourismDetailComponent,
    MyTourismsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
