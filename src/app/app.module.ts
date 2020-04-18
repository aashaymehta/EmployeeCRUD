import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeService } from '../app/services/employee-service.service';
import { PageNotFoundComponent } from './employee/page-not-found.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { HomeComponent } from './employee/home/home.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import {CreateEmployeeCanDeactivateRouteGuardService} from './services/route-guard/create-employee-canDeactivateRouteGuard.service';
import { AccountNumberValidatorDirective } from './shared/validators/accountNumberValidator.directive';
import { EmployeeDetailsCanActivateRouteGuardService } from './services/route-guard/employee-details-canActivateRouteGuard.service';
import { EmployeeListResolveGuardService } from './services/route-guard/employeeList-resolveGuard.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    HomeComponent,
    CreateEmployeeComponent,
    AccountNumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateRouteGuardService, EmployeeDetailsCanActivateRouteGuardService,
    EmployeeListResolveGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
