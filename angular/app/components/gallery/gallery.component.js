class GalleryController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
        $('.masonry').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image'
        });
    }
}

export const GalleryComponent = {
    templateUrl: './views/app/components/gallery/gallery.component.html',
    controller: GalleryController,
    controllerAs: 'vm',
    bindings: {}
}
