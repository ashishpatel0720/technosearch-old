class TeamController{
    constructor(API){
        'ngInject';
        this.API = API;
        this.items = {};
    }


    $onInit(){
        this.API.one('team').get().then((response) => {
            this.items = response.data;
        });

    }
}

export const TeamComponent = {
    templateUrl: './views/app/components/team/team.component.html',
    controller: TeamController,
    controllerAs: 'vm',
    bindings: {}
}
