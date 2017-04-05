import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import {
    LoginModel,
    LocalStorageService,
} from '../';

interface IResponse {
    error?: boolean;
    payload: any;
}

const emailValidation = /^\S+@\S+\.\S+$/;
const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,}$/;

export const LOGIN_ERRORS = {
    INVALID_EMAIL: 'INVALID_EMAIL',
    INVALID_PASSWORD: 'INVALID_PASSWORD',
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
};

@Injectable()
export class LoginService {
    constructor(private localStorage: LocalStorageService) { }

    login(credentials: LoginModel): Observable<IResponse> {
        return Observable.create((observer: Observer<IResponse>) => {
            const { email, password, remember } = credentials;
            const error = this.validateCredentials(email, password);
            if (error) {
                observer.error({ error: true, payload: error });
            }

            observer.next({ payload: true});
            this.localStorage.setItem('remember', remember);
        });
    }

    isLoggedIn(): boolean {
        return this.localStorage.getItem('remember');
    }

    private validateCredentials(email: string, password: string): string {
        if (!this.isValidEmail(email)) {
            return LOGIN_ERRORS.INVALID_EMAIL;
        }
        if (!this.isValidPassword(password)) {
            return LOGIN_ERRORS.INVALID_PASSWORD;
        }
        if (!this.checkCredentials(email, password)) {
            return LOGIN_ERRORS.INVALID_CREDENTIALS;
        }
    }

    private checkCredentials(email: string, password: string): boolean {
        return email === 'test@test.pl' && password === 'Password1';
    }

    private isValidEmail(email: string): boolean {
        return email && emailValidation.test(email);
    }

    private isValidPassword(password: string): boolean {
        return password && passwordValidation.test(password);
    }
}