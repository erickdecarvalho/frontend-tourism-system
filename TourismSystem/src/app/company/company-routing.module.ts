import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyDashboardComponent } from './services/company-dashboard/company-dashboard.component';
import { CreateTourismComponent } from './pages/create-tourism/create-tourism.component';
import { AllTourismsComponent } from './pages/all-tourisms/all-tourisms.component';
import { UpdateTourismComponent } from './pages/update-tourism/update-tourism.component';
import { AuthGuard } from '../basic/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'company' }
  },
  {
    path: 'dashboard',
    component: CompanyDashboardComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'company' }
  },
  {
    path: 'turismo',
    component: CreateTourismComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'company' }
  },
  {
    path: 'turismos',
    component: AllTourismsComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'company' }
  },
  {
    path: 'atualizar/:id',
    component: UpdateTourismComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'company' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
