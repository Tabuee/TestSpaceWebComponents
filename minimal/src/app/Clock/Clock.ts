import * as ko from 'knockout';
import {Observable} from 'knockout';

export class Clock {
    private showSeconds = ko.observable(true);
    private showMs = ko.observable(false);
    private hourDegreesN: Observable<number> = ko.observable(0);
    private minuteDegreesN: Observable<number> = ko.observable(0);
    private secondDegreesN: Observable<number> = ko.observable(0);

    public constructor(params: any) {
        this.setLines();
        if (typeof params.showms !== 'undefined' && params.showms !== '') {
            this.showMs(params.showms === 'true');
        }
        this.onInit();
    }

    private onInit() {
        let analogInterval: number = 1000;

        if (this.showMs.peek()) {
            analogInterval = 50;
        }

        console.log('start with: ' + analogInterval);
        setInterval(this.setLines.bind(this), analogInterval);
    }

    private setLines() {
        let date = new Date();
        this.hourDegreesN((date.getHours() + date.getMinutes() / 60) / 12 * 360);
        this.minuteDegreesN(date.getMinutes() / 60 * 360);

        if (this.showSeconds.peek()) {
            this.secondDegreesN((date.getSeconds()) / 60 * 360);
        }

        if (this.showSeconds.peek() && this.showMs.peek()) {
            this.secondDegreesN((date.getSeconds() + date.getMilliseconds() / 1000) / 60 * 360);
        }
    }
}
