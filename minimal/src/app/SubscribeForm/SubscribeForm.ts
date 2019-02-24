import * as ko from "knockout";
import {BaseViewModel} from '../BaseViewModel';
import {SubscribeFormViewModel} from './SubscribeFormViewModel';

export class SubscribeForm extends BaseViewModel<SubscribeFormViewModel> implements SubscribeFormViewModel{
    public firstName: ko.Observable<string> = ko.observable<string>('firstName');
    public lastName: ko.Observable<string> = ko.observable<string>('lastName');
    public email: ko.Observable<string> = ko.observable<string>('');
    public enabled: ko.Observable<boolean> = ko.observable<boolean>(false);
}
