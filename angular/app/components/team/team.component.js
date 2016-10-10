class TeamController{
    constructor($http){
        'ngInject';
        this.http = $http;
        this.items = {};
    }


    $onInit(){
        this.http.get('/api/team').then((response) => {
            this.items = response.data.data;
        });
    }
}

export const TeamComponent = {
    templateUrl: './views/app/components/team/team.component.html',
    controller: TeamController,
    controllerAs: 'vm',
    bindings: {}
}
