import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { TourismDetailComponent } from './pages/tourism-detail/tourism-detail.component';
import { MyTourismsComponent } from './pages/my-tourisms/my-tourisms.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'dashboard', component: ClientDashboardComponent },
  { path: 'turismos', component: MyTourismsComponent },
  { path: 'turismo/:tourismId', component: TourismDetailComponent },
  { path: 'resenha/:Id', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
