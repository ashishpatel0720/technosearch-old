class EventController{
    constructor($state, $http){
        'ngInject';
        this.state = $state;
        this.http = $http;
        this.item = [];
    }

    $onInit(){
        var slug = this.state.params.slug;
        this.http.get('/api/event/'+slug).then((response) => {
            this.item = response.data.data;
        });
    }
}

export const EventComponent = {
    templateUrl: './views/app/components/event/event.component.html',
    controller: EventController,
    controllerAs: 'vm',
    bindings: {}
}
