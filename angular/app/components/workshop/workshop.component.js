class WorkshopController{
    constructor($state){
        'ngInject';
        this.state = $state;
        this.slug = 'nothing';
    }

    $onInit(){
        this.slug = this.state.params.slug;
    }
}

export const WorkshopComponent = {
    templateUrl: './views/app/components/workshop/workshop.component.html',
    controller: WorkshopController,
    controllerAs: 'vm',
    bindings: {}
}
