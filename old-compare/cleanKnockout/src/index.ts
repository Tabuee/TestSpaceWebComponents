import * as ko from 'knockout';
import {SubscribeFormController} from './app/SubscribeForm/SubscribeFormController';
import {getApp} from './app/app';
import {SubscribeForm} from './webView/SubscribeForm/SubscribeForm';

let controllers = {
    'SubscribeForm': {controller: SubscribeFormController, vm: SubscribeForm}
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
    let app = getApp();

    setTimeout(()=>{
        let elements = document.querySelectorAll('[data-controller]');
        for (let index = 0; index < elements.length; index ++) {
            let element = elements[index];
            //@ts-ignore
            let ctrlName = element.dataset.controller;
            let controlerSet = controllers[ctrlName];
            let vm = new controlerSet.vm(app);
            if(typeof controlerSet.controller !== 'undefined'){
                //@ts-ignore
                let controller = new controlerSet.controller(vm, element.dataset);
            }
            ko.applyBindings(vm, element);
        }
    },5000);
});
