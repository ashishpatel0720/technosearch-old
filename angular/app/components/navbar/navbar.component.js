class NavbarController{
    constructor($scope,$window){
        'ngInject';
        this.window = $window;
        this.scope = $scope;
        this.openmenu = false;
    }

    $onInit(){
        // this.stickyNav = true;

            this.window.onscroll = function () {
                var intro = document.getElementById('intro');
                if(intro) {
                    var el = document.getElementById('main-nav');
                    var intro = document.getElementById('intro');
                    if (intro.getBoundingClientRect().bottom < 0){
                        el.getBoundingClientRect().top > 0 ? el.classList.remove('sticky') : el.classList.add('sticky');
                    }
                    else{
                        el.classList.remove('sticky')
                    }
                }

            };

    }
}

export const NavbarComponent = {
    templateUrl: './views/app/components/navbar/navbar.component.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindings: {}
}
