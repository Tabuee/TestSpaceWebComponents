import {Observable, SubscriptionCallback} from 'knockout';
import {ViewModel} from './ViewModel';

export abstract class BaseViewModel<T> implements ViewModel {
    [index: string]: Observable<unknown> | any;

    public subscribe(key: keyof T, fn: SubscriptionCallback) {
        (this)[<keyof ViewModel>key].subscribe(fn);
    }

    public event(name: string) {
        this.eventHandler(name);
    }

    public setEventHandler(eventHandler: any) {
        this.eventHandler = eventHandler;
    }

    public updateView(updatedVm: {[P in keyof T]-?: unknown}) {
        for (let key in updatedVm) {
            if (this.hasOwnProperty(key) && this[key] !== 'undefined') {
                (<Observable<unknown>> this[key])(updatedVm[key]);
            }
        }
    }

    private eventHandler: (eventName: string) => void = () => undefined;
}
