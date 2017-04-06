import {
  trigger,
  style,
  transition,
  keyframes,
  animate,
  Component,
} from '@angular/core';
import {
  LoginService,
} from '../shared';

@Component({
  selector: 'rd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bounceInLeft', [
        transition(':enter', [
            animate(300, keyframes([
              style({ opacity: 0, transform: 'translate3d(-3000px, 0, 0)', offset: 0 }),
              style({ opacity: 1, transform: 'translate3d(25px, 0, 0)',  offset: 0.6 }),
              style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }),
              style({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }),
              style({ transform: 'none', offset: 1.0 }),                   
            ]))
        ]),
        transition(':leave', [
            animate(300, keyframes([
              style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }),
              style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1.0 }),                   
            ]))
        ]),
    ])
  ]
})
export class AppComponent {
  constructor(private loginService: LoginService) { }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }
}
