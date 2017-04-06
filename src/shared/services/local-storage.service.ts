import { Injectable } from '@angular/core';

import { WindowService } from '../';

@Injectable()
export class LocalStorageService {
    protected localStorage;

    constructor(protected windowService: WindowService) {
        const { localStorage } = this.windowService.window;
        if (localStorage) {
            this.localStorage = localStorage;
        } else {
            this.localStorage = {
                values: {},
                setItem: (name: string, value: any) => { this.localStorage.values[name] = value; },
                getItem: (name: string) => this.localStorage.values[name]
            };
        }
    }

    public setItem(name: string, value: any): void {
        this.localStorage.setItem(name, value);
    }

    public getItem(name: string): any {
        return this.localStorage.getItem(name);
    }
}