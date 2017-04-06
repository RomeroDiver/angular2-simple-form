import {
  Component,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {
  LoginModel,
  LoginService,
} from '../shared';

@Component({
  selector: 'rd-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnDestroy {

  private loginModel: LoginModel = new LoginModel();
  private loginSubscription: Subscription;
  private submitted: boolean;
  private errorMessage: string;

  constructor(private loginService: LoginService) { }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  onSubmit() {
    this.submitted = false;

    this.loginSubscription = this.loginService.login(this.loginModel).subscribe(
      ({ payload }) => {
        this.submitted = payload;
      },
      ({ payload }) => {
        this.errorMessage = payload;
      }
    );
  }
}
