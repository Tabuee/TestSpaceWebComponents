class ViewModel {
    public email: string = '';
    public firstName: string = 'firstName';
    public lastName: string = 'lastName';
    public summary: string = '';
    public enabled: boolean = false;
}

export class SubscribeFormController {
    private vm: ViewModel;

    public constructor() {
        this.vm = new ViewModel();
    }

    public handleEvent(requestModel: any) {
        let event = requestModel.event;

        if (event === 'emailBlur') {
            if (this.validateEmail(requestModel.vm.email)) {
                requestModel.vm.enabled = true;
                requestModel.vm.summary = this.getSummary();
            } else {
                requestModel.vm.enabled = false;
            }
        }

        return this.getVm(requestModel);
    }

    public getVm(requestModel: any) {
        this.vm = Object.assign({}, this.vm, requestModel.vm);

        return this.vm;
    }

    private getSummary() {
        return `
        sending: 
        firstName: ${this.vm.firstName}
        lastName: ${this.vm.lastName}
        email: ${this.vm.email}
        `;
    }

    private validateEmail(email: string): boolean {
        return email !== '';
    }
}
