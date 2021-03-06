import {SubscribeForm} from './app/SubscribeForm/SubscribeForm';
import * as ko from 'knockout';

let controllers = {
    'SubscribeForm': SubscribeForm,
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
            let vm = controllers[ctrlName];
            ko.applyBindings(new vm(), element);
        }
    },5000);
});
