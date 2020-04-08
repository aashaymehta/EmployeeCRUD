import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { PageNotFoundComponent } from './employee/page-not-found.component';
import { HomeComponent } from './employee/home/home.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateEmployeeCanDeactivateRouteGuardService } from './services/route-guard/create-employee-canDeactivateRouteGuard.service';


const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: 'create', component: CreateEmployeeComponent,
  canDeactivate: [CreateEmployeeCanDeactivateRouteGuardService]},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
