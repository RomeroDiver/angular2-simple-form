export class LoginModel {

    constructor(
        public email: string = '',
        public password: string = '',
        public remember: boolean = false
    ) { }
}
