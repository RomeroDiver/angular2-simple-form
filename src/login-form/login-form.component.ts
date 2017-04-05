import { Component } from '@angular/core';
import { LoginModel } from '../shared';
import { LoginService } from '../shared';

@Component({
  selector: 'rd-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  private loginModel: LoginModel = new LoginModel();
  private submitted: boolean;
  private errorMessage: string;

  constructor(private loginService: LoginService) { }

  onSubmit() {
    this.loginService.login(this.loginModel).subscribe(
      ({ payload }) => {
        this.submitted = payload;
      },
      ({ payload }) => {
        this.errorMessage = payload;
      }
    );
  }
}
