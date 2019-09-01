import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(public jwtHelper: JwtHelperService) {}

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    public login(password: string): Observable<boolean> {
        return of(false);
    }
}
