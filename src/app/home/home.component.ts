import { Component } from "@angular/core";
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    user: any = {
        email: '',
        password: ''
    };

    constructor(private _user: UserService, private router: Router) {

    }

    loginSubmit() {
        this._user.login(this.user)
            .subscribe(
                (userRes: any) => {
                    sessionStorage.setItem('userId', userRes.userId)
                    sessionStorage.setItem('token', userRes.token)
                })
        alert('Start Searching!');
        this.router.navigate(['/search']);
    }

}
