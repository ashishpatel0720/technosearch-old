class WelcomeController{
    constructor(){
        'ngInject';

        this.tickerItems = [
            {
                title: "TECHNOSEARCH 2K16"
            },
            {
                title: "Central India's Largest TechFest"
            },
            {
                title: "21st to 23rd October"
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
