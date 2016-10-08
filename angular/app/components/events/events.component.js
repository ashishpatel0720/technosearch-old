class EventsController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){

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

        // var buttonGroups = document.querySelectorAll('.button-group');
        // for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
        //     var buttonGroup = buttonGroups[i];
        //     radioButtonGroup( buttonGroup );
        // }
        //
        // function radioButtonGroup( buttonGroup ) {
        //     buttonGroup.addEventListener( 'click', function( event ) {
        //         buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        //         event.target.classList.add('is-checked');
        //     });
        // }



            // var $container = $('.items'),
            //     $win = $(window),
            //     $imgs = $('img.lazy');
            //
            // if ($container.length) {
            //
            //     function _items_filter($el, $data) {
            //
            //         // Add all filter class
            //         $el.addClass('item-filter');
            //
            //         // Add categories to item classes
            //         $('.item', $container).each(function(i) {
            //             var
            //                 $this = $(this);
            //             $this.addClass($this.attr($data));
            //         });
            //
            //         $el.on('click', 'a', function(e){
            //             var
            //                 $this   = $(this),
            //                 $option = $this.attr($data);
            //
            //             // Add active filter class
            //             $('.item-filter').removeClass('active-filter');
            //             $el.addClass('active-filter');
            //             $('.item-filter:not(.active-filter) li a').removeClass('active');
            //             $('.item-filter:not(.active-filter) li:first-child a').addClass('active');
            //
            //             // Add/remove active class for this filter
            //             $el.find('a').removeClass('active');
            //             $this.addClass('active');
            //
            //             if ($option) {
            //                 if ($option !== '*') $option = $option.replace($option, '.' + $option)
            //                 $container.isotope({ filter : $option });
            //             }
            //
            //             e.preventDefault();
            //
            //         });
            //
            //         $el.find('a').first().addClass('active');
            //     }
            //
            //
            //     if ($('.filter-list').length) _items_filter($('.filter-list'), 'data-categories');
            //
            // }


        // $el.addClass('item-filter');
        // $('.item', $container).each(function(i) {
        //     var
        //         $this = $(this);
        //     $this.addClass($this.attr($data));
        // });
        //
        // $el.on('click', 'a', function(e){
        //     var
        //         $this   = $(this),
        //         $option = $this.attr($data);
        //
        //     // Add active filter class
        //     $('.item-filter').removeClass('active-filter');
        //     $el.addClass('active-filter');
        //     $('.item-filter:not(.active-filter) li a').removeClass('active');
        //     $('.item-filter:not(.active-filter) li:first-child a').addClass('active');
        //
        //     // Add/remove active class for this filter
        //     $el.find('a').removeClass('active');
        //     $this.addClass('active');
        //
        //     if ($option) {
        //         if ($option !== '*') $option = $option.replace($option, '.' + $option)
        //         $container.isotope({ filter : $option });
        //     }
        //
        //     e.preventDefault();
        //
        // });
        //
        // $el.find('a').first().addClass('active');

    }
}

export const EventsComponent = {
    templateUrl: './views/app/components/events/events.component.html',
    controller: EventsController,
    controllerAs: 'vm',
    bindings: {}
}
