class Email {
    private readonly email: string;

    constructor(email: string) {
        if (!this.isValidEmail(email)) {
            throw new Error('Invalid email address');
        }

        this.email = email;
    }

    private isValidEmail(email: string): boolean {
        // Use a regular expression to validate the email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    public getEmail(): string {
        return this.email;
    }
}
