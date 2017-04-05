import { Injectable } from '@angular/core';

const getNativeWindow = () => window;

@Injectable()
export class WindowService {
    get window(): any {
        return getNativeWindow();
    }
}