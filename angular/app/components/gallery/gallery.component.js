class GalleryController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){

        /* Fancybox (lightbox)
         ------------------------- */
        function formatTitle(title, currentArray, currentIndex, currentOpts) {
            return '<div id="fancybox-title">' + (title && title.length ? title : '' ) + '<span>(' + (currentIndex + 1) + ' / ' + currentArray.length + ')</span></div>';
        }

        // Add Fancybox only for images
        $('.imagebox', 'html').fancybox({
            overlayOpacity : .9,
            overlayColor: '#000',
            padding: 0,
            titleFormat: formatTitle
        });
    }
}

export const GalleryComponent = {
    templateUrl: './views/app/components/gallery/gallery.component.html',
    controller: GalleryController,
    controllerAs: 'vm',
    bindings: {}
}
