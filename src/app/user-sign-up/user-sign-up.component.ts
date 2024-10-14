import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShareService } from '../service/share.service';

export function matchPassword(password: string, rpassword: string): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const data = control.parent;
    if(!data) {
      return null;
    }
    const passwordField = data.get(password)?.value
    const rpasswordField = data.get(rpassword)?.value
    return passwordField === rpasswordField ? null : {mismatch: true}
  }
}

@Component({
  selector: 'app-user-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.css'

})

export class UserSignUpComponent {

  signupData = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z0-9!@#$%&]+$'), Validators.minLength(5)]),
    retypePassword: new FormControl('',[Validators.required, matchPassword('password', 'retypePassword')])
  })

  constructor(private shareservice: ShareService) {}

  onSubmit() {
    sessionStorage.setItem('signup', 'true');
    this.shareservice.emitData(this.signupData.value)
    console.log(this.signupData);
  }

  get name() {
    return this.signupData.get('name')
  }
  get email() {
    return this.signupData.get('email');
  }
  get password() {
    return this.signupData.get('password')
  }
  get retypePassword() {
    return this.signupData.get('retypePassword')
  }
}


