import * as ko from 'knockout';
import {Observable} from 'knockout';
import {BaseViewModel} from '../BaseViewModel';
import {ClockViewModel} from './ClockViewModel';

export class DefaultClock extends BaseViewModel<ClockViewModel> implements ClockViewModel {
    public hourDegreesN: Observable<number> = ko.observable(0);
    public minuteDegreesN: Observable<number> = ko.observable(0);
    public secondDegreesN: Observable<number> = ko.observable(0);
}
