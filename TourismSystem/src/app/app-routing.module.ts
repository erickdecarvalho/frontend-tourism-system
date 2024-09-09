import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component';

const routes: Routes = [
  { path:  'registrar_cliente', component: SignupClientComponent },
  { path: 'companhia', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'cliente', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
