import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[accountNumberValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AccountNumberValidatorDirective,
        multi: true
    }]
})
export class AccountNumberValidatorDirective implements Validator {
    validate(accountNumberGroup: AbstractControl): {[key: string]: any} | null {
        const accountNumber = accountNumberGroup.get('accountNumber');
        const cnfAccountNumber = accountNumberGroup.get('cnfAccountNumber');

        if (accountNumber && cnfAccountNumber && accountNumber.value !== cnfAccountNumber.value){
            return { notEqual: true};
        }
        return null;
    }
}
