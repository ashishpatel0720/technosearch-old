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





            var randomString = Math.floor((Math.random() * 10000) + 1);
    var jQueryNc; //define a local copy of jQuery variable for running in no conflict mode
    var metaViewportClone = null;
    var isSafari = false;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') !== -1) {
      if (ua.indexOf('chrome') === -1) {
        isSafari = true;
      }
    }

    function getDomainFromLink (link) {
      var matches = link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
      return matches && matches[0] ? matches[0] : 'https://www.instamojo.com/';  // domain will be null if no match is found
    }

    
    

    /**
     * Get attributes from the original link
     */
    function getButtonData(el) {
        var buttonData = {
            link: jQueryNc(el).prop('href'),
            style: jQueryNc(el).attr('data-style'),
            verb: jQueryNc(el).attr('data-text'),
            tab: jQueryNc(el).attr('data-newtab'),
            behavior: jQueryNc(el).attr('data-behavior') || jQueryNc(el).attr('data-behaviour') //due to a bug that has crept into our codebase
        };
        return buttonData;
    }

    function immoralizeThis(element) {
      var link = jQueryNc(element).prop('href');
      var updatedLink = link + (link.indexOf('?') > 0 ? '&' : '?') + 'intent=buy&checkout=remote&iframe=1&embed=form';

      var immoralProps = {
        modalClass: 'immoral-modal-new-buy-flow',
        content:
          '<div class="im-embed-overlay"></div>'+
          '<div class="iframe-container loader">'+
            '<div class="iframe-loader-wrapper">'+
              '<div class="iframe-loader"></div>'+
            '</div>'+
            '<iframe class="iframe" src="' + updatedLink + '" seamless id="imojo-rc-iframe"></iframe>'+
          '</div>',
        modalCloseButton: '',
        modalStyle: {
            'position': 'relative',
            'top': '0',
            'left': '0',
            'width': '100%',
            'max-width': '100%',
            'height': '100%',
            'transform': 'none!important',
            'margin': '0 auto',
            'background': 'transparent',
            'box-shadow': 'none',
            'overflow-y': 'visible',
        },
        modalContainerStyle: {
            'position': 'fixed',
            'top': '0px',
            'display': 'block',
            'left': '0px',
            'height': '100%',
            'width': '100%',
            'background': 'transparent',
            'backface-visibility': 'hidden',
            '-webkit-overflow-scrolling': 'touch',
            'overflow-y': 'visible',
        },
      };

      // NOT iOS devices
      if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // needed for overlay to scroll with screen on Android devices
        immoralProps.modalContentStyle = {
          'position': 'fixed',
          'width': '100%',
          'height': '100%'
        };
      }

      jQuery(element).immoral(immoralProps);

      jQueryNc(element).on('click', function () {
        var domain = getDomainFromLink(link);
        /**
         * Safari has a strict 3rd-party cookie policy
         * Scenario - if the buyer has never opened instamojo.com,
         * and visits merchant website for remote checkout,
         * safari would not let Instamojo set a cookie on merchant's website
         * due to which, our CSRF token check fails.
         * Fix - Open instamojo.com to set cookie in parallel
         */
        if (isSafari) {
          var win = window.open(
            domain + '_blank/',
            null,
            'height=10,width=10,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no'
          );

          // a poor attempt to hide the window we just opened
          win.blur();
        }

        // http://stackoverflow.com/a/8849807/721084
        var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
        var eventer = window[eventMethod];
        var messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

        var $iframe = jQueryNc('#imojo-rc-iframe');
        // boolean to keep track of when iframe has been shown
        var isIframeShown = false;

        function iframeIsLoaded (isNewBrowser) {
          $iframe.closest('.iframe-container').removeClass('loader');

          /**
           * `isNewBrowser` checks for existence of eventer
           * Payments app sends back a `onRequestClose` on `onClose`
           * no point adding the meta tag if we can't remove it
           */
          if (isNewBrowser) {
            try {
              metaViewportClone = jQueryNc('meta[name="viewport"]').clone()[0];
              if (metaViewportClone) {
                jQueryNc('meta[name="viewport"]').remove();
              }

              var metaViewport = document.createElement('meta');
              metaViewport.name = 'viewport';
              metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
              metaViewport.id = 'im-embed-viewport';
              document.head.appendChild(metaViewport);
            } catch (e) {};
          }

          if (window.innerWidth < 640) {
            $iframe.closest('.immoral-modal-container').css('position', 'absolute');
            window.scrollTo(0, 0);
          }
          isIframeShown = true;
        }

        function restoreOriginalMetaViewport () {
          try {
            document.getElementById('im-embed-viewport').remove();
            if (metaViewportClone) {
              document.head.appendChild(metaViewportClone);
            }
          } catch (e) {};
        }

        // Listen to message from child window
        eventer(messageEvent, function (e) {
          var key = e.message ? 'message' : 'data';
          var data = e[key];

          if (!isIframeShown) {
            if (data === 'onRequestShow') {
              iframeIsLoaded(true);
            }
          }

          if (data === 'onRequestClose') {
            restoreOriginalMetaViewport();
          }

        }, false);

        $iframe.load(function () {
          if (!isIframeShown) {
            iframeIsLoaded(false);
          }
        });
      });
    }

    function immoralize(elements) {
        if (!jQuery.fn.immoral) {
            return jQuery.getScript('https://d2xwmjc4uy2hr5.cloudfront.net/im-embed/immoral.min.js', function() {
                return jQueryNc(elements).each(function() {
                    return immoralizeThis(this);
                });
            });
        } else {
            return jQueryNc(elements).each(function() {
                return immoralizeThis(this);
            });
        }
    }

    /**
     * Converts a[rel="im-checkout"] to button which opens a modal
     */
    function convertLinkToButton(element, checkoutButtonData) {
        var changeString, checkoutButton, linkParts, randomId, username;
        randomId = Math.floor((Math.random() * 100) + 1);
        changeString = '<div class="im-checkout btn-' + randomId + '"><a href="' + checkoutButtonData['link'] + '" class="im-checkout-btn"';
        if (checkoutButtonData['tab'] === 'false') {
            changeString += '>';
        } else {
            changeString += ' target="_blank">';
        }
        if (checkoutButtonData['verb'] !== '') {
            changeString += checkoutButtonData['verb'].replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
              return ("&#"+i.charCodeAt(0)+";");
            });
        } else {
            changeString += 'Register';
        }
        changeString += '</a></div>';
        jQueryNc(element).replaceWith(changeString);
        checkoutButton = jQueryNc('.im-checkout.btn-' + randomId).find('a[href="' + checkoutButtonData['link'] + '"].im-checkout-btn');
        linkParts = checkoutButtonData['link'].replace(/\/$/, '').split('/');
        username = linkParts[3];
        if (username.charAt(0) === '@') {
          // Instapay/RAP/Link
          username = username.replace('@', '');
        }
        // grab the host from the link

        var domain = getDomainFromLink(checkoutButtonData['link']);

        jQueryNc.get(domain + username + '/remote/auth.json', function(data) {
            var userSettings = jQueryNc.parseJSON(data);
            // if (userSettings['im_branding']) {
            //     addBrandingToButton(checkoutButton);
            // }

            if (userSettings['enable_remote_checkout'] === true && checkoutButtonData['behavior'] !== 'link') {
                jQueryNc(checkoutButton).attr('rel', 'modal');
                return immoralize(checkoutButton);
            }
        });

        
        return checkoutButton;
    }

    function embedify() {
        //override jQuery with local variable
        jQueryNc = jQuery.noConflict(true);
        //assign the jQueryNc to window's jQuery if not assigned already as immoral needs this
        window.jQuery = window.jQuery || jQueryNc;
        return jQueryNc(document).ready(function() {
            jQueryNc('a[rel="im-checkout"]').each(function(index, checkoutLink) {
                var checkoutButtonData = getButtonData(checkoutLink);
                convertLinkToButton(checkoutLink, checkoutButtonData);
            });
        });
    }


    /* Expose the functionality to the exterior world */
    window.Imbedify = window.Imbedify || {};
    window.Imbedify.run = function() {
        return embedify();
    };

    var v = '1.11.1';
    function isCurrentjQueryOlderThan(required) {
        var current = window.jQuery.fn.jquery;
        var currentSplit = current.split('.').map(function(ele) {return parseInt(ele);});
        var requiredSplit = required.split('.').map(function(ele) {return parseInt(ele);});
        if (currentSplit[0] === requiredSplit[0]) {
            //1.1.11 1.7.4
            if (currentSplit[1] === requiredSplit[1]) {
                //1.11.1 1.11.0
                if (currentSplit[2] === requiredSplit[2]) {
                    //1.11.1 1.11.1
                    return true;
                } else {
                    return currentSplit[2] != requiredSplit[2];
                }
            } else {
                return currentSplit[1] != requiredSplit[1];
            }
        } else {
            return currentSplit[0] != requiredSplit[0];
        }
    }
        embedify();





    }
}

export const NavbarComponent = {
    templateUrl: './views/app/components/navbar/navbar.component.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindings: {}
}
