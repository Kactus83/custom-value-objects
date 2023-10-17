import isEmail from 'isemail';

class Email {
    private readonly email: string;

    constructor(email: string) {
        if (!isEmail.validate(email)) {
            throw new Error('Invalid email address');
        }

        this.email = email;
    }

    public getEmail(): string {
        return this.email;
    }
}
