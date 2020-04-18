import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EmployeeService } from '../employee-service.service';

@Injectable()
export class EmployeeDetailsCanActivateRouteGuardService implements CanActivate {

    constructor(private employeeService: EmployeeService,
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const employeeExists = !!this.employeeService.getEmployee(+route.paramMap.get('id'));
        if (employeeExists){
            return true;
        } else {
            this.router.navigate(['notFound']);
            return false;
        }
    }

}
