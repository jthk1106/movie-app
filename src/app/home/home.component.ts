/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    user: any = {
    
    };
    
    constructor(private _user: UserService, private router: Router){
        
    }
    
    loginSubmit(){
        console.log(this.user);
        this._user.login(this.user)
            .subscribe(
                userRes => { console.log(userRes, "res")
                sessionStorage.setItem('userId', userRes.userId)
                sessionStorage.setItem('token', userRes.token)
                //sessionStorage.setItem(userRes.token)    
                })
        this.router.navigate(['/search']);
    }
    
}

//sessionStorage.setItem('key', 'value');
