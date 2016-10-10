class EventsListController{
    constructor($http){
        'ngInject';

        this.items = {};
        this.http = $http;

        //
    }

    $onInit(){
        this.http.get('/api/events').then((response) => {
            this.items = response.data.data;
        });
    }
}

export const EventsListComponent = {
    templateUrl: './views/app/components/events-list/events-list.component.html',
    controller: EventsListController,
    controllerAs: 'vm',
    bindings: {}
}
