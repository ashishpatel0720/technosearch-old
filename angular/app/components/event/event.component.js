class EventController{
    constructor(){
        'ngInject';

        this.name = 'Hariom';
        console.log(this.name)

    }

    $onInit(){

    }

    login(){
        console.log('cdsc')
    }
}

export const EventComponent = {
    templateUrl: './views/app/components/event/event.component.html',
    controller: EventController,
    controllerAs: 'vm',
    bindings: {}
}
