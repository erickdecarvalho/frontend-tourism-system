import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyDashboardComponent } from './services/company-dashboard/company-dashboard.component';
import { CreateTourismComponent } from './pages/create-tourism/create-tourism.component';
import { AllTourismsComponent } from './pages/all-tourisms/all-tourisms.component';
import { UpdateTourismComponent } from './pages/update-tourism/update-tourism.component';

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'dashboard', component: CompanyDashboardComponent },
  { path: 'turismo', component: CreateTourismComponent },
  { path: 'turismos', component: AllTourismsComponent },
  { path: 'atualizar/:id', component: UpdateTourismComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
