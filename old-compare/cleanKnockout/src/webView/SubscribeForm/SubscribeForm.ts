import * as ko from 'knockout';

export class SubscribeForm {
    public firstName: ko.Observable<string> = ko.observable<string>('firstName');
    public lastName: ko.Observable<string> = ko.observable<string>('lastName');
    public email: ko.Observable<string> = ko.observable<string>('');
    public enabled: ko.Observable<boolean> = ko.observable<boolean>(false);
    private summary: string = '';

    // app communication controlled by service
    public constructor(app: any) {
        // requests in service by named functions
        let vm = app.handleRequest(
            {
                type: 'update',
                component: this.constructor.name,
                vm: {}
            }
        );

        this.update(vm);

        this.firstName.subscribe((firstName) => {
            let vm = app.handleRequest(
                {
                    type: 'update',
                    component: this.constructor.name,
                    vm: {firstName: firstName}
                }
            );

            this.update(vm);
        });


        this.lastName.subscribe((lastName) => {
            let vm = app.handleRequest(
                {
                    type: 'update',
                    component: this.constructor.name,
                    vm: {lastName: lastName}
                }
            );

            this.update(vm);
        });

        this.email.subscribe(() => {
            let vm = app.handleRequest(
                {
                    type: 'event',
                    component: this.constructor.name,
                    event: 'emailBlur',
                    vm: this.getVm()
                }
            );

            this.update(vm);
        });
    }

    public event(eventName: string) {
        return () => {
            if (eventName === 'submit') {
                alert(this.summary);
            }
        }
    }

    private getVm() {
        return {
           firstName: this.firstName.peek(),
           lastName: this.lastName.peek(),
           email: this.email.peek(),
           enabled: this.enabled.peek(),
           summary: this.summary
        }
    }

    private update(vm: any) {
        console.log(vm);
        this.firstName(vm.firstName);
        this.lastName(vm.lastName);
        this.email(vm.email);
        this.enabled(vm.enabled);
        this.summary = vm.summary;
    }
}
