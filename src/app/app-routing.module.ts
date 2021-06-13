import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {TransferMoneyComponent} from './transfer-money/transfer-money.component';
import {TransferBalanceComponent} from './transfer-balance/transfer-balance.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'employees', component:  EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'transfer-money', component: TransferMoneyComponent},
  {path: 'transfer-balance/:id', component: TransferBalanceComponent},
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
