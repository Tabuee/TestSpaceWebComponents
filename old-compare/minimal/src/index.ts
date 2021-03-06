import {SubscribeForm} from './app/SubscribeForm/SubscribeForm';
import * as ko from 'knockout';
import {DefaultClock} from './app/Clock/DefaultClock';
import {ClockController} from './app/Clock/ClockController';
import {SubscribeFormController} from './app/SubscribeForm/SubscribeFormController';

let controllers = {
    'SubscribeForm': {controller: SubscribeFormController, vm: SubscribeForm},
    'AnalogClock': {controller: ClockController, vm: DefaultClock}
};

function ready(fn: () => void) {
    // @ts-ignore
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    setTimeout(()=>{
        let elements = document.querySelectorAll('[data-controller]');
        for (let index = 0; index < elements.length; index ++) {
            let element = elements[index];
            //@ts-ignore
            let ctrlName = element.dataset.controller;
            let controlerSet = controllers[ctrlName];
            let vm = new controlerSet.vm();
            if(typeof controlerSet.controller !== 'undefined'){
                //@ts-ignore
                let controller = new controlerSet.controller(vm, element.dataset);
            }
            ko.applyBindings(vm, element);
        }
    },5000);
});
