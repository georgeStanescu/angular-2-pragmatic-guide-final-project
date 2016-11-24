import { FormControl } from "@angular/forms";

export class CommonValidators {

  static emailInvalid(control: FormControl) {
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = emailPattern.test(control.value);
    
    return valid ? null : { emailInvalid: true };
  }
}
