class GalleryController{
    constructor(){
        'ngInject';
    }

    $onInit(){
        jQuery('.masonry').magnificPopup({
            delegate: 'a',
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
