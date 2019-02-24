import {ViewModel} from '../ViewModel';
import * as ko from 'knockout';

export interface SubscribeFormViewModel extends ViewModel {
    firstName: ko.Observable<string>;
    lastName: ko.Observable<string>;
    email: ko.Observable<string>;
    enabled: ko.Observable<boolean>;
}
