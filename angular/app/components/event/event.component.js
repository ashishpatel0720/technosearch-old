class EventController{
    constructor($state){
        'ngInject';
        this.state = $state;
    }

    $onInit(){
        console.log(this.state.params.slug);
    }
}

export const EventComponent = {
    templateUrl: './views/app/components/event/event.component.html',
    controller: EventController,
    controllerAs: 'vm',
    bindings: {}
}
