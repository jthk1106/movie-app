import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  
  constructor(private _user: UserService, private router: Router) {
  
  }

  ngOnInit() {
  }

  newRegister(){
    console.log(this.user);
    this._user.register(this.user)
      .subscribe(
        newReg => console.log(newReg, "reg"))
    alert('Log in to start your search!');
    this.router.navigate(['/home'])
  }
}

/*
export class HomeComponent {
    user: any = {
        email:'gg@gg.com',
        password:'gg'
    };
    
    constructor(private _user: UserService){
        
    }
    
    loginSubmit(){
        console.log(this.user);
        this._user.login()
            .subscribe(
                userRes => console.log(userRes, "res"))
    }
}
*/