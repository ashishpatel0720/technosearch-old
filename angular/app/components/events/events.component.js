class EventsController{
    constructor($http){
        'ngInject';
        this.items = {};
        this.http = $http;
    }

    $onInit(){

        this.http.get('/api/events').then((response) => {
            this.items = response.data.data;



            setTimeout(function(){
                var iso = new Isotope( '.items', {
                    itemSelector: '.item',
                    layoutMode: 'fitRows'
                });
                angular.element(document).ready(function () {
                    iso.arrange({ filter: '*' });
                });
                var filtersElem = document.querySelector('.filter-list');
                filtersElem.addEventListener( 'click', function( event ) {
                    var filterValue = event.target.getAttribute('data-filter');
                    iso.arrange({ filter: filterValue });
                });

                var buttonGroup = document.querySelector('.filter-list');
                buttonGroup.addEventListener( 'click', function( event ) {
                    buttonGroup.querySelector('.active').classList.remove('active');
                    event.target.classList.add('active');
                });

            },1500);
        });
    }
}

export const EventsComponent = {
    templateUrl: './views/app/components/events/events.component.html',
    controller: EventsController,
    controllerAs: 'vm',
    bindings: {}
}
