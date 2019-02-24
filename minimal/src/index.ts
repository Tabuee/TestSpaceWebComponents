import {SubscribeForm} from './app/SubscribeForm/SubscribeForm';
import * as ko from 'knockout';
import {Clock} from './app/Clock/Clock';

let controllers = {
    'SubscribeForm': SubscribeForm,
    'AnalogClock': Clock
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
            let contrl = controllers[ctrlName];
            //@ts-ignore
            ko.applyBindings(new contrl(element.dataset), element);

            element.setAttribute('data-bind', 'component: "' + ctrlName+'"');
        }
    },5000);
});
