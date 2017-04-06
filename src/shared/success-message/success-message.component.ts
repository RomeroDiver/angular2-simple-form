import {
    Component,
    Input,
} from '@angular/core';

@Component({
  selector: 'rd-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent {

    @Input() message: string;

    private translatedSuccessMessage = {
        LOGIN_SUCCESS: 'Login successful!',
    };
}
