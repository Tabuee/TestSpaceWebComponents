import {SubscribeFormController} from './SubscribeForm/SubscribeFormController';


class App {
    private controllerMap = {
        'SubscribeForm': new SubscribeFormController()
    }

    public handleRequest(request: any): any {
        if(request.type === 'event'){
            return this.controllerMap[request.component].handleEvent(request);
        }else{
            return this.controllerMap[request.component].getVm(request);
        }
    }
}



export function getApp() {
    return new App();
}






