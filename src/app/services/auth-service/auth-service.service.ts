import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    private auth = false;
    constructor(public http: HttpClient) {}

    public isAuthenticated(): boolean {
        //return this.auth;
        return true;
    }

    public login(password: string): Observable<boolean> {
        return this.http.post<boolean>('/api/login', {password: password}).pipe(
            tap(resp => this.auth = resp)
        );
    }
}
