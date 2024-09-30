import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  loginData = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })
  onSubmit() {
    console.warn(this.loginData.value)
  }
  data = {
    name:'John Doe',
  }
}
