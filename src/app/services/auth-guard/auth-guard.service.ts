import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth-service/auth-service.service';



@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        return true;
        // if (this.authService.isAuthenticated()) {
        //     return true;
        // } else {
        //     // Router navigate
        //     this.router.navigate(['login']);
        //     return false;
        // }
    }
}
