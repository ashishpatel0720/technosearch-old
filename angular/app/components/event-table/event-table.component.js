class EventTableController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
        /* Tabs
         ------------------------- */
        $('.tabs-wrap').each(function() {

            /* List variables */
            var tabs = $(this);

            /* Init */
            $('.tab-content', this).hide();
            $('.tab-content:first', this).css('display', 'block');
            $('ul.tabs li:first a', this).addClass('active-tab');

            /* Click on Tab */
            $('ul.tabs li', this).click(function () {
                if (!$(this).is('tab-active')) {
                    var current = $(this).index();
                    $('ul.tabs li a', tabs).removeClass('active-tab');
                    $('a', this).addClass('active-tab');
                    $('.tab-content:not(:eq(' + current + '))', tabs).css('display', 'none');
                    $('.tab-content:eq(' + current + ')', tabs).css('display', 'block');
                }
                return false;
            });
        });
    }
}

export const EventTableComponent = {
    templateUrl: './views/app/components/event-table/event-table.component.html',
    controller: EventTableController,
    controllerAs: 'vm',
    bindings: {}
}
