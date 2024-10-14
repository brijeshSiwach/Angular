import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule ,FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShareService } from '../service/share.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})

export class UserLoginComponent implements OnInit{
  public styles = {
      backgroundColor: "white"
  }
  public text: any;
  constructor(private shareservice: ShareService, private http: HttpClient) {}
  @Output() data = new EventEmitter<any>()
  loginData = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]+$')])
  })
  onSubmit() {
    this.data.emit(this.loginData.value)
    this.shareservice.emitData(this.loginData.value)  
  }
  get email() {
    return this.loginData.get('email');
  }
  get password() {
    return this.loginData.get('password')
  }
  ngOnInit() {
      this.http.get('https://baconipsum.com/api/?type=meat-and-filler').subscribe((res: any) => {
        this.text = res
        console.log(this.text)
      });
  }
}
