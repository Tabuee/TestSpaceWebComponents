import {Observable} from 'knockout';
import {ViewModel} from '../ViewModel';

export interface ClockViewModel extends ViewModel {
    hourDegreesN: Observable<number>;
    minuteDegreesN: Observable<number>;
    secondDegreesN: Observable<number>;
}
