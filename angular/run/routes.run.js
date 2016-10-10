export function RoutesRun($transitions,$location,$window) {
    'ngInject';
    $window.ga('create', 'UA-51356287-2', 'auto');
    $transitions.onSuccess({from: '*.*', to: '*.*'}, function() {
        $window.ga('send', 'pageview', $location.path());
    });
}
