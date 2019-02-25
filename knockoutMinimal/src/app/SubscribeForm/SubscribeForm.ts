import * as ko from "knockout";

export class SubscribeForm {
    public firstName: ko.Observable = ko.observable('firstName');
    public lastName: ko.Observable = ko.observable('lastName');
    public email: ko.Observable = ko.observable('');
    public enabled: ko.Observable = ko.observable(false);

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
