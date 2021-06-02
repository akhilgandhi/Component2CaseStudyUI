import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetCompaniesComponent } from './get-companies/get-companies.component';
import { GetCompanyComponent } from './get-company/get-company.component';
import { GetStockComponent } from './get-stock/get-stock.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'add-company', component: AddCompanyComponent, canActivate: [AuthGuardService]},
  { path: 'get-company', component: GetCompanyComponent},
  { path: 'get-companies', component: GetCompaniesComponent},
  { path: 'add-stock', component: AddStockComponent, canActivate: [AuthGuardService]},
  { path: 'get-stock', component: GetStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
