import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLoginComponent } from "./user-login/user-login.component";
import { CommonModule } from '@angular/common';
import { TemplateformComponent } from "./templateform/templateform.component";
import { CookieService } from 'ngx-cookie-service'
import { ShareService } from './service/share.service';
import { ExampleComponent } from "./example/example.component";
import { UserSignUpComponent } from "./user-sign-up/user-sign-up.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserLoginComponent, CommonModule, TemplateformComponent, ExampleComponent, UserSignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    public title: string = "angular-project"
    public toggle: boolean = false;

    constructor(private cookieservice: CookieService, private shareserveice: ShareService, private router: Router) {
        this.shareserveice.data.subscribe(data => {
          if(data) {
            console.log(JSON.stringify(data), "new Data")
          }
        })
    }
    catch(data: any) {
      sessionStorage.setItem('Email', data.email)
      sessionStorage.setItem('Password', data.password)
      localStorage.setItem('data', JSON.stringify(data))
      this.cookieservice.set('data', JSON.stringify(data))
      console.log(data)
    }

    items = [
      { name : "abc", surname: "def"},
      { name : "abc", surname: "def"},
      { name : "abc", surname: "def"},
    ]
    show() {
      this.toggle = !this.toggle;
      if(this.toggle) {
        this.router.navigate(['/login'])
      } 
      else {
        this.router.navigate(['/signup'])
      }
    } 
}
