class MapController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){

        if ($.fn.gMap) {

            $('.gmap', 'html').each(function(){
                var
                    $gmap = $(this),
                    $address = $gmap.data('address'), // Google map address e.g 'Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia'
                    $zoom = $gmap.data('zoom'),// Map zoom value. Default: 16
                    $zoom_control = $gmap.data('zoom_control'), // Use map zoom. Default: true
                    $scrollwheel = $gmap.data('scrollwheel'); // Enable mouse scroll whell for map zooming: Default: false

                $gmap.gMap({
                    address: $address,
                    zoom: $zoom,
                    zoomControl: $zoom_control,
                    scrollwheel: $scrollwheel,
                    markers: [
                        { 'address' : $address }
                    ],
                    icon: {
                        image: 'img/map-marker.png',
                        iconsize: [48,56],
                        iconanchor: [20,56]
                    }
                });

            });
        }

    }
}

export const MapComponent = {
    templateUrl: './views/app/components/map/map.component.html',
    controller: MapController,
    controllerAs: 'vm',
    bindings: {}
}
