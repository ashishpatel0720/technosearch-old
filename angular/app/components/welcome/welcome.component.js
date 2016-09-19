class WelcomeController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
    }
}

export const WelcomeComponent = {
    templateUrl: './views/app/components/welcome/welcome.component.html',
    controller: WelcomeController,
    controllerAs: 'vm',
    bindings: {}
}
