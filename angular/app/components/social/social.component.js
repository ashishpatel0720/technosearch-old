class SocialController{
    constructor(){
        'ngInject';
        this.fb = 'http://www.facebook.com';
        this.twitter = 'http://www.twitter.com';
        this.youtube = 'http://www.youtube.com';
        this.g = 'http://www.google.com/plus';



        //
    }

    $onInit(){
    }
}

export const SocialComponent = {
    templateUrl: './views/app/components/social/social.component.html',
    controller: SocialController,
    controllerAs: 'social',
    bindings: {}
}
