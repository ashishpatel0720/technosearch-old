(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/contact/contact.component.html',
    '\n' +
    '<!-- ############################# contact ############################# -->\n' +
    '<section id="contact" class="section">\n' +
    '\n' +
    '\n' +
    '    <!-- ############ section container ############ -->\n' +
    '    <div class="section-container container clearfix">\n' +
    '\n' +
    '        <hr class="divider">\n' +
    '        <div class="row clearfix">\n' +
    '            <h2 class="heading-m text-center">Send me a message</h2>\n' +
    '            <span class="sub-heading text-center">Please fill in your contact details</span>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- contact form -->\n' +
    '        <form action="http://themes.rascals.eu/spectra_html/plugins/contact-form.php" method="post" class="form contact-form">\n' +
    '            <div class="row clearfix">\n' +
    '                <div class="col-1-3">\n' +
    '                    <label for="contact-name"><strong>Name</strong> (required)</label>\n' +
    '                    <input type="text" name="name" value="" id="contact-name" required>\n' +
    '                </div>\n' +
    '                <div class="col-1-3">\n' +
    '                    <label for="contact-email"><strong>Email</strong> (required)</label>\n' +
    '                    <input type="email" name="email" value="" id="contact-email" required>\n' +
    '                </div>\n' +
    '                <div class="col-1-3 last">\n' +
    '                    <label for="contact-subject"><strong>Subject</strong></label>\n' +
    '                    <input type="text" name="subject" value="" id="contact-subject">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row clearfix">\n' +
    '                <div class="col-1-1">\n' +
    '                    <label for="contact-message"><strong>Your Message</strong> (required)</label>\n' +
    '                    <textarea name="message" id="contact-message" cols="88" rows="6" required></textarea>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="hidden">\n' +
    '                <label for="contact-spam-check">Do not fill out this field this is spam check.</label>\n' +
    '                <input name="anty_spam" type="text" value="" id="contact-spam-check" />\n' +
    '            </div>\n' +
    '            <input type="submit" value="Submit Message" class="large">\n' +
    '            <div class="clear"></div>\n' +
    '        </form>\n' +
    '        <!-- /contact form -->\n' +
    '\n' +
    '    </div>\n' +
    '    <!-- /section container -->\n' +
    '\n' +
    '</section>\n' +
    '<!-- /contact -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/countdown/countdown.component.html',
    '<!-- ############################# upcoming event ############################# -->\n' +
    '<section id="upcoming-event" class="event-countdown">\n' +
    '    <!-- container -->\n' +
    '    <div class="container clearfix">\n' +
    '        <!-- ############ content header ############ -->\n' +
    '        <header class="content-header">\n' +
    '            <h6 class="upcoming-event">Coming soon</h6>\n' +
    '            <h2 class="content-title">Technosearch,Manit</h2>\n' +
    '            <span class="sub-heading">Bhopal,India</span>\n' +
    '        </header>\n' +
    '        <!-- /content header -->\n' +
    '        <!-- countdown -->\n' +
    '        <div class="countdown" >\n' +
    '            <timer countdown="vm.countTime" interval="1000">\n' +
    '                <div class="days" data-label="Days">{{ddays}}</div>\n' +
    '                <div class="hours" data-label="Hours">{{hhours}}</div>\n' +
    '                <div class="minutes" data-label="Minutes">{{mminutes}}</div>\n' +
    '                <div class="seconds" data-label="Seconds">{{sseconds}}</div>\n' +
    '            </timer>\n' +
    '        </div>\n' +
    '        <!-- /countdown -->\n' +
    '    </div>\n' +
    '    <!-- /container -->\n' +
    '</section>\n' +
    '<!-- /upcoming event -->\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/event/event.component.html',
    '\n' +
    '<div class="container clearfix">\n' +
    '\n' +
    '    <!-- row -->\n' +
    '    <div class="row clearfix">\n' +
    '        <!-- column -->\n' +
    '        <div class="col-1-2">\n' +
    '            <h2>Event Details</h2>\n' +
    '            <p>\n' +
    '                Sed luctus neque ac sem aliquam imperdiet. In quis porttitor tortor. Pellentesque scelerisque quam et quam pretium imperdiet. Aenean scelerisque tincidunt dolor et consectetur.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu felis tellus, sit amet elementum est. Proin posuere turpis lectus, eget vulputate erat. Nunc eget metus in magna vulputate elementum sed ut leo. Mauris at mauris purus, ut laoreet eros.</p>\n' +
    '            <p>\n' +
    '                Sed luctus neque ac sem aliquam imperdiet. In quis porttitor tortor. Pellentesque scelerisque quam et quam pretium imperdiet. Aenean scelerisque tincidunt dolor et consectetur.\n' +
    '            </p>\n' +
    '            <blockquote>\n' +
    '                <p>\n' +
    '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu felis tellus, sit amet elementum est. Proin posuere turpis lectus, eget vulputate erat. Nunc eget metus in magna vulputate elementum sed ut leo. Mauris at mauris purus, ut laoreet eros.\n' +
    '                </p>\n' +
    '            </blockquote>\n' +
    '            <!-- large button -->\n' +
    '            <a class="btn large alignleft"><span class="button-icon icon-cart-3"></span> Buy Tickets</a>\n' +
    '        </div>\n' +
    '        <!-- /column -->\n' +
    '        <!-- column -->\n' +
    '        <div class="col-1-2 last">\n' +
    '            <h2>Promotion</h2>\n' +
    '            <!-- image poster -->\n' +
    '            <img src="placeholders/event-poster-01-520x700.jpg" alt="event poster">\n' +
    '        </div>\n' +
    '        <!-- /column -->\n' +
    '    </div>\n' +
    '    <!-- /row -->\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/event-list/event-list.component.html',
    '<!-- ############################# events ############################# -->\n' +
    '<section id="events" class="section">\n' +
    '\n' +
    '\n' +
    '    <!-- ############ event container loaded via ajax ############ -->\n' +
    '    <div id="event" class="ajax-holder"></div>\n' +
    '    <!-- /event container -->\n' +
    '\n' +
    '    <!-- ############ events list ############ -->\n' +
    '    <!-- todo: add the events list in another page -->\n' +
    '    <ul id="events-list">\n' +
    '        <!-- event -->\n' +
    '        <li style="background-image: url(placeholders/event-01-1920x573.jpg);">\n' +
    '            <div class="inner">\n' +
    '                <span class="event-date">08/23</span>\n' +
    '                <h2><a href="event01.html" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Amsterdam Dance</a></h2>\n' +
    '                <span class="event-location">Amsterdam, Netherlands</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <!-- /event -->\n' +
    '        <!-- event -->\n' +
    '        <li style="background-image: url(placeholders/event-02-1920x573.jpg);">\n' +
    '            <div class="inner">\n' +
    '                <span class="event-date">09/02</span>\n' +
    '                <h2><a href="event02.html" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Bacardi Original Bar</a></h2>\n' +
    '                <span class="event-location">Budapest (budapest), Hungary</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <!-- /event -->\n' +
    '        <!-- event -->\n' +
    '        <li style="background-image: url(placeholders/event-03-1920x573.jpg);">\n' +
    '            <div class="inner">\n' +
    '                <span class="event-date">09/18</span>\n' +
    '                <h2><a href="event03.html" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Luxorlive</a></h2>\n' +
    '                <span class="event-location">Arnhem, Netherlands</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <!-- /event -->\n' +
    '        <!-- event -->\n' +
    '        <!--<li style="background-image: url(placeholders/event-04-1920x573.jpg);">-->\n' +
    '            <!--<div class="inner">-->\n' +
    '                <!--<span class="event-date">10/30</span>-->\n' +
    '                <!--<h2><a href="event04.html" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Papagayo Beach Club</a></h2>-->\n' +
    '                <!--<span class="event-location">Santa Cruz De Tenerife, Spain</span>-->\n' +
    '            <!--</div>-->\n' +
    '        <!--</li>-->\n' +
    '        <!-- /event -->\n' +
    '    </ul>\n' +
    '    <!-- /events list -->\n' +
    '\n' +
    '</section>\n' +
    '<!-- /events -->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/event-table/event-table.component.html',
    '<div class="container clearfix">\n' +
    '\n' +
    '    <h2>Tour dates</h2>\n' +
    '\n' +
    '    <!-- ############ events table ############ -->\n' +
    '    <!-- tabs -->\n' +
    '    <div class="tabs-wrap">\n' +
    '        <!-- tabs navigation -->\n' +
    '        <ul class="tabs">\n' +
    '            <li><a href="#" class="active-tab">Feature Events</a></li>\n' +
    '            <li><a href="#">Previous Dates</a></li>\n' +
    '        </ul>\n' +
    '        <!-- /tabs navigation -->\n' +
    '        <!-- tab content -->\n' +
    '        <div class="tab-content" style="display: block;">\n' +
    '            <!-- future events table -->\n' +
    '            <table class="layout display responsive-table">\n' +
    '                <thead>\n' +
    '                <tr>\n' +
    '                    <th>Date</th>\n' +
    '                    <th colspan="2">Event</th>\n' +
    '                </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/15</td>\n' +
    '                    <td class="table-name">Luxorlive<a href="#" class="event-location">Arnhem, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/17</td>\n' +
    '                    <td class="table-name">Space<a href="#" class="event-location">Ibiza, Spain</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/19</td>\n' +
    '                    <td class="table-name">Bacardi Original Bar<a href="#" class="event-location">Budapest (budapest), Hungary</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a class="buy-tickets sold" title="Buy Tickets">Sold Out</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">09/20</td>\n' +
    '                    <td class="table-name">Escape<a href="#" class="event-location">Amsterdam, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">10/07</td>\n' +
    '                    <td class="table-name">\n' +
    '                        Papagayo Beach Club<a href="#" class="event-location">Santa Cruz De Tenerife, Spain</a>\n' +
    '                    </td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">10/15</td>\n' +
    '                    <td class="table-name">Luxorlive<a href="#" class="event-location">Arnhem, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">10/23</td>\n' +
    '                    <td class="table-name">Space<a href="#" class="event-location">Ibiza, Spain</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">11/13</td>\n' +
    '                    <td class="table-name">Bacardi Original Bar<a href="#" class="event-location">Budapest (budapest), Hungary</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a class="buy-tickets sold" title="Buy Tickets">Sold Out</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">11/23</td>\n' +
    '                    <td class="table-name">Escape<a href="#" class="event-location">Amsterdam, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">12/02</td>\n' +
    '                    <td class="table-name">\n' +
    '                        Papagayo Beach Club<a href="#" class="event-location">Santa Cruz De Tenerife, Spain</a>\n' +
    '                    </td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '            <!-- /end future events table -->\n' +
    '        </div>\n' +
    '        <!-- /tab content -->\n' +
    '\n' +
    '        <!-- tab content -->\n' +
    '        <div class="tab-content">\n' +
    '            <!-- past events table-->\n' +
    '            <table class="layout display responsive-table">\n' +
    '                <thead>\n' +
    '                <tr>\n' +
    '                    <th>Date</th>\n' +
    '                    <th colspan="2">Event</th>\n' +
    '                </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                <tr>\n' +
    '                    <td class="table-date">01/21</td>\n' +
    '                    <td class="table-name">Luxorlive<a href="#" class="event-location">Arnhem, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets invisible" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">02/18</td>\n' +
    '                    <td class="table-name">Space<a href="#" class="event-location">Ibiza, Spain</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">03/12</td>\n' +
    '                    <td class="table-name">Bacardi Original Bar<a href="#" class="event-location">Budapest (budapest), Hungary</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">06/22</td>\n' +
    '                    <td class="table-name">Escape<a href="#" class="event-location">Amsterdam, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">06/30</td>\n' +
    '                    <td class="table-name">\n' +
    '                        Papagayo Beach Club<a href="#" class="event-location">Santa Cruz De Tenerife, Spain</a>\n' +
    '                    </td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">07/02</td>\n' +
    '                    <td class="table-name">Luxorlive<a href="#" class="event-location">Arnhem, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">07/22</td>\n' +
    '                    <td class="table-name">Space<a href="#" class="event-location">Ibiza, Spain</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/11</td>\n' +
    '                    <td class="table-name">Bacardi Original Bar<a href="#" class="event-location">Budapest (budapest), Hungary</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/13</td>\n' +
    '                    <td class="table-name">Escape<a href="#" class="event-location">Amsterdam, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '            <!-- /past events table -->\n' +
    '        </div>\n' +
    '        <!-- /tab content -->\n' +
    '    </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/footer/footer.component.html',
    '<div id="footer">\n' +
    '    <div class="container">\n' +
    '        <div id="copyrights">\n' +
    '            <img src="placeholders/logo-footer.png" class="aligncenter" alt="footer-logo">\n' +
    '            &copy; 2016 TechnoSearch. All Rights Reserved.\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/gallery/gallery.component.html',
    '<!-- ############################# gallery section ############################# -->\n' +
    '<section id="gallery">\n' +
    '\n' +
    '    <!-- ############ ajax content (This content will be loaded by ajax) ############ -->\n' +
    '    <div id="ajax-content" class="page-container">\n' +
    '\n' +
    '        <!-- ############ container ############ -->\n' +
    '        <div class="container clearfix">\n' +
    '\n' +
    '            <!-- ############ content header ############ -->\n' +
    '            <header class="content-header">\n' +
    '                <h1 class="content-title">Gallery</h1>\n' +
    '                <span class="sub-heading">Previous Techno Pictures</span>\n' +
    '                <hr class="content-line">\n' +
    '            </header>\n' +
    '            <!-- /content header -->\n' +
    '\n' +
    '            <!-- row -->\n' +
    '            <div class="row clearfix">\n' +
    '\n' +
    '                <!-- ############ masonry ############ -->\n' +
    '                <div class="masonry clearfix">\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-2 height-1-2">\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="thumb imagebox" data-group="amsterdam-2013-10-12" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Amsterdam Festival <span>23 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-01-544x544.jpg" alt="Gallery image title">\n' +
    '                            <!-- badge -->\n' +
    '                            <span class="badge new">NEW</span>\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-2 height-1-2">\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="thumb imagebox" data-group="bacardi-2013-10-12" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Bacardi Original Bar <span>12 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-02-544x544.jpg" alt="Gallery image title">\n' +
    '                            <!-- badge -->\n' +
    '                            <span class="badge new">NEW</span>\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-2 height-1-2">\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="thumb imagebox" data-group="sepang-2013-10-12" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Sepang International Circuit <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-03-544x544.jpg" alt="Gallery image title">\n' +
    '                            <!-- badge -->\n' +
    '                            <span class="badge new">NEW</span>\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="thumb imagebox" data-group="gal01" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-01-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="thumb imagebox" data-group="gal02" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-02-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="thumb imagebox" data-group="gal03" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-03-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="thumb imagebox" data-group="gal04" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-04-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="thumb imagebox" data-group="gal05" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-03-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="thumb imagebox" data-group="gal06" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-04-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="thumb imagebox" data-group="gal07" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-01-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="thumb imagebox" data-group="gal08" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-02-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                </div>\n' +
    '                <!-- /masonry -->\n' +
    '            </div>\n' +
    '            <!-- /row -->\n' +
    '\n' +
    '            <div class="clear"></div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '        <!-- /container -->\n' +
    '    </div>\n' +
    '    <!-- /ajax contant -->\n' +
    '</section>\n' +
    '<!-- /404 section -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/events/events.component.html',
    '<section id="portfolio" class="section">\n' +
    '    <div id="portfolio-header" class="section-header parallax clearfix" style="background-image: url(placeholders/release-header-1920x1000.jpg)" data-interia="0.1">\n' +
    '        <div class="overlay"></div>\n' +
    '        <div class="container clearfix">\n' +
    '            <h6 class="section-sub-heading">MORE THAN 30+ EVENTS</h6>\n' +
    '            <h2 class="section-heading">AMAZING EVENTS</h2>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div id="portfolio-main-filter" class="filter">\n' +
    '        <ul class="filter-list item-filter active-filter clearfix">\n' +
    '            <li class="filter-label"><span class="label">Events</span></li>\n' +
    '            <li><a data-filter="*">All</a></li>\n' +
    '            <li><a data-filter=".robitics">Robotics</a></li>\n' +
    '            <li><a data-filter=".coding">Coding</a></li>\n' +
    '            <li><a data-filter=".departmental">Departmental</a></li>\n' +
    '            <li><a data-filter=".aerodrome">Aerodrome</a></li>\n' +
    '            <li><a data-filter=".literary">Literary</a></li>\n' +
    '            <li><a data-filter=".strategical">Strategical</a></li>\n' +
    '            <li><a data-filter=".fun">Social</a></li>\n' +
    '\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div id="portfolio-items" class="fullwidth items clearfix grid">\n' +
    '        <div class="item coding" data-filter="coding">\n' +
    '            <a href="project01.html" class="thumb project-thumb project-by-ajax tip" >\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Awesome Bass <span>(Big image intro)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <!-- image -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release01-360x360.jpg" alt="Release image" >\n' +
    '                <!-- badge -->\n' +
    '                <span class="badge new">NEW</span>\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Awesome Bass</span>\n' +
    '                    <span class="tip-genre">NEW / Glitch Hop</span>\n' +
    '                    <span class="tip-date">2013-04-05</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item fun" data-filter="fun">\n' +
    '            <a href="project02.html" class="thumb project-thumb project-by-ajax tip">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Tomorrow\'s Harvest <span>(Vimeo video)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release02-360x360.jpg" alt="Release image" >\n' +
    '                <!-- badge -->\n' +
    '                <span class="badge new">NEW</span>\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Tomorrow\'s Harvest</span>\n' +
    '                    <span class="tip-genre">NEW / Drum and Bass</span>\n' +
    '                    <span class="tip-date">2013-01-23</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item" data-filter="fun">\n' +
    '            <a href="project03.html" class="thumb project-thumb project-by-ajax tip" >\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Atmosphere <span>(Image slider+soundcloud)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release03-360x360.jpg" alt="Release image" >\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Atmosphere</span>\n' +
    '                    <span class="tip-genre">Drum and Bass / UK Funky</span>\n' +
    '                    <span class="tip-date">2012-12-23</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item" data-filter="literary">\n' +
    '            <a href="project04.html" class="thumb project-thumb project-by-ajax tip">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Center of The Universe <span>(Full width image slider)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release04-360x360.jpg" alt="Release image" >\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Center of The Universe</span>\n' +
    '                    <span class="tip-genre">Drum and Bass / Glitch Hop</span>\n' +
    '                    <span class="tip-date">2012-10-07</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item" data-filter="literary">\n' +
    '            <a href="project05.html" class="thumb project-thumb project-by-ajax tip">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Faster Than Light EP <span>(Masonry boxes)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release05-360x360.jpg" alt="Release image" >\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Faster Than Light EP</span>\n' +
    '                    <span class="tip-genre">Breakbeat / Dubstep</span>\n' +
    '                    <span class="tip-date">2012-08-07</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item" data-filter="departmental">\n' +
    '            <a href="https://soundcloud.com/ukfmusic/ukf-music-podcast-2-physical-in-the-mix" class="thumb project-thumb tip fap-single-track">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Back To The Acid <span>(Play Soundcloud podcast)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release06-360x360.jpg" alt="Release image">\n' +
    '                <!-- badge -->\n' +
    '                <span class="badge free">FREE</span>\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Back To The Acid</span>\n' +
    '                    <span class="tip-genre">Breakbeat / Dubstep</span>\n' +
    '                    <span class="tip-date">2012-07-22</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item" data-filter="departmental">\n' +
    '            <a href="https://soundcloud.com/chinch-jack/sets/jungle-sets" class="thumb project-thumb tip fap-single-track">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Skylarking - Remixes <span>(Play Soundcloud playlist)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release07-360x360.jpg" alt="Release image" >\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Skylarking - Remixes</span>\n' +
    '                    <span class="tip-genre">UK Funky / Glitch Hop</span>\n' +
    '                    <span class="tip-date">2012-07-16</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item" data-filter="aerodrome">\n' +
    '            <a href="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F2999711&amp;color=ff7700&amp;auto_play=false&amp;show_artwork=true" class="thumb project-thumb mediabox tip" data-width="auto" data-height="450">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Defiant Order <span>(Open Soundcloud in lightbox)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release08-360x360.jpg" alt="Release image">\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Defiant Order</span>\n' +
    '                    <span class="tip-genre">Breakbeat / Glitch Hop / Dubstep</span>\n' +
    '                    <span class="tip-date">2012-05-07</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item" data-filter="strategical aerodrome">\n' +
    '            <a href="placeholders/cover01-big.jpg" class="thumb project-thumb tip imagebox" title="Album Cover">\n' +
    '                <div class="inner">\n' +
    '                    <h6>Things Can Only Get Better <span>(Open image in lightbox)</span></h6>\n' +
    '                </div>\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release09-360x360.jpg" alt="Release image">\n' +
    '                <!-- badge -->\n' +
    '                <span class="badge free">FREE</span>\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Things Can Only Get Better</span>\n' +
    '                    <span class="tip-genre">Drum and Bass / UK Funky</span>\n' +
    '                    <span class="tip-date">2012-04-11</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="item" data-filter="strategical">\n' +
    '            <a href="http://player.vimeo.com/video/47224685?byline=0&amp;portrait=0&amp;color=ff9933" class="thumb project-thumb tip mediabox" data-width="auto" data-height="auto">\n' +
    '                <div class="inner">\n' +
    '                    <h6>Numbers / Limelight <span>(Open video in lightbox)</span></h6>\n' +
    '                </div>\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release10-360x360.jpg" alt="Release image">\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Numbers / Limelight</span>\n' +
    '                    <span class="tip-genre">Breakbeat / UK Funky</span>\n' +
    '                    <span class="tip-date">2012-03-11</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/map/map.component.html',
    '<!-- ############ GMap ############ -->\n' +
    '<div id="contact-map" class="gmap clearfix" data-address="Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia" data-zoom="16" data-zoom_control="true" data-scrollwheel="false"></div>\n' +
    '<!-- /gmap -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/navbar/navbar.component.html',
    '<!-- ############################# navigation section ############################# -->\n' +
    '\n' +
    '<section id="main-nav-wrapper">\n' +
    '    <!-- main navigation -->\n' +
    '    <div id="main-nav">\n' +
    '\n' +
    '        <!-- ############ search ############ -->\n' +
    '        <!--<div id="search-wrap" style="display:none">-->\n' +
    '            <!--<input type="text" placeholder="Search and hit enter..." name="s" id="search" />-->\n' +
    '        <!--</div>-->\n' +
    '        <!-- /search -->\n' +
    '\n' +
    '        <!-- navigation container -->\n' +
    '        <div class="nav-container">\n' +
    '\n' +
    '            <!-- ############ logo ############ -->\n' +
    '            <a ui-sref="app.home" id="logo" class="smooth-scroll">\n' +
    '                <img src="placeholders/logo.png" alt="Logo">\n' +
    '            </a>\n' +
    '            <!-- /logo -->\n' +
    '\n' +
    '            <!-- ############ icon navigation ############ -->\n' +
    '            <nav id="icon-nav">\n' +
    '                <ul>\n' +
    '                    <!-- todo show the up arrow button only on the home page -->\n' +
    '                    <li><a href="#" scroll-to="top" id="nav-up" class="smooth-scroll"><span class="icon-arrow-up-2"></span></a></li>\n' +
    '                    <!--<li><a ui-sref="app.search" id="nav-search"><span class="icon-search"></span></a></li>-->\n' +
    '                </ul>\n' +
    '            </nav>\n' +
    '            <!-- /icon navigation -->\n' +
    '\n' +
    '            <!-- ############ navigation ############ -->\n' +
    '            <nav id="nav" class="one-page-nav">\n' +
    '                <ul>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.events">Events</a>\n' +
    '                        <ul>\n' +
    '                            <li>\n' +
    '                                <a ui-sref="app.competitions">Competitions</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a ui-sref="app.workshops">Workshops</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a ui-sref="app.guestlectures">Guest Lectures</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a ui-sref="app.pronites">Pro-Nites</a>\n' +
    '                            </li>\n' +
    '\n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.account">Account</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.gallery">Gallery</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.team">Team</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.sponsors">Sponsors</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.contact">Contact</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </nav>\n' +
    '            <!-- /navigation -->\n' +
    '\n' +
    '            <!-- responsive navigation -->\n' +
    '            <div id="dl-menu" class="dl-menuwrapper one-page-nav">\n' +
    '                <button class="dl-trigger">Open Menu</button>\n' +
    '                <ul class="dl-menu" style="max-height: 438px;">\n' +
    '                    <li>\n' +
    '                        <a href="#">Features</a>\n' +
    '                        <ul class="dl-submenu" style="max-height: 438px;"><li class="dl-back"><a href="#">back</a></li>\n' +
    '                            <li>\n' +
    '                                <a href="grid.html" class="page-by-ajax" data-ajax-options="{&quot;target&quot; :&quot;#custom-page&quot;}">Grid</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="masonry.html" class="page-by-ajax" data-ajax-options="{&quot;target&quot; :&quot;#custom-page&quot;}">Masonry Boxes</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="gallery.html" class="page-by-ajax" data-ajax-options="{&quot;target&quot; :&quot;#custom-page&quot;}">Gallery</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="elements.html" class="page-by-ajax" data-ajax-options="{&quot;target&quot; :&quot;#custom-page&quot;}">Elements</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="videos.html" class="page-by-ajax" data-ajax-options="{&quot;target&quot; :&quot;#custom-page&quot;}">Videos</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="#newsletter">Newsletter</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="#">Sub Menu</a>\n' +
    '                                <ul class="dl-submenu" style="max-height: 438px;"><li class="dl-back"><a href="#">back</a></li>\n' +
    '                                    <li>\n' +
    '                                        <a href="#">Level 2.1</a>\n' +
    '                                    </li>\n' +
    '                                    <li>\n' +
    '                                        <a href="#">Level 2.2</a>\n' +
    '                                    </li>\n' +
    '                                    <li>\n' +
    '                                        <a href="#">Level 2.3</a>\n' +
    '                                    </li>\n' +
    '                                </ul>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '                    <li class="current">\n' +
    '                        <a href="#portfolio">Releases</a>\n' +
    '                    </li>\n' +
    '                    <li class="">\n' +
    '                        <a href="#events">Events</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="#bio">Bio</a>\n' +
    '                    </li>\n' +
    '                    <li class="">\n' +
    '                        <a href="#contact">Contact</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '            <!-- /responsive navigation -->\n' +
    '        </div>\n' +
    '        <!-- /navigation container -->\n' +
    '    </div>\n' +
    '    <!-- /main navigation -->\n' +
    '</section>\n' +
    '<!-- /navigation section -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/social/social.component.html',
    '\n' +
    '<!-- ############################# social ############################# -->\n' +
    '<section id="social">\n' +
    '    <div class="flex-col-1-4"><a href="{{social.twitter}}" target="__blank" class="social-twitter"><span class="icon-twitter"></span>Twitter</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="{{social.fb}}" target="__blank" class="social-facebook"><span class="icon-facebook"></span>Facebook</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="{{social.youtube}}" target="__blank" class="social-youtube"><span class="icon-youtube"></span>Youtube</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="{{social.g}}" target="__blank" class="social-google-plus"><span class="icon-google-plus"></span>Google Plus</a></div>\n' +
    '</section>\n' +
    '<!-- /social -->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/sponsors/sponsors.component.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/team/team.component.html',
    '\n' +
    '<div class="container">\n' +
    '    <div class="at-section">\n' +
    '        <div class="at-section__title">The Team</div>\n' +
    '    </div>\n' +
    '    <div data-column=\'3\' class="at-grid">\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Aaron Rossi</div>\n' +
    '                <div class="at-user__title">CEO &amp; Co-Founder</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Marco Gomez</div>\n' +
    '                <div class="at-user__title">Co-Founder, Creative Director</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/boheme/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Brad Joe</div>\n' +
    '                <div class="at-user__title">Office Manager</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Mitch Petty</div>\n' +
    '                <div class="at-user__title">Lead Developer</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Philip Satemburgo</div>\n' +
    '                <div class="at-user__title">Community Manager</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marcogomes/128.jpg"/></div>\n' +
    '                <div class="at-user__name">George Petty</div>\n' +
    '                <div class="at-user__title">Lead Designer</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Petty Rossi</div>\n' +
    '                <div class="at-user__title">Brand Designer</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Mitch Rossi</div>\n' +
    '                <div class="at-user__title">New Business</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/tonychester/128.jpg"/></div>\n' +
    '                <div class="at-user__name">George Mitch</div>\n' +
    '                <div class="at-user__title">UX Designer</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/welcome/welcome.component.html',
    '\n' +
    '<section id="intro" class="intro-resize parallax clearfix" style="background-image: url(placeholders/intro-image-1920x1080.jpg)">\n' +
    '    <!-- animated bg -->\n' +
    '    <div class="intro-bg"></div>\n' +
    '    <!-- container -->\n' +
    '    <div class="container">\n' +
    '        <img id="intro-logo" src="placeholders/intro-logo.png" alt="Logo">\n' +
    '        <div id="ticker-wrap">\n' +
    '            <ul ticker id="ticker" timing="3000">\n' +
    '                <li style=\'font-size:0.5em\' ng-repeat="item in vm.tickerItems" class="item-{{$index}}">\n' +
    '                    {{item.title}}\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <a id="intro-button" class="smooth-scroll" href="#" scroll-to="upcoming-event" ><span>ENTER</span></a>\n' +
    '        <a id="scroll-arrows" class="smooth-scroll" href="#" scroll-to="upcoming-event"><img src="img/scroll-arrows.png" alt="scroll down"></a>\n' +
    '    </div>\n' +
    '    <!-- /container -->\n' +
    '</section>\n' +
    '<!--/intro-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/account/account.page.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/contact/contact.page.html',
    '<!--<navbar></navbar>-->\n' +
    '<!-- ############ section container ############ -->\n' +
    '<div class="section-container container clearfix">\n' +
    '\n' +
    '    <!-- ############ content header ############ -->\n' +
    '    <header class="content-header">\n' +
    '        <h1 class="content-title">Get in Touch</h1>\n' +
    '        <span class="sub-heading">Do not hesitate to booking me!</span>\n' +
    '        <hr class="content-line">\n' +
    '    </header>\n' +
    '    <!-- /content header -->\n' +
    '\n' +
    '    <div class="row clearfix">\n' +
    '        <p>Cras venenatis justo mi, non posuere enim aliquet malesuada. Nullam orci sem, adipiscing id rutrum et, blandit quis lorem. Phasellus lacus orci, cursus vitae mi eget, sagittis congue elit. Donec ac tincidunt tortor. Duis vel neque eleifend odio hendrerit consequat sed vel massa. Praesent tempor libero quis tincidunt fringilla. Aliquam congue, neque et aliquam eleifend, lacus diam aliquet urna, in sollicitudin neque nisl facilisis urna.</p>\n' +
    '        <br>\n' +
    '        <!-- column icon -->\n' +
    '        <div class="col-1-4 column-icon">\n' +
    '            <span class="icon-home icon"></span>\n' +
    '            <span class="txt"><strong>Level 13, 2 Elizabeth St, Melbourne Victoria </strong><br>3000 Australia</span>\n' +
    '        </div>\n' +
    '        <!-- /column icon -->\n' +
    '        <!-- column icon -->\n' +
    '        <div class="col-1-4 column-icon">\n' +
    '            <span class="icon-phone icon"></span>\n' +
    '            <span class="txt"><strong>(123) 563-9899-234</strong><br>(123) 123-9899-234 (FAX)</span>\n' +
    '        </div>\n' +
    '        <!-- /column icon -->\n' +
    '        <!-- column icon -->\n' +
    '        <div class="col-1-4 column-icon">\n' +
    '            <span class="icon-pencil-2 icon"></span>\n' +
    '            <span class="txt"><strong><a href="mailto:djspectra@djspectra.com">djspectra@djspectra.com</a></strong><br><a href="mailto:booking@djspectra.com">booking@djspectra.com</a> </span>\n' +
    '        </div>\n' +
    '        <!-- /column icon -->\n' +
    '        <!-- column icon -->\n' +
    '        <div class="col-1-4 last column-icon">\n' +
    '            <span class="icon-share icon"></span>\n' +
    '            <span class="txt"><strong><a href="http://facebook.com/">facebook</a></strong><br><a href="http://twitter.com/">twitter</a><br><a href="http://soundcloud.com/">soundcloud</a></span>\n' +
    '        </div>\n' +
    '        <!-- /column icon -->\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<contact></contact>\n' +
    '<!--<footer></footer>-->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/events/events.page.html',
    '<event></event>\n' +
    '<event-table></event-table>\n' +
    '<social></social>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/footer/footer.page.html',
    '<footer></footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/gallery/gallery.page.html',
    '    <!--<navbar></navbar>-->\n' +
    '    <gallery></gallery>\n' +
    '    <social></social>\n' +
    '    <!--<footer></footer>-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/home/home.page.html',
    '<welcome></welcome>\n' +
    '<navbar></navbar>\n' +
    '<countdown></countdown>\n' +
    '<events></events>\n' +
    '<event-list></event-list>\n' +
    '<map></map>\n' +
    '<contact></contact>\n' +
    '<social></social>\n' +
    '<sponsors></sponsors>\n' +
    '<!--<footer></footer>-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/team/team.page.html',
    '    <!--<navbar></navbar>-->\n' +
    '    <team></team>\n' +
    '    <!--<footer></footer>-->\n' +
    '\n' +
    '');
}]);
})();
