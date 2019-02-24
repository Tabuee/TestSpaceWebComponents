import {SubscribeForm} from './SubscribeForm';

export class SubscribeFormController {
    private vm: SubscribeForm;

    public constructor(vm: SubscribeForm) {
        this.vm = vm;
        this.vm.subscribe('email', (email: string) => {
            if (this.validateEmail(email)) {
                this.vm.enabled(true);
            } else {
                this.vm.enabled(false);
            }
        });

        this.vm.setEventHandler((event: string) => {
            console.log(event);
            if (event === 'submit') {
                this.submit();
            }
        });
    }

    public submit() {
        alert(`
        sending: 
        firstName: ${this.vm.firstName.peek()}
        lastName: ${this.vm.lastName.peek()}
        email: ${this.vm.email.peek()}
        `);
    }

    private validateEmail(email: string): boolean {
        return email !== '';
    }
}
