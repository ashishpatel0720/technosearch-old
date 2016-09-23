class EventsController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){

        /* Portfolio
         ---------------------------------------------------------------------- */
        // $(document).ready(function () {
        //     (function () {
        //
        //         if (!$.fn.isotope) return;
        //
        //
        //         var $container = $('.items'),
        //             $win = $(window),
        //             $imgs = $('img.lazy');
        //
        //         if ($container.length) {
        //
        //
        //             /* Isotope
        //              ------------------------- */
        //             onWindowResize(function () {
        //                 $container.isotope('layout');
        //             });
        //             $(window).load(function () {
        //                 $container.isotope({
        //                     itemSelector: '.item',
        //                     onLayout: function () {
        //                         $win.trigger('scroll');
        //                     }
        //                 });
        //             });
        //
        //             // Load images
        //             $imgs.jail({effect: 'fadeIn'});
        //
        //             // Add filter event
        //             function _items_filter($el, $data) {
        //
        //                 // Add all filter class
        //                 $el.addClass('item-filter');
        //
        //                 // Add categories to item classes
        //                 $('.item', $container).each(function (i) {
        //                     var
        //                         $this = $(this);
        //                     $this.addClass($this.attr($data));
        //                 });
        //
        //                 $el.on('click', 'a', function (e) {
        //                     var
        //                         $this = $(this),
        //                         $option = $this.attr($data);
        //
        //                     // Add active filter class
        //                     $('.item-filter').removeClass('active-filter');
        //                     $el.addClass('active-filter');
        //                     $('.item-filter:not(.active-filter) li a').removeClass('active');
        //                     $('.item-filter:not(.active-filter) li:first-child a').addClass('active');
        //
        //                     // Add/remove active class for this filter
        //                     $el.find('a').removeClass('active');
        //                     $this.addClass('active');
        //
        //                     if ($option) {
        //                         if ($option !== '*') $option = $option.replace($option, '.' + $option)
        //                         $container.isotope({filter: $option});
        //                     }
        //
        //                     e.preventDefault();
        //
        //                 });
        //
        //                 $el.find('a').first().addClass('active');
        //             }
        //
        //             // Init filters
        //             if ($('.dd-filter-list').length) _items_filter($('.dd-filter-list'), 'data-categories');
        //             if ($('.filter-list').length) _items_filter($('.filter-list'), 'data-categories');
        //
        //         }
        //     })();
        // });

    }
}

export const EventsComponent = {
    templateUrl: './views/app/components/events/events.component.html',
    controller: EventsController,
    controllerAs: 'vm',
    bindings: {}
}
