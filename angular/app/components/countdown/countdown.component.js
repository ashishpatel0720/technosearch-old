class CountdownController{
    constructor(){
        'ngInject';
        this.countTime = 1476988200 - Math.round(+new Date()/1000);
    }

    $onInit(){
    }
}

export const CountdownComponent = {
    templateUrl: './views/app/components/countdown/countdown.component.html',
    controller: CountdownController,
    controllerAs: 'vm',
    bindings: {}
}
