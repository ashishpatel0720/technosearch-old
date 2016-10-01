class EventController{
    constructor($http){
        'ngInject';
        this.http = $http;
        this.user = {};

    }

    $onInit(){
        this.http.get('https://api.github.com/users/harryy2510/repos').then((resp)=>{
            this.user = resp.data;
        })
    }
}

export const EventComponent = {
    templateUrl: './views/app/components/event/event.component.html',
    controller: EventController,
    controllerAs: 'vm',
    bindings: {}
}
