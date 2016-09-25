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

	__webpack_require__(30);

	__webpack_require__(31);

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
	        cache: false,
	        abstract: true,
	        data: {},
	        views: {
	            main: {}
	        }
	    }).state('app.home', {
	        cache: false,
	        url: '/',
	        views: {
	            'main@': {
	                templateUrl: getView('home')
	            }
	        }
	    }).state('app.events', {
	        cache: false,
	        url: '/events',
	        views: {
	            'main@': {
	                templateUrl: getView('events')
	            }
	        }
	    }).state('app.competitions', {
	        cache: false,
	        url: '/competitions',
	        views: {
	            'main@': {
	                templateUrl: getView('competitions')
	            }
	        }
	    }).state('app.workshops', {
	        url: '/workshops',
	        views: {
	            'main@': {
	                templateUrl: getView('workshops')
	            }
	        }
	    }).state('app.guestlectures', {
	        url: '/guestlectures',
	        views: {
	            'main@': {
	                templateUrl: getView('guestlectures')
	            }
	        }
	    }).state('app.pronites', {
	        url: '/pronites',
	        views: {
	            'main@': {
	                templateUrl: getView('pronites')
	            }
	        }
	    }).state('app.account', {
	        url: '/account',
	        views: {
	            'main@': {
	                templateUrl: getView('account')
	            }
	        }
	    }).state('app.gallery', {
	        cache: false,
	        url: '/gallery',
	        views: {
	            'main@': {
	                templateUrl: getView('gallery')
	            }
	        }
	    }).state('app.team', {
	        url: '/team',
	        views: {
	            'main@': {
	                templateUrl: getView('team')
	            }
	        }
	    }).state('app.sponsors', {
	        url: '/sponsors',
	        views: {
	            'main@': {
	                templateUrl: getView('sponsors')
	            }
	        }
	    }).state('app.contact', {
	        url: '/contact',
	        views: {
	            'main@': {
	                templateUrl: getView('contact')
	            }
	        }
	    });

	    // $locationProvider.html5Mode(true);
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

	var _team = __webpack_require__(16);

	var _gallery = __webpack_require__(17);

	var _map = __webpack_require__(18);

	var _eventTable = __webpack_require__(19);

	var _sponsors = __webpack_require__(20);

	var _welcome = __webpack_require__(21);

	var _footer = __webpack_require__(22);

	var _social = __webpack_require__(23);

	var _contact = __webpack_require__(24);

	var _eventList = __webpack_require__(25);

	var _events = __webpack_require__(26);

	var _event = __webpack_require__(27);

	var _countdown = __webpack_require__(28);

	var _navbar = __webpack_require__(29);

	angular.module('app.components').component('team', _team.TeamComponent).component('gallery', _gallery.GalleryComponent).component('map', _map.MapComponent).component('eventTable', _eventTable.EventTableComponent).component('sponsors', _sponsors.SponsorsComponent).component('welcome', _welcome.WelcomeComponent).component('footer', _footer.FooterComponent).component('social', _social.SocialComponent).component('contact', _contact.ContactComponent).component('eventList', _eventList.EventListComponent).component('events', _events.EventsComponent).component('event', _event.EventComponent).component('countdown', _countdown.CountdownComponent).component('navbar', _navbar.NavbarComponent);

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TeamController = function () {
	    function TeamController() {
	        'ngInject';

	        //

	        _classCallCheck(this, TeamController);
	    }

	    _createClass(TeamController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return TeamController;
	}();

	var TeamComponent = exports.TeamComponent = {
	    templateUrl: './views/app/components/team/team.component.html',
	    controller: TeamController,
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

	var GalleryController = function () {
	    function GalleryController() {
	        'ngInject';

	        //

	        _classCallCheck(this, GalleryController);
	    }

	    _createClass(GalleryController, [{
	        key: '$onInit',
	        value: function $onInit() {

	            /* Fancybox (lightbox)
	             ------------------------- */
	            function formatTitle(title, currentArray, currentIndex, currentOpts) {
	                return '<div id="fancybox-title">' + (title && title.length ? title : '') + '<span>(' + (currentIndex + 1) + ' / ' + currentArray.length + ')</span></div>';
	            }

	            // Add Fancybox only for images
	            $('.imagebox', 'html').fancybox({
	                overlayOpacity: .9,
	                overlayColor: '#000',
	                padding: 0,
	                titleFormat: formatTitle
	            });
	        }
	    }]);

	    return GalleryController;
	}();

	var GalleryComponent = exports.GalleryComponent = {
	    templateUrl: './views/app/components/gallery/gallery.component.html',
	    controller: GalleryController,
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

	var MapController = function () {
	    function MapController() {
	        'ngInject';

	        //

	        _classCallCheck(this, MapController);
	    }

	    _createClass(MapController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return MapController;
	}();

	var MapComponent = exports.MapComponent = {
	    templateUrl: './views/app/components/map/map.component.html',
	    controller: MapController,
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

	var EventTableController = function () {
	    function EventTableController() {
	        'ngInject';

	        //

	        _classCallCheck(this, EventTableController);
	    }

	    _createClass(EventTableController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            /* Tabs
	             ------------------------- */
	            $('.tabs-wrap').each(function () {

	                /* List variables */
	                var tabs = $(this);

	                /* Init */
	                $('.tab-content', this).hide();
	                $('.tab-content:first', this).css('display', 'block');
	                $('ul.tabs li:first a', this).addClass('active-tab');

	                /* Click on Tab */
	                $('ul.tabs li', this).click(function () {
	                    if (!$(this).is('tab-active')) {
	                        var current = $(this).index();
	                        $('ul.tabs li a', tabs).removeClass('active-tab');
	                        $('a', this).addClass('active-tab');
	                        $('.tab-content:not(:eq(' + current + '))', tabs).css('display', 'none');
	                        $('.tab-content:eq(' + current + ')', tabs).css('display', 'block');
	                    }
	                    return false;
	                });
	            });
	        }
	    }]);

	    return EventTableController;
	}();

	var EventTableComponent = exports.EventTableComponent = {
	    templateUrl: './views/app/components/event-table/event-table.component.html',
	    controller: EventTableController,
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
/* 21 */
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
	        value: function $onInit() {

	            /* Main Settings
	             ---------------------------------------------------------------------- */
	            $(document).ready(function () {
	                var settings = {
	                    // Navigation height
	                    // nav_height: $('.nav-container').css('height').replace('px', ''),
	                    nav_height: 65,

	                    // Animations on mobile devices
	                    animations: false

	                };

	                /* Detect Touch Device and set animations
	                 ---------------------------------------------------------------------- */
	                (function () {

	                    if (Modernizr == 'undefined') return;

	                    if (Modernizr.touch) {

	                        $('body').addClass('touch-device');
	                    }

	                    // Set animations on mobile devices
	                    var current_width = $(window).width();

	                    if (Modernizr.touch && current_width <= 568 && !settings.animations) {
	                        settings.animations = false;
	                    } else {
	                        settings.animations = true;
	                    }

	                    // console.log(settings.animations, current_width)
	                })();

	                /* Intro section
	                 ---------------------------------------------------------------------- */
	                (function () {

	                    var intro = function intro() {
	                        var intro = $('.intro-resize'),
	                            win_width = $(window).width(),
	                            win_height = $(window).height(),
	                            intro_height = win_height;

	                        intro.css({
	                            height: intro_height + 'px'
	                        });

	                        // Center content
	                        var container = $('.container', intro),
	                            container_height = container.height(),
	                            intro_h = intro.height(),
	                            margin = (intro_h - container_height) / 2;

	                        container.css({
	                            'margin-top': margin + 'px'
	                        });
	                    };
	                    // Init intro
	                    intro();

	                    $(window).on('resize', intro);

	                    // Ticker
	                    function tick() {
	                        $('#ticker li:first').slideUp({
	                            duration: 600,
	                            easing: 'easeOutSine',
	                            complete: function complete() {
	                                $(this).appendTo($('#ticker')).slideDown();
	                            }
	                        });
	                    }
	                    if (settings.animations) {
	                        setInterval(function () {
	                            tick();
	                        }, 4000);
	                    }

	                    // Scroll arrow
	                    function scroll_arrows() {
	                        $('#scroll-arrows').find('img').stop().animate({
	                            marginTop: '15px'
	                        }, 1000, 'easeOutSine', function () {
	                            $('#scroll-arrows').find('img').stop().animate({
	                                marginTop: '-5px'
	                            }, 1000, 'easeInOutSine', function () {
	                                scroll_arrows();
	                            });
	                        });
	                    }
	                    if (settings.animations) {
	                        scroll_arrows();
	                    }
	                })();
	                function scripts(container) {
	                    /* Smooth Scroll
	                     ------------------------- */
	                    $('.smooth-scroll', container).on('click', function (e) {
	                        var $id = $(this).attr('href');

	                        // If element exists
	                        if ($($id).length) {
	                            $.scrollTo($id, 750, {
	                                easing: 'swing',
	                                // offset: {top: -settings.nav_height, left: 0}
	                                offset: { top: -65, left: 0 }
	                            });
	                        }
	                        e.preventDefault();
	                    });
	                }
	                scripts('html');
	            });
	        }
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
/* 22 */
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
/* 23 */
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

	        _classCallCheck(this, SocialController);

	        this.fb = 'http://www.facebook.com';
	        this.twitter = 'http://www.twitter.com';
	        this.youtube = 'http://www.youtube.com';
	        this.g = 'http://www.google.com/plus';

	        //
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
	    controllerAs: 'social',
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
/* 25 */
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
/* 26 */
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
	        value: function $onInit() {

	            /* Portfolio
	             ---------------------------------------------------------------------- */
	            $(document).ready(function () {
	                /*
	                 * TextTyper ver. 1.0.0
	                 */

	                (function ($) {

	                    $.fn.extend({

	                        //pass the options variable to the function
	                        TextTyper: function TextTyper(options) {

	                            //Set the default values, use comma to separate the settings, example:
	                            var defaults = {
	                                syntax: ''
	                            };

	                            var options = $.extend(defaults, options);

	                            return $(this).each(function (index, element) {
	                                var $o = options,
	                                    $txt_box = $(element),
	                                    $my_txt = $txt_box.text(),
	                                    $my_max = $my_txt.length,
	                                    $rnd_str = "!#$%&/?abcdefghijklmnopqrstuvwxyz;ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",
	                                    $set_max = $rnd_str.length,
	                                    $interval = 2,
	                                    $i = 0,
	                                    $counter = 0,
	                                    $flag = true,
	                                    $intervalID = setInterval(enterframe, 10);

	                                $txt_box.text('');
	                                $txt_box.show();

	                                function enterframe() {
	                                    if ($i < $my_max) {
	                                        if ($counter < $interval) {
	                                            $txt_box.text($my_txt.substr(0, $i));
	                                            for ($j = $i; $j < $my_max; $j++) {
	                                                $random = Math.floor(Math.random() * $set_max);
	                                                $txt_box.append($rnd_str.charAt($random));
	                                            }
	                                            $counter++;
	                                        } else {
	                                            $counter = 0;
	                                            $i++;
	                                        }
	                                    } else if ($flag) {
	                                        $txt_box.text($my_txt);
	                                        $flag = false;
	                                    }
	                                }
	                            });
	                        }
	                    });
	                })(jQuery);

	                function onWindowResize(callback) {
	                    var width = $(window).width(),
	                        height = $(window).height();

	                    $(window).resize(function () {
	                        var newWidth = $(window).width(),
	                            newHeight = $(window).height();

	                        if (newWidth !== width || newHeight !== height) {
	                            width = newWidth;
	                            height = newHeight;
	                            callback();
	                        }
	                    });
	                }

	                (function () {

	                    if (!$.fn.isotope) return;

	                    var $container = $('.items'),
	                        $win = $(window),
	                        $imgs = $('img.lazy');

	                    if ($container.length) {

	                        // Add filter event
	                        var _items_filter = function _items_filter($el, $data) {

	                            // Add all filter class
	                            $el.addClass('item-filter');

	                            // Add categories to item classes
	                            $('.item', $container).each(function (i) {
	                                var $this = $(this);
	                                $this.addClass($this.attr($data));
	                            });

	                            $el.on('click', 'a', function (e) {
	                                var $this = $(this),
	                                    $option = $this.attr($data);

	                                // Add active filter class
	                                $('.item-filter').removeClass('active-filter');
	                                $el.addClass('active-filter');
	                                $('.item-filter:not(.active-filter) li a').removeClass('active');
	                                $('.item-filter:not(.active-filter) li:first-child a').addClass('active');

	                                // Add/remove active class for this filter
	                                $el.find('a').removeClass('active');
	                                $this.addClass('active');

	                                if ($option) {
	                                    if ($option !== '*') $option = $option.replace($option, '.' + $option);
	                                    $container.isotope({ filter: $option });
	                                }

	                                e.preventDefault();
	                            });

	                            $el.find('a').first().addClass('active');
	                        };

	                        // Init filters


	                        /* Isotope
	                         ------------------------- */
	                        onWindowResize(function () {
	                            $container.isotope('layout');
	                        });
	                        $(window).load(function () {
	                            $container.isotope({
	                                itemSelector: '.item',
	                                onLayout: function onLayout() {
	                                    $win.trigger('scroll');
	                                }
	                            });
	                        });

	                        // Load images
	                        $imgs.jail({ effect: 'fadeIn' });if ($('.dd-filter-list').length) _items_filter($('.dd-filter-list'), 'data-categories');
	                        if ($('.filter-list').length) _items_filter($('.filter-list'), 'data-categories');
	                    }
	                })();
	            });
	        }
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
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventController = function () {
	    function EventController() {
	        'ngInject';

	        _classCallCheck(this, EventController);
	    }

	    _createClass(EventController, [{
	        key: '$onInit',
	        value: function $onInit() {}
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
/* 28 */
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
	        value: function $onInit() {
	            /* Countdown
	             ------------------------- */
	            if ($.fn.countdown) {

	                $('.countdown').each(function (e) {
	                    var date = $(this).data('event-date');

	                    $(this).countdown(date, function (event) {
	                        var $this = $(this);

	                        switch (event.type) {
	                            case "seconds":
	                            case "minutes":
	                            case "hours":
	                            case "days":
	                            case "weeks":
	                            case "daysLeft":
	                                $this.find('.' + event.type).html(event.value);
	                                break;

	                            case "finished":

	                                break;
	                        }
	                    });
	                });
	            }
	        }
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
/* 29 */
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
	        value: function $onInit() {
	            var settings = {
	                // Navigation height
	                nav_height: 65,

	                // Animations on mobile devices
	                animations: false,

	                // Navigation
	                auto_response: true, // Auto create responsive menu based on main navigation
	                deeplinking: true };

	            $(document).ready(function () {

	                // Add special class for IE10
	                if (Function('/*@cc_on return document.documentMode===10@*/')()) {
	                    document.documentElement.className += ' ie10';
	                }

	                /* Detect Touch Device and set animations
	                 ---------------------------------------------------------------------- */
	                (function () {

	                    if (Modernizr == 'undefined') return;

	                    if (Modernizr.touch) {

	                        $('body').addClass('touch-device');
	                    }

	                    // Set animations on mobile devices
	                    var current_width = $(window).width();

	                    if (Modernizr.touch && current_width <= 568 && !settings.animations) {
	                        settings.animations = false;
	                    } else {
	                        settings.animations = true;
	                    }

	                    // console.log(settings.animations, current_width)
	                })();

	                // function scripts(container) {

	                /*  todo: see where the toggle goes */
	                /* Toggle content
	                 ------------------------- */
	                // $('.toggle').each(function () {
	                //
	                //     /* Init */
	                //     $('.active-toggle', this).next().show();
	                //
	                //     /* List variables */
	                //     var toggle = $(this);
	                //
	                //     /* Click on Toggle Heading */
	                //     $('h4.toggle-title', this).click(function () {
	                //         if ($(this).is('.active-toggle')) {
	                //             $(this).removeClass('active-toggle');
	                //             $('.toggle-content', toggle).slideUp(400);
	                //         } else {
	                //             $(this).addClass('active-toggle');
	                //             $('.toggle-content', toggle).slideDown(400);
	                //         }
	                //         return false;
	                //     });
	                //
	                // });


	                /* TopTip - Tooltip
	                 ------------------------- */

	                // Disable Thumb slide effect on touch devices
	                // if (!Modernizr.touch) {
	                //
	                //     // Init thumb slider
	                //     $('.tip', container).topTip();
	                // }


	                /* Smooth Scroll-------- */
	                // $('.smooth-scroll', container).on('click', function (e) {
	                //     var
	                //         $id = $(this).attr('href');
	                //
	                //     // If element exists
	                //     if ($($id).length) {
	                //         $.scrollTo($id, 750, {
	                //             easing: 'swing',
	                //             offset: {top: -65, left: 0}
	                //         });
	                //     }
	                //     e.preventDefault();
	                // });


	                // }
	                //
	                // // Init scripts
	                // scripts('html');

	                (function () {
	                    if ($.fn.parallax != 'undefined') {
	                        $('.parallax').each(function () {
	                            $(this).parallax('50%', $(this).data('interia'), false);
	                        });
	                    }

	                    /* Search
	                     ------------------------- */
	                    $('#nav-search').on('click', function (e) {
	                        $('#search-wrap').slideToggle(400);
	                        e.preventDefault();
	                    });

	                    /* Fancy dropdown list
	                     ------------------------- */
	                    $(document).on('mouseenter', '.fancy-dd', function () {
	                        $(this).find('ul').stop(true, true).slideDown(600, 'easeOutExpo');
	                    });
	                    $(document).on('mouseleave', '.fancy-dd', function () {
	                        $(this).find('ul').stop(true, true).slideUp(600, 'easeOutExpo');
	                    });

	                    // Touch devices fix
	                    if (Modernizr.touch) {
	                        $('.fancy-dd').unbind('mouseenter mouseleave');
	                        $('.fancy-dd > a').click(function (e) {
	                            $(this).parent().find('ul').stop(true, true).slideToggle(600, 'easeOutExpo');
	                            e.preventDefault();
	                        });
	                    }
	                })();

	                /* Navigation
	                 ---------------------------------------------------------------------- */
	                (function () {

	                    /* Main navigation
	                     ------------------------- */
	                    var $nav = $('#nav').children('ul');

	                    // Create main navigation
	                    $('li', $nav).on('mouseenter', function () {
	                        var $this = $(this),
	                            $sub = $this.children('ul');
	                        if ($sub.length) $this.addClass('active');
	                        $sub.hide().stop(true, true).fadeIn(200);
	                    }).on('mouseleave', function () {
	                        $(this).removeClass('active').children('ul').stop(true, true).fadeOut(50);
	                    });

	                    /* Sticky navigation
	                     ------------------------- */

	                    // grab the initial top offset of the navigation
	                    var sticky_nav = $('#main-nav'),
	                        sticky_navigation_offset_top = sticky_nav.offset().top - 65 - 2,
	                        hiddenNav = false;

	                    // our function that decides weather the navigation bar should have "fixed" css position or not.
	                    var sticky_navigation = function sticky_navigation() {
	                        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

	                        // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
	                        if (scroll_top > sticky_navigation_offset_top) {
	                            sticky_nav.addClass('sticky');
	                            if (sticky_nav.hasClass('hide')) {
	                                hiddenNav = true;
	                                sticky_nav.removeClass('hide').css({
	                                    'top': '-65px'
	                                }).stop().animate({
	                                    'top': 0
	                                }, 400, 'easeOutSine');
	                            }
	                        } else {
	                            if (hiddenNav) {
	                                sticky_nav.stop().animate({
	                                    'top': '-65px'
	                                }, 200, 'easeOutSine', function () {
	                                    sticky_nav.removeClass('sticky').addClass('hide');
	                                });
	                            } else {
	                                sticky_nav.removeClass('sticky').addClass('hide');
	                            }
	                        }
	                    };

	                    // and run it again every time you scroll
	                    $(window).scroll(function () {
	                        sticky_navigation();
	                    });

	                    /* Responsive navigation
	                     ------------------------- */

	                    // Auto create responsive menu based on main navigation
	                    if (settings.auto_response) {

	                        var $responsive = $('#nav').clone();

	                        // Add class
	                        $('ul:not(:first-child)', $responsive).addClass('dl-submenu');
	                        $('> ul', $responsive).addClass('dl-menu');

	                        // Remove main nav container
	                        $responsive = $responsive.children('ul');

	                        // Put menu in nav container
	                        $('#dl-menu').append($responsive);
	                    }

	                    // Init dlmenu() plugin
	                    if ($.fn.dlmenu) $('#dl-menu').dlmenu();

	                    // if ($.fn.dlmenu) $('#dl-menu').dlmenu({
	                    // 	onLinkClick : function( el, ev ) {
	                    // 		$('#dl-menu').dlmenu('closeMenu');
	                    // 		return false;
	                    // 	}
	                    // });

	                    // Overflow fix on mobile devices
	                    $('#dl-menu ul').css('max-height', $(window).height() - 65 + "px");
	                    $(window).resize(function () {
	                        //var $height = $(window).height()-$("#main-nav").height();
	                        $('#dl-menu ul').css('max-height', $(window).height() - 65 + "px");
	                    });
	                })();
	            });

	            // HTML5 Placeholder support for non compliant browsers using jQuery.
	            (function ($) {
	                // @todo Document this.
	                $.extend($, {
	                    placeholder: {
	                        browser_supported: function browser_supported() {
	                            return this._supported !== undefined ? this._supported : this._supported = !!('placeholder' in $('<input type="text">')[0]);
	                        },
	                        shim: function shim(opts) {
	                            var config = {
	                                color: '#888',
	                                cls: 'placeholder',
	                                selector: 'input[placeholder], textarea[placeholder]'
	                            };
	                            $.extend(config, opts);
	                            return !this.browser_supported() && $(config.selector)._placeholder_shim(config);
	                        }
	                    }
	                });

	                $.extend($.fn, {
	                    _placeholder_shim: function _placeholder_shim(config) {
	                        function calcPositionCss(target) {
	                            var op = $(target).offsetParent().offset();
	                            var ot = $(target).offset();

	                            return {
	                                top: ot.top - op.top,
	                                left: ot.left - op.left,
	                                width: $(target).width()
	                            };
	                        }

	                        function adjustToResizing(label) {
	                            var $target = label.data('target');
	                            if (typeof $target !== "undefined") {
	                                label.css(calcPositionCss($target));
	                                $(window).one("resize", function () {
	                                    adjustToResizing(label);
	                                });
	                            }
	                        }

	                        return this.each(function () {
	                            var $this = $(this);

	                            if ($this.is(':visible')) {

	                                if ($this.data('placeholder')) {
	                                    var $ol = $this.data('placeholder');
	                                    $ol.css(calcPositionCss($this));
	                                    return true;
	                                }

	                                var possible_line_height = {};
	                                if (!$this.is('textarea') && $this.css('height') != 'auto') {
	                                    possible_line_height = { lineHeight: $this.css('height'), whiteSpace: 'nowrap' };
	                                }

	                                var ol = $('<label />').text($this.attr('placeholder')).addClass(config.cls).css($.extend({
	                                    position: 'absolute',
	                                    display: 'inline',
	                                    'float': 'none',
	                                    overflow: 'hidden',
	                                    textAlign: 'left',
	                                    color: config.color,
	                                    cursor: 'text',
	                                    paddingTop: $this.css('padding-top'),
	                                    paddingRight: $this.css('padding-right'),
	                                    paddingBottom: $this.css('padding-bottom'),
	                                    paddingLeft: $this.css('padding-left'),
	                                    fontSize: $this.css('font-size'),
	                                    fontFamily: $this.css('font-family'),
	                                    fontStyle: $this.css('font-style'),
	                                    fontWeight: $this.css('font-weight'),
	                                    textTransform: $this.css('text-transform'),
	                                    backgroundColor: 'transparent',
	                                    zIndex: 99
	                                }, possible_line_height)).css(calcPositionCss(this)).attr('for', this.id).data('target', $this).click(function () {
	                                    $(this).data('target').focus();
	                                }).insertBefore(this);
	                                $this.data('placeholder', ol).focus(function () {
	                                    ol.hide();
	                                }).blur(function () {
	                                    ol[$this.val().length ? 'hide' : 'show']();
	                                }).triggerHandler('blur');
	                                $(window).one("resize", function () {
	                                    adjustToResizing(ol);
	                                });
	                            }
	                        });
	                    }
	                });
	            })(jQuery);

	            jQuery(document).add(window).bind('ready load', function () {
	                if (jQuery.placeholder) {
	                    jQuery.placeholder.shim();
	                }
	            });
	        }
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
/* 30 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app.directives');

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _API = __webpack_require__(32);

	// import {DialogService} from './services/dialog.service';
	// import {ToastService} from './services/toast.service';

	angular.module('app.services').service('API', _API.APIService);
	// .service('DialogService', DialogService)
	// .service('ToastService', ToastService)

/***/ },
/* 32 */
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