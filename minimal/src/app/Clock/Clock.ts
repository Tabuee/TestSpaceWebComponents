import * as ko from 'knockout';
import {Observable} from 'knockout';

export class Clock {
    private hourDegreesN: Observable<number> = ko.observable(0);
    private minuteDegreesN: Observable<number> = ko.observable(0);
    private secondDegreesN: Observable<number> = ko.observable(0);

    public constructor() {
    }

    public updateView(vm: any) {
        this.hourDegreesN(vm.hourDegreesN);
        this.minuteDegreesN(vm.minuteDegreesN);
        this.secondDegreesN(vm.secondDegreesN);
    }
}
