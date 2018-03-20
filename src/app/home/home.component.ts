/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { UserService } from '../user.service';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    user: any = {
        email: "gg@gg.com",
        password: "gg"
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

