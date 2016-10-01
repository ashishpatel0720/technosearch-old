<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(8);

	__webpack_require__(15);

	__webpack_require__(26);

	__webpack_require__(27);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app', ['app.run', 'app.filters', 'app.services', 'app.components', 'app.directives', 'app.routes', 'app.config', 'app.partials']);

	angular.module('app.run', []);
	angular.module('app.routes', []);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.config', []);
	angular.module('app.directives', []);
	angular.module('app.components', ['ui.router', 'angular-loading-bar', 'restangular', 'ngStorage', 'satellizer']);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(3);

	angular.module('app.run').run(_routes.RoutesRun);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	RoutesRun.$inject = ["$state", "$transitions"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($state, $transitions) {
	    'ngInject';

	    var requiresAuthCriteria = {
	        to: function to($state) {
	            return $state.data && $state.data.auth;
	        }
	    };

	    var redirectToLogin = function redirectToLogin($auth) {
	        'ngInject';

	        if (!$auth.isAuthenticated()) {
	            return $state.target('app.login', undefined, { location: false });
	        }
	    };
	    redirectToLogin.$inject = ["$auth"];

	    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(5);

	var _loading_bar = __webpack_require__(6);

	var _satellizer = __webpack_require__(7);

	angular.module('app.config').config(_routes.RoutesConfig).config(_loading_bar.LoadingBarConfig).config(_satellizer.SatellizerConfig);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		'ngInject';

		var getView = function getView(viewName) {
			return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
		};

		$urlRouterProvider.otherwise('/');

		/*
	     data: {auth: true} would require JWT auth
	     However you can't apply it to the abstract state
	     or landing state because you'll enter a redirect loop
	 */

		$stateProvider.state('app', {
			abstract: true,
			data: {},
			views: {
				main: {}
			}
		}).state('app.home', {
			url: '/',
			views: {
				'main@': {
					templateUrl: getView('home')
				}
			}
		}).state('app.events', {
			url: '/events',
			views: {
				'main@': {
					templateUrl: getView('events')
				}
			}
		});
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	LoadingBarConfig.$inject = ["cfpLoadingBarProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadingBarConfig = LoadingBarConfig;
	function LoadingBarConfig(cfpLoadingBarProvider) {
		'ngInject';

		cfpLoadingBarProvider.includeSpinner = false;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	SatellizerConfig.$inject = ["$authProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SatellizerConfig = SatellizerConfig;
	function SatellizerConfig($authProvider) {
		'ngInject';

		$authProvider.httpInterceptor = function () {
			return true;
		};

		$authProvider.loginUrl = '/api/auth/login';
		$authProvider.signupUrl = '/api/auth/register';
		$authProvider.tokenRoot = 'data'; //compensates success response macro
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _capitalize = __webpack_require__(9);

	var _human_readable = __webpack_require__(10);

	var _truncate_characters = __webpack_require__(11);

	var _truncate_words = __webpack_require__(12);

	var _trust_html = __webpack_require__(13);

	var _ucfirst = __webpack_require__(14);

	angular.module('app.filters').filter('capitalize', _capitalize.CapitalizeFilter).filter('humanReadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
		return function (input) {
			return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : '';
		};
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
		return function humanize(str) {
			if (!str) {
				return '';
			}
			var frags = str.split('_');
			for (var i = 0; i < frags.length; i++) {
				frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
			}
			return frags.join(' ');
		};
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
		return function (input, chars, breakOnWord) {
			if (isNaN(chars)) {
				return input;
			}
			if (chars <= 0) {
				return '';
			}
			if (input && input.length > chars) {
				input = input.substring(0, chars);

				if (!breakOnWord) {
					var lastspace = input.lastIndexOf(' ');
					// Get last space
					if (lastspace !== -1) {
						input = input.substr(0, lastspace);
					}
				} else {
					while (input.charAt(input.length - 1) === ' ') {
						input = input.substr(0, input.length - 1);
					}
				}
				return input + '...';
			}
			return input;
		};
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
		return function (input, words) {
			if (isNaN(words)) {
				return input;
			}
			if (words <= 0) {
				return '';
			}
			if (input) {
				var inputWords = input.split(/\s+/);
				if (inputWords.length > words) {
					input = inputWords.slice(0, words).join(' ') + '...';
				}
			}
			return input;
		};
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
		return function (input) {
			if (!input) {
				return null;
			}
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		};
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _sponsors = __webpack_require__(16);

	var _welcome = __webpack_require__(17);

	var _footer = __webpack_require__(18);

	var _social = __webpack_require__(19);

	var _contact = __webpack_require__(20);

	var _eventList = __webpack_require__(21);

	var _events = __webpack_require__(22);

	var _event = __webpack_require__(23);

	var _countdown = __webpack_require__(24);

	var _navbar = __webpack_require__(25);

	angular.module('app.components').component('sponsors', _sponsors.SponsorsComponent).component('welcome', _welcome.WelcomeComponent).component('footer', _footer.FooterComponent).component('social', _social.SocialComponent).component('contact', _contact.ContactComponent).component('eventList', _eventList.EventListComponent).component('events', _events.EventsComponent).component('event', _event.EventComponent).component('countdown', _countdown.CountdownComponent).component('navbar', _navbar.NavbarComponent);

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SponsorsController = function () {
	    function SponsorsController() {
	        'ngInject';

	        //

	        _classCallCheck(this, SponsorsController);
	    }

	    _createClass(SponsorsController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return SponsorsController;
	}();

	var SponsorsComponent = exports.SponsorsComponent = {
	    templateUrl: './views/app/components/sponsors/sponsors.component.html',
	    controller: SponsorsController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WelcomeController = function () {
	    function WelcomeController() {
	        'ngInject';

	        //

	        _classCallCheck(this, WelcomeController);
	    }

	    _createClass(WelcomeController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return WelcomeController;
	}();

	var WelcomeComponent = exports.WelcomeComponent = {
	    templateUrl: './views/app/components/welcome/welcome.component.html',
	    controller: WelcomeController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FooterController = function () {
	    function FooterController() {
	        'ngInject';

	        //

	        _classCallCheck(this, FooterController);
	    }

	    _createClass(FooterController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return FooterController;
	}();

	var FooterComponent = exports.FooterComponent = {
	    templateUrl: './views/app/components/footer/footer.component.html',
	    controller: FooterController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SocialController = function () {
	    function SocialController() {
	        'ngInject';

	        //

	        _classCallCheck(this, SocialController);
	    }

	    _createClass(SocialController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return SocialController;
	}();

	var SocialComponent = exports.SocialComponent = {
	    templateUrl: './views/app/components/social/social.component.html',
	    controller: SocialController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContactController = function () {
	    function ContactController() {
	        'ngInject';

	        _classCallCheck(this, ContactController);
	    }

	    _createClass(ContactController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return ContactController;
	}();

	var ContactComponent = exports.ContactComponent = {
	    templateUrl: './views/app/components/contact/contact.component.html',
	    controller: ContactController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventListController = function () {
	    function EventListController() {
	        'ngInject';

	        //

	        _classCallCheck(this, EventListController);
	    }

	    _createClass(EventListController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return EventListController;
	}();

	var EventListComponent = exports.EventListComponent = {
	    templateUrl: './views/app/components/event-list/event-list.component.html',
	    controller: EventListController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventsController = function () {
	    function EventsController() {
	        'ngInject';

	        //

	        _classCallCheck(this, EventsController);
	    }

	    _createClass(EventsController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return EventsController;
	}();

	var EventsComponent = exports.EventsComponent = {
	    templateUrl: './views/app/components/events/events.component.html',
	    controller: EventsController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventController = function () {
	    EventController.$inject = ["$http"];
	    function EventController($http) {
	        'ngInject';

	        _classCallCheck(this, EventController);

	        this.http = $http;
	        this.user = {};
	    }

	    _createClass(EventController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var _this = this;

	            this.http.get('https://api.github.com/users/harryy2510/repos').then(function (resp) {
	                _this.user = resp.data;
	            });
	        }
	    }]);

	    return EventController;
	}();

	var EventComponent = exports.EventComponent = {
	    templateUrl: './views/app/components/event/event.component.html',
	    controller: EventController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CountdownController = function () {
	    function CountdownController() {
	        'ngInject';

	        //

	        _classCallCheck(this, CountdownController);
	    }

	    _createClass(CountdownController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return CountdownController;
	}();

	var CountdownComponent = exports.CountdownComponent = {
	    templateUrl: './views/app/components/countdown/countdown.component.html',
	    controller: CountdownController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavbarController = function () {
	    function NavbarController() {
	        'ngInject';

	        //

	        _classCallCheck(this, NavbarController);
	    }

	    _createClass(NavbarController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return NavbarController;
	}();

	var NavbarComponent = exports.NavbarComponent = {
	    templateUrl: './views/app/components/navbar/navbar.component.html',
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app.directives');

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _API = __webpack_require__(28);

	// import {DialogService} from './services/dialog.service';
	// import {ToastService} from './services/toast.service';

	angular.module('app.services').service('API', _API.APIService);
	// .service('DialogService', DialogService)
	// .service('ToastService', ToastService)

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "ToastService", "$window", function APIService(Restangular, ToastService, $window) {
		'ngInject';
		//content negotiation

		_classCallCheck(this, APIService);

		var headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/x.laravel.v1+json'
		};

		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/api/').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
				if (response.status === 422 || response.status === 401) {
					for (var error in response.data.errors) {
						return ToastService.error(response.data.errors[error][0]);
					}
				}
				if (response.status === 500) {
					return ToastService.error(response.statusText);
				}
			}).addFullRequestInterceptor(function (element, operation, what, url, headers) {
				var token = $window.localStorage.satellizer_token;
				if (token) {
					headers.Authorization = 'Bearer ' + token;
				}
			});
		});
	}];

/***/ }
/******/ ]);
=======
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(1),n(2),n(4),n(8),n(15),n(30),n(31)},function(e,t){"use strict";angular.module("app",["app.run","app.filters","app.services","app.components","app.directives","app.routes","app.config","app.partials"]),angular.module("app.run",[]),angular.module("app.routes",[]),angular.module("app.filters",[]),angular.module("app.services",[]),angular.module("app.config",[]),angular.module("app.directives",[]),angular.module("app.components",["ui.router","angular-loading-bar","restangular","ngStorage","satellizer"])},function(e,t,n){"use strict";var o=n(3);angular.module("app.run").run(o.RoutesRun)},function(e,t){"use strict";function n(e,t){"ngInject";var n={to:function(e){return e.data&&e.data.auth}},o=function(t){if(!t.isAuthenticated())return e.target("app.login",void 0,{location:!1})};o.$inject=["$auth"],t.onBefore(n,o,{priority:10})}n.$inject=["$state","$transitions"],Object.defineProperty(t,"__esModule",{value:!0}),t.RoutesRun=n},function(e,t,n){"use strict";var o=n(5),r=n(6),i=n(7);angular.module("app.config").config(o.RoutesConfig).config(r.LoadingBarConfig).config(i.SatellizerConfig)},function(e,t){"use strict";function n(e,t){"ngInject";var n=function(e){return"./views/app/pages/"+e+"/"+e+".page.html"};t.otherwise("/"),e.state("app",{cache:!1,"abstract":!0,data:{},views:{header:{templateUrl:n("header")},footer:{templateUrl:n("footer")},main:{}}}).state("app.home",{cache:!1,url:"/",views:{"main@":{templateUrl:n("home")}}}).state("app.events",{cache:!1,url:"/events",views:{"main@":{templateUrl:n("events")}}}).state("app.competitions",{cache:!1,url:"/competitions",views:{"main@":{templateUrl:n("competitions")}}}).state("app.workshops",{url:"/workshops",views:{"main@":{templateUrl:n("workshops")}}}).state("app.guestlectures",{url:"/guestlectures",views:{"main@":{templateUrl:n("guestlectures")}}}).state("app.pronites",{url:"/pronites",views:{"main@":{templateUrl:n("pronites")}}}).state("app.account",{url:"/account",views:{"main@":{templateUrl:n("account")}}}).state("app.gallery",{cache:!1,url:"/gallery",views:{"main@":{templateUrl:n("gallery")}}}).state("app.team",{url:"/team",views:{"main@":{templateUrl:n("team")}}}).state("app.sponsors",{url:"/sponsors",views:{"main@":{templateUrl:n("sponsors")}}}).state("app.contact",{url:"/contact",views:{"main@":{templateUrl:n("contact")}}})}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.RoutesConfig=n},function(e,t){"use strict";function n(e){"ngInject";e.includeSpinner=!1}n.$inject=["cfpLoadingBarProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingBarConfig=n},function(e,t){"use strict";function n(e){"ngInject";e.httpInterceptor=function(){return!0},e.loginUrl="/api/auth/login",e.signupUrl="/api/auth/register",e.tokenRoot="data"}n.$inject=["$authProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.SatellizerConfig=n},function(e,t,n){"use strict";var o=n(9),r=n(10),i=n(11),a=n(12),c=n(13),s=n(14);angular.module("app.filters").filter("capitalize",o.CapitalizeFilter).filter("humanReadable",r.HumanReadableFilter).filter("truncateCharacters",i.TruncatCharactersFilter).filter("truncateWords",a.TruncateWordsFilter).filter("trustHtml",c.TrustHtmlFilter).filter("ucfirst",s.UcFirstFilter)},function(e,t){"use strict";function n(){return function(e){return e?e.replace(/([^\W_]+[^\s-]*) */g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}):""}}Object.defineProperty(t,"__esModule",{value:!0}),t.CapitalizeFilter=n},function(e,t){"use strict";function n(){return function(e){if(!e)return"";for(var t=e.split("_"),n=0;n<t.length;n++)t[n]=t[n].charAt(0).toUpperCase()+t[n].slice(1);return t.join(" ")}}Object.defineProperty(t,"__esModule",{value:!0}),t.HumanReadableFilter=n},function(e,t){"use strict";function n(){return function(e,t,n){if(isNaN(t))return e;if(t<=0)return"";if(e&&e.length>t){if(e=e.substring(0,t),n)for(;" "===e.charAt(e.length-1);)e=e.substr(0,e.length-1);else{var o=e.lastIndexOf(" ");o!==-1&&(e=e.substr(0,o))}return e+"..."}return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TruncatCharactersFilter=n},function(e,t){"use strict";function n(){return function(e,t){if(isNaN(t))return e;if(t<=0)return"";if(e){var n=e.split(/\s+/);n.length>t&&(e=n.slice(0,t).join(" ")+"...")}return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TruncateWordsFilter=n},function(e,t){"use strict";function n(e){return function(t){return e.trustAsHtml(t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.TrustHtmlFilter=n},function(e,t){"use strict";function n(){return function(e){return e?e.substring(0,1).toUpperCase()+e.substring(1):null}}Object.defineProperty(t,"__esModule",{value:!0}),t.UcFirstFilter=n},function(e,t,n){"use strict";var o=n(16),r=n(17),i=n(18),a=n(19),c=n(20),s=n(21),l=n(22),u=n(23),f=n(24),p=n(25),d=n(26),m=n(27),v=n(28),h=n(29);angular.module("app.components").component("team",o.TeamComponent).component("gallery",r.GalleryComponent).component("map",i.MapComponent).component("eventTable",a.EventTableComponent).component("sponsors",c.SponsorsComponent).component("welcome",s.WelcomeComponent).component("footer",l.FooterComponent).component("social",u.SocialComponent).component("contact",f.ContactComponent).component("eventList",p.EventListComponent).component("events",d.EventsComponent).component("event",m.EventComponent).component("countdown",v.CountdownComponent).component("navbar",h.NavbarComponent)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){}}]),e}();t.TeamComponent={templateUrl:"./views/app/components/team/team.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){function e(e,t,n,o){return'<div id="fancybox-title">'+(e&&e.length?e:"")+"<span>("+(n+1)+" / "+t.length+")</span></div>"}$(".imagebox","html").fancybox({overlayOpacity:.9,overlayColor:"#000",padding:0,titleFormat:e})}}]),e}();t.GalleryComponent={templateUrl:"./views/app/components/gallery/gallery.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){}}]),e}();t.MapComponent={templateUrl:"./views/app/components/map/map.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){$(".tabs-wrap").each(function(){var e=$(this);$(".tab-content",this).hide(),$(".tab-content:first",this).css("display","block"),$("ul.tabs li:first a",this).addClass("active-tab"),$("ul.tabs li",this).click(function(){if(!$(this).is("tab-active")){var t=$(this).index();$("ul.tabs li a",e).removeClass("active-tab"),$("a",this).addClass("active-tab"),$(".tab-content:not(:eq("+t+"))",e).css("display","none"),$(".tab-content:eq("+t+")",e).css("display","block")}return!1})})}}]),e}();t.EventTableComponent={templateUrl:"./views/app/components/event-table/event-table.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){}}]),e}();t.SponsorsComponent={templateUrl:"./views/app/components/sponsors/sponsors.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){$(document).ready(function(){function e(e){$(".smooth-scroll",e).on("click",function(e){var t=$(this).attr("href");$(t).length&&$.scrollTo(t,750,{easing:"swing",offset:{top:-65,left:0}}),e.preventDefault()})}var t={nav_height:65,animations:!1};!function(){if("undefined"!=Modernizr){Modernizr.touch&&$("body").addClass("touch-device");var e=$(window).width();Modernizr.touch&&e<=568&&!t.animations?t.animations=!1:t.animations=!0}}(),function(){function e(){$("#ticker li:first").slideUp({duration:600,easing:"easeOutSine",complete:function(){$(this).appendTo($("#ticker")).slideDown()}})}function n(){$("#scroll-arrows").find("img").stop().animate({marginTop:"15px"},1e3,"easeOutSine",function(){$("#scroll-arrows").find("img").stop().animate({marginTop:"-5px"},1e3,"easeInOutSine",function(){n()})})}var o=function r(){var r=$(".intro-resize"),e=($(window).width(),$(window).height()),t=e;r.css({height:t+"px"});var n=$(".container",r),o=n.height(),i=r.height(),a=(i-o)/2;n.css({"margin-top":a+"px"})};o(),$(window).on("resize",o),t.animations&&setInterval(function(){e()},4e3),t.animations&&n()}(),e("html")})}}]),e}();t.WelcomeComponent={templateUrl:"./views/app/components/welcome/welcome.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){}}]),e}();t.FooterComponent={templateUrl:"./views/app/components/footer/footer.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e),this.fb="http://www.facebook.com",this.twitter="http://www.twitter.com",this.youtube="http://www.youtube.com",this.g="http://www.google.com/plus"}return o(e,[{key:"$onInit",value:function(){}}]),e}();t.SocialComponent={templateUrl:"./views/app/components/social/social.component.html",controller:r,controllerAs:"social",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){}}]),e}();t.ContactComponent={templateUrl:"./views/app/components/contact/contact.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){}}]),e}();t.EventListComponent={templateUrl:"./views/app/components/event-list/event-list.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){$(document).ready(function(){function e(e){var t=$(window).width(),n=$(window).height();$(window).resize(function(){var o=$(window).width(),r=$(window).height();o===t&&r===n||(t=o,n=r,e())})}!function(e){e.fn.extend({TextTyper:function(t){var n={syntax:""},t=e.extend(n,t);return e(this).each(function(t,n){function o(){if(u<a)if(f<l){for(r.text(i.substr(0,u)),$j=u;$j<a;$j++)$random=Math.floor(Math.random()*s),r.append(c.charAt($random));f++}else f=0,u++;else p&&(r.text(i),p=!1)}var r=e(n),i=r.text(),a=i.length,c="!#$%&/?abcdefghijklmnopqrstuvwxyz;ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",s=c.length,l=2,u=0,f=0,p=!0;setInterval(o,10);r.text(""),r.show()})}})}(jQuery),function(){if($.fn.isotope){var t=$(".items"),n=$(window),o=$("img.lazy");if(t.length){var r=function(e,n){e.addClass("item-filter"),$(".item",t).each(function(e){var t=$(this);t.addClass(t.attr(n))}),e.on("click","a",function(o){var r=$(this),i=r.attr(n);$(".item-filter").removeClass("active-filter"),e.addClass("active-filter"),$(".item-filter:not(.active-filter) li a").removeClass("active"),$(".item-filter:not(.active-filter) li:first-child a").addClass("active"),e.find("a").removeClass("active"),r.addClass("active"),i&&("*"!==i&&(i=i.replace(i,"."+i)),t.isotope({filter:i})),o.preventDefault()}),e.find("a").first().addClass("active")};e(function(){t.isotope("layout")}),$(window).load(function(){t.isotope({itemSelector:".item",onLayout:function(){n.trigger("scroll")}})}),o.jail({effect:"fadeIn"}),$(".dd-filter-list").length&&r($(".dd-filter-list"),"data-categories"),$(".filter-list").length&&r($(".filter-list"),"data-categories")}}}()})}}]),e}();t.EventsComponent={templateUrl:"./views/app/components/events/events.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){}}]),e}();t.EventComponent={templateUrl:"./views/app/components/event/event.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){$.fn.countdown&&$(".countdown").each(function(e){var t=$(this).data("event-date");$(this).countdown(t,function(e){var t=$(this);switch(e.type){case"seconds":case"minutes":case"hours":case"days":case"weeks":case"daysLeft":t.find("."+e.type).html(e.value);break;case"finished":}})})}}]),e}();t.CountdownComponent={templateUrl:"./views/app/components/countdown/countdown.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){"ngInject";n(this,e)}return o(e,[{key:"$onInit",value:function(){var e={nav_height:65,animations:!1,auto_response:!0,deeplinking:!0};$(document).ready(function(){Function("/*@cc_on return document.documentMode===10@*/")()&&(document.documentElement.className+=" ie10"),function(){if("undefined"!=Modernizr){Modernizr.touch&&$("body").addClass("touch-device");var t=$(window).width();Modernizr.touch&&t<=568&&!e.animations?e.animations=!1:e.animations=!0}}(),function(){"undefined"!=$.fn.parallax&&$(".parallax").each(function(){$(this).parallax("50%",$(this).data("interia"),!1)}),$("#nav-search").on("click",function(e){$("#search-wrap").slideToggle(400),e.preventDefault()}),$(document).on("mouseenter",".fancy-dd",function(){$(this).find("ul").stop(!0,!0).slideDown(600,"easeOutExpo")}),$(document).on("mouseleave",".fancy-dd",function(){$(this).find("ul").stop(!0,!0).slideUp(600,"easeOutExpo")}),Modernizr.touch&&($(".fancy-dd").unbind("mouseenter mouseleave"),$(".fancy-dd > a").click(function(e){$(this).parent().find("ul").stop(!0,!0).slideToggle(600,"easeOutExpo"),e.preventDefault()}))}(),function(){var t=$("#nav").children("ul");$("li",t).on("mouseenter",function(){var e=$(this),t=e.children("ul");t.length&&e.addClass("active"),t.hide().stop(!0,!0).fadeIn(200)}).on("mouseleave",function(){$(this).removeClass("active").children("ul").stop(!0,!0).fadeOut(50)});var n=$("#main-nav"),o=n.offset().top-65-2,r=!1,i=function(){var e=$(window).scrollTop();e>o?(n.addClass("sticky"),n.hasClass("hide")&&(r=!0,n.removeClass("hide").css({top:"-65px"}).stop().animate({top:0},400,"easeOutSine"))):r?n.stop().animate({top:"-65px"},200,"easeOutSine",function(){n.removeClass("sticky").addClass("hide")}):n.removeClass("sticky").addClass("hide")};if($(window).scroll(function(){i()}),e.auto_response){var a=$("#nav").clone();$("ul:not(:first-child)",a).addClass("dl-submenu"),$("> ul",a).addClass("dl-menu"),a=a.children("ul"),$("#dl-menu").append(a)}$.fn.dlmenu&&$("#dl-menu").dlmenu(),$("#dl-menu ul").css("max-height",$(window).height()-65+"px"),$(window).resize(function(){$("#dl-menu ul").css("max-height",$(window).height()-65+"px")})}()}),function(e){e.extend(e,{placeholder:{browser_supported:function(){return void 0!==this._supported?this._supported:this._supported=!!("placeholder"in e('<input type="text">')[0])},shim:function(t){var n={color:"#888",cls:"placeholder",selector:"input[placeholder], textarea[placeholder]"};return e.extend(n,t),!this.browser_supported()&&e(n.selector)._placeholder_shim(n)}}}),e.extend(e.fn,{_placeholder_shim:function(t){function n(t){var n=e(t).offsetParent().offset(),o=e(t).offset();return{top:o.top-n.top,left:o.left-n.left,width:e(t).width()}}function o(t){var r=t.data("target");"undefined"!=typeof r&&(t.css(n(r)),e(window).one("resize",function(){o(t)}))}return this.each(function(){var r=e(this);if(r.is(":visible")){if(r.data("placeholder")){var i=r.data("placeholder");return i.css(n(r)),!0}var a={};r.is("textarea")||"auto"==r.css("height")||(a={lineHeight:r.css("height"),whiteSpace:"nowrap"});var c=e("<label />").text(r.attr("placeholder")).addClass(t.cls).css(e.extend({position:"absolute",display:"inline","float":"none",overflow:"hidden",textAlign:"left",color:t.color,cursor:"text",paddingTop:r.css("padding-top"),paddingRight:r.css("padding-right"),paddingBottom:r.css("padding-bottom"),paddingLeft:r.css("padding-left"),fontSize:r.css("font-size"),fontFamily:r.css("font-family"),fontStyle:r.css("font-style"),fontWeight:r.css("font-weight"),textTransform:r.css("text-transform"),backgroundColor:"transparent",zIndex:99},a)).css(n(this)).attr("for",this.id).data("target",r).click(function(){e(this).data("target").focus()}).insertBefore(this);r.data("placeholder",c).focus(function(){c.hide()}).blur(function(){c[r.val().length?"hide":"show"]()}).triggerHandler("blur"),e(window).one("resize",function(){o(c)})}})}})}(jQuery),jQuery(document).add(window).bind("ready load",function(){jQuery.placeholder&&jQuery.placeholder.shim()})}}]),e}();t.NavbarComponent={templateUrl:"./views/app/components/navbar/navbar.component.html",controller:r,controllerAs:"vm",bindings:{}}},function(e,t){"use strict";angular.module("app.directives")},function(e,t,n){"use strict";var o=n(32);angular.module("app.services").service("API",o.APIService)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.APIService=["Restangular","ToastService","$window",function o(e,t,r){"ngInject";n(this,o);var i={"Content-Type":"application/json",Accept:"application/x.laravel.v1+json"};return e.withConfig(function(e){e.setBaseUrl("/api/").setDefaultHeaders(i).setErrorInterceptor(function(e){if(422===e.status||401===e.status)for(var n in e.data.errors)return t.error(e.data.errors[n][0]);if(500===e.status)return t.error(e.statusText)}).addFullRequestInterceptor(function(e,t,n,o,i){var a=r.localStorage.satellizer_token;a&&(i.Authorization="Bearer "+a)})})}]}]);
>>>>>>> origin/master
