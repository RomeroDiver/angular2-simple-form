import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { LoginModel } from '../';

interface IResponse {
    error?: boolean;
    payload: any;
}

@Injectable()
export class LoginService {
    login(credentials: LoginModel): Observable<IResponse> {
        return Observable.create((observer: Observer<IResponse>) => {
            const { email, password, remember } = credentials;

            if (this.checkCredentials(email, password)) {
                observer.next({ payload: true});
                // Save remember me flag.
            }
            observer.error({ error: true, payload: 'INVALID_CREDENTIALS' });

        });
    }

    private checkCredentials(email: string, password: string): boolean {
        return email === 'test@test.pl' && password === 'Password1';
    }
}