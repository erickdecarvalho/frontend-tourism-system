import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component';
import { SignupCompanyComponent } from './basic/components/signup-company/signup-company.component';
import { LoginComponent } from './basic/components/login/login.component';
import { SignupComponent } from './basic/components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:  'registrar_cliente', component: SignupClientComponent },
  { path:  'registrar_companhia', component: SignupCompanyComponent },
  { path:  'login', component: LoginComponent },
  { path:  'registrar', component: SignupComponent },
  { path: 'companhia', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'cliente', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
