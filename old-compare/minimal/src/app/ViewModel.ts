import {Observable} from 'knockout';

export interface ViewModel {
    [index: string]: Observable<unknown>;
}
