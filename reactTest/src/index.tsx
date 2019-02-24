import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubscribeForm} from './SubscribeForm/SubscribeForm';

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
        ReactDOM.render(
            <SubscribeForm></SubscribeForm>,
            document.getElementById('root')
        );
    },5000);
});
