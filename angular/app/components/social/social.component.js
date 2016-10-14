class SocialController{
    constructor(){
        'ngInject';
        this.fb = 'https://www.facebook.com/technosearchnitbhopal';
        this.twitter = 'http://www.twitter.com';
        this.youtube = 'https://www.youtube.com/channel/UCGWw1YBc_jprhpdiVVzJyGw';
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
