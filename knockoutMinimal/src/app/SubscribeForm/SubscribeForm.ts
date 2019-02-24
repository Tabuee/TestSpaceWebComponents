import * as ko from "knockout";

export class SubscribeForm {
    public firstName: ko.Observable;
    public lastName: ko.Observable;
    public email: ko.Observable;
    public enabled: ko.Observable;

    public constructor() {
        this.firstName = ko.observable('firstName');
        this.lastName = ko.observable('lastName');
        this.email = ko.observable('');
        this.enabled = ko.observable(false);
    }

    public blur() {
        this.enabled(this.email.peek() !== '');
    }

    public submit() {
        alert(`
        sending: 
        firstName: ${this.firstName.peek()}
        lastName: ${this.lastName.peek()}
        email: ${this.email.peek()}
        `);
    }
}
