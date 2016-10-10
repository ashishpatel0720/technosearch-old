class EventController{
    constructor($state){
        'ngInject';
        this.state = $state;
    }

    $onInit(){

    }
}

export const EventComponent = {
    templateUrl: './views/app/components/event/event.component.html',
    controller: EventController,
    controllerAs: 'vm',
    bindings: {}
}
