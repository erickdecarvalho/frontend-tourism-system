import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { TourismDetailComponent } from './pages/tourism-detail/tourism-detail.component';
import { MyTourismsComponent } from './pages/my-tourisms/my-tourisms.component';
import { ReviewComponent } from './pages/review/review.component';
import { AuthGuard } from '../basic/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'client' }
  },
  {
    path: 'dashboard',
    component: ClientDashboardComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'client' }
  },
  {
    path: 'turismos',
    component: MyTourismsComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'client' }
  },
  {
    path: 'turismo/:tourismId',
    component: TourismDetailComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'client' }
  },
  {
    path: 'resenha/:Id',
    component: ReviewComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'client' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
