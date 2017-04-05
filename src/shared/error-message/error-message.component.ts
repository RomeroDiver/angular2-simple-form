import {
    Component,
    Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rd-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {

    @Input() input: FormControl;

    private show() {
        return this.input.invalid && this.input.touched;
    }

}
