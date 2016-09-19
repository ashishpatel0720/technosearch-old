export function RoutesConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	let getView = (viewName) => {
		return `./views/app/pages/${viewName}/${viewName}.page.html`;
	};

	$urlRouterProvider.otherwise('/');

    /*
        data: {auth: true} would require JWT auth
        However you can't apply it to the abstract state
        or landing state because you'll enter a redirect loop
    */

	$stateProvider
		.state('app', {
			abstract: true,
            data: {},
			views: {
				main: {}
			}
		})
		.state('app.home', {
			url: '/',
			views: {
				'main@': {
					templateUrl: getView('home')
				}
			}
		})
		.state('app.events', {
            url: '/events',
            views: {
                'main@': {
                    templateUrl: getView('events')
                }
            }
        });
}
