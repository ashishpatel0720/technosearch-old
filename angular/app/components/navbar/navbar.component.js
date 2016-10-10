class NavbarController{
    constructor($window,$state){
        'ngInject';
        this.window = $window;
        this.openmenu = false;
        this.submenu = false;
        this.state = $state;
    }

    $onInit(){
        var that = this;

        angular.element(document).ready(function () {
            that.state.current.name == 'app.home' ? document.getElementById('main-nav').classList.remove('sticky') : document.getElementById('main-nav').classList.add('sticky');
            window.scrollTo(0, 0);
        });

            this.window.onscroll = function () {
                var intro = document.getElementById('intro');
                if(intro) {
                    var el = document.getElementById('main-nav');
                    var upcom = document.getElementById('upcoming-event');
                    if (intro.getBoundingClientRect().bottom < 0){
                        if(el.getBoundingClientRect().top > 0) {
                            upcom.style.marginTop = '0px';
                            el.classList.remove('sticky')
                        } else {
                            upcom.style.marginTop = '80px';
                            el.classList.add('sticky');

                        }
                    }
                    else{
                        upcom.style.marginTop = '0px';
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
