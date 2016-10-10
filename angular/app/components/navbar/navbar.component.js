class NavbarController{
    constructor($window){
        'ngInject';
        this.window = $window;
        this.openmenu = false;
        this.submenu = false;
    }

    $onInit(){
        // this.stickyNav = true;

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
                            upcom.style.marginTop = '92px';
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
