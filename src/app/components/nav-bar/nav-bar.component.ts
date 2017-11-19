import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
private loggedIn : boolean;
  constructor(private loginService : LoginService) { }

  logout(){

  this.loginService.logout().subscribe(
    res=>{
     location.reload();
    },
    err=>{
     console.log();

    }

  );
  }

  ngOnInit() {
   this.loginService.checkSession().subscribe(
    res => {
    this.loggedIn=true;

    },
    err=>{
     this.loggedIn=false;
     console.log(err);
    }

   );

  }

}
