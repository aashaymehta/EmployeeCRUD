import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import { CreateEmployeeComponent } from 'src/app/employee/create-employee/create-employee.component';

@Injectable()
export class CreateEmployeeCanDeactivateRouteGuardService implements CanDeactivate<CreateEmployeeComponent> {
    canDeactivate(component: CreateEmployeeComponent): boolean {
        if (component.createEmployee.dirty && !component.createEmployee.submitted){
            confirm('Are you sure you want to leave');
        }
        return true;
    }
}