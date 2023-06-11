import { Component,DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'authentication';
  ismenurequired=false;
  isadminuser=false;
  constructor(private router:Router,private service:AuthService){
    
  }
  ngDoCheck(): void {
    let currentroute = this.router.url;
    // let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true
    }

    if (this.service.GetUserrole() === 'admin') {
      this.isadminuser = true;
    }else{
      this.isadminuser = false;
    }
  }
}
