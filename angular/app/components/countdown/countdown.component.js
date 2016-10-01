class CountdownController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
        /* Countdown
         ------------------------- */
        if ($.fn.countdown) {

            $('.countdown').each(function(e) {
                var date = $(this).data('event-date');

                $(this).countdown(date, function(event) {
                    var $this = $(this);

                    switch(event.type) {
                        case "seconds":
                        case "minutes":
                        case "hours":
                        case "days":
                        case "weeks":
                        case "daysLeft":
                            $this.find('.' + event.type).html(event.value);
                            break;

                        case "finished":

                            break;
                    }
                });
            });
        }


    }
}

export const CountdownComponent = {
    templateUrl: './views/app/components/countdown/countdown.component.html',
    controller: CountdownController,
    controllerAs: 'vm',
    bindings: {}
}
