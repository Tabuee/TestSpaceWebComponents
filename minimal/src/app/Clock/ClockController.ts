import {DefaultClock} from './DefaultClock';

export class ClockController {
    private vm: DefaultClock;
    private showMs: boolean;

    public constructor(vm: DefaultClock, params: any) {
        this.vm = vm;

        this.showMs = false;
        if (typeof params.showms !== 'undefined' && params.showms !== '') {
            this.showMs = params.showms === 'true';
        }

        let analogInterval: number = 1000;

        if (this.showMs) {
            analogInterval = 50;
        }

        setInterval(this.update.bind(this), analogInterval);
        vm.subscribe('minuteDegreesN', (param) => {console.log(param);});
        vm.setEventHandler((event: string) => {
            console.log(event);
        });
    }

    private update() {
        let date = new Date();
        let hourDegreesN = (date.getHours() + date.getMinutes() / 60) / 12 * 360;
        let minuteDegreesN = date.getMinutes() / 60 * 360;
        let secondDegreesN = (date.getSeconds()) / 60 * 360;

        if (this.showMs) {
            secondDegreesN = (date.getSeconds() + date.getMilliseconds() / 1000) / 60 * 360;
        }

        this.vm.updateView(
            {
                hourDegreesN,
                minuteDegreesN,
                secondDegreesN
            }
        );
    }
}
