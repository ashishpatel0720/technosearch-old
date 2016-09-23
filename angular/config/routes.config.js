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
            cache: false,
			abstract: true,
            data: {},
			views: {
				main: {}
			}
		})
		.state('app.home', {
            cache: false,
			url: '/',
			views: {
				'main@': {
					templateUrl: getView('home')
				}
			}
		})
		.state('app.events', {
            cache: false,
            url: '/events',
            views: {
                'main@': {
                    templateUrl: getView('events')
                }
            }
        })
		.state('app.competitions', {
            cache:false,
            url: '/competitions',
            views: {
                'main@': {
                    templateUrl: getView('competitions')
                }
            }
        })
		.state('app.workshops', {
            url: '/workshops',
            views: {
                'main@': {
                    templateUrl: getView('workshops')
                }
            }
        })
		.state('app.guestlectures', {
            url: '/guestlectures',
            views: {
                'main@': {
                    templateUrl: getView('guestlectures')
                }
            }
        })
		.state('app.pronites', {
            url: '/pronites',
            views: {
                'main@': {
                    templateUrl: getView('pronites')
                }
            }
        })
		.state('app.account', {
            url: '/account',
            views: {
                'main@': {
                    templateUrl: getView('account')
                }
            }
        })
		.state('app.gallery', {
		    cache: false,
            url: '/gallery',
            views: {
                'main@': {
                    templateUrl: getView('gallery')
                }
            }
        })
		.state('app.team', {
            url: '/team',
            views: {
                'main@': {
                    templateUrl: getView('team')
                }
            }
        })
		.state('app.sponsors', {
            url: '/sponsors',
            views: {
                'main@': {
                    templateUrl: getView('sponsors')
                }
            }
        })
		.state('app.contact', {
            url: '/contact',
            views: {
                'main@': {
                    templateUrl: getView('contact')
                }
            }
        })


    // $locationProvider.html5Mode(true);

}
