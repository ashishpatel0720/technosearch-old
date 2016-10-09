class WelcomeController{
    constructor(){
        'ngInject';

        this.tickerItems = [
            {
                title: "Central India's Largest TechFest"
            },
            {
                title: "21-23 October"
            }
        ]
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
