export function ToastrConfigConfig(){
    'ngInject';

    angular.extend(toastrConfig, {
        autoDismiss: true,
        maxOpened: 1,
        newestOnTop: true,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        preventOpenDuplicates: true,
        progressBar: true,
        target: 'body'
    });
}
