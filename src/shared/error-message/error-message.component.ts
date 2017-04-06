import {
    Component,
    Input,
} from '@angular/core';
import { LOGIN_ERRORS } from '../';

@Component({
  selector: 'rd-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {

    @Input() error: string;

    private translatedErrorMessage = {
        [LOGIN_ERRORS.INVALID_CREDENTIALS]: 'Invalid email or password',
        [LOGIN_ERRORS.INVALID_EMAIL]: 'Invalid email',
        [LOGIN_ERRORS.INVALID_PASSWORD]: 'Invalid password',
    };
}
