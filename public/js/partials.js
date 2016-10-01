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
    '    <!-- ############ GMap ############ -->\n' +
    '    <div id="contact-map" class="gmap clearfix" data-address="Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia" data-zoom="16" data-zoom_control="true" data-scrollwheel="false"></div>\n' +
    '    <!-- /gmap -->\n' +
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
    '        <div class="countdown" data-event-date="2016/10/21 20:20:00">\n' +
    '            <div class="days" data-label="Days">..</div>\n' +
    '            <div class="hours" data-label="Hours">..</div>\n' +
    '            <div class="minutes" data-label="Minutes">..</div>\n' +
    '            <div class="seconds" data-label="Seconds">..</div>\n' +
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
    '<div>\n' +
    '    <div ng-repeat="user in vm.user" style="margin: 20px;">\n' +
    '        <div>{{user.id}}</div>\n' +
    '        <div>{{user.name}}</div>\n' +
    '        <div>{{user.full_name}}</div>\n' +
    '    </div>\n' +
    '</div>\n' +
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
  $templateCache.put('./views/app/components/events/events.component.html',
    '<!-- ############################# portfolio ############################# -->\n' +
    '<section id="portfolio" class="section">\n' +
    '\n' +
    '    <!-- ############ Paralax Intro ############ -->\n' +
    '    <div id="portfolio-header" class="section-header parallax clearfix" style="background-image: url(placeholders/release-header-1920x1000.jpg)" data-interia="0.1">\n' +
    '        <div class="overlay"></div> <!-- overlay layer -->\n' +
    '        <!-- /container -->\n' +
    '        <div class="container clearfix">\n' +
    '            <h6 class="section-sub-heading">LISTEN MY TRACKS & MIXES</h6>\n' +
    '            <h2 class="section-heading">AMAZING RELEASES</h2>\n' +
    '        </div>\n' +
    '        <!-- /container -->\n' +
    '    </div>\n' +
    '    <!-- /parallax intro -->\n' +
    '\n' +
    '    <!-- ############ project container loaded via ajax ############ -->\n' +
    '    <div id="project" class="ajax-holder"></div>\n' +
    '    <!-- /project container -->\n' +
    '\n' +
    '    <!-- ############ portfolio filter ############ -->\n' +
    '    <div id="portfolio-main-filter" class="filter">\n' +
    '        <ul class="filter-list item-filter active-filter clearfix">\n' +
    '            <li class="filter-label"><span class="label">Events</span></li>\n' +
    '            <li><a data-categories="*">All</a></li>\n' +
    '            <li><a data-categories="robitics">Robotics</a></li>\n' +
    '            <li><a data-categories="coding">Coding</a></li>\n' +
    '            <li><a data-categories="coding">Departmental</a></li>\n' +
    '            <li><a data-categories="aerodrome">Aerodrome</a></li>\n' +
    '            <li><a data-categories="literary">Literary</a></li>\n' +
    '            <li><a data-categories="strategical">Strategical</a></li>\n' +
    '            <li><a data-categories="fun">Social</a></li>\n' +
    '            <li><a data-categories="more">Fun</a></li>\n' +
    '            <li><a data-categories="more">PhotoBooths</a></li>\n' +
    '\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <!-- /portfolio filter -->\n' +
    '\n' +
    '    <!-- ############ portfolio grid ############ -->\n' +
    '    <div id="portfolio-items" class="fullwidth items clearfix">\n' +
    '        <!-- item -->\n' +
    '\n' +
    '        <!--                CODING EVENTS -->\n' +
    '        <div class="item" data-categories="coding">\n' +
    '            <a href="project01.html" class="thumb project-thumb project-by-ajax tip" data-ajax-options=\'{"target" :"#project"}\'>\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="new drum-and-bass">\n' +
    '            <a href="project02.html" class="thumb project-thumb project-by-ajax tip" data-ajax-options=\'{"target" :"#project"}\'>\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="drum-and-bass uk-funky">\n' +
    '            <a href="project03.html" class="thumb project-thumb project-by-ajax tip" data-ajax-options=\'{"target" :"#project"}\'>\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="drum-and-bass glitch">\n' +
    '            <a href="project04.html" class="thumb project-thumb project-by-ajax tip" data-ajax-options=\'{"target" :"#project"}\'>\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="breakbeat dubstep">\n' +
    '            <a href="project05.html" class="thumb project-thumb project-by-ajax tip" data-ajax-options=\'{"target" :"#project"}\'>\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="breakbeat dubstep">\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="uk-funky glitch">\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="breakbeat dubstep glitch">\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="drum-and-bass uk-funky">\n' +
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
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="breakbeat uk-funky">\n' +
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
    '        <!-- /item -->\n' +
    '    </div>\n' +
    '    <!-- /portfolio grid -->\n' +
    '\n' +
    '</section>\n' +
    '<!-- /portfolio -->');
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
  $templateCache.put('./views/app/components/navbar/navbar.component.html',
    '<!-- ############################# navigation section ############################# -->\n' +
    '<section id="main-nav-wrapper">\n' +
    '    <!-- main navigation -->\n' +
    '    <div id="main-nav">\n' +
    '\n' +
    '        <!-- ############ search ############ -->\n' +
    '        <div id="search-wrap" style="display:none">\n' +
    '            <input type="text" placeholder="Search and hit enter..." name="s" id="search" />\n' +
    '        </div>\n' +
    '        <!-- /search -->\n' +
    '\n' +
    '        <!-- navigation container -->\n' +
    '        <div class="nav-container">\n' +
    '\n' +
    '            <!-- ############ logo ############ -->\n' +
    '            <a href="#intro" id="logo" class="smooth-scroll">\n' +
    '                <img src="placeholders/logo.png" alt="Logo">\n' +
    '            </a>\n' +
    '            <!-- /logo -->\n' +
    '\n' +
    '            <!-- ############ icon navigation ############ -->\n' +
    '            <nav id="icon-nav">\n' +
    '                <ul>\n' +
    '                    <li><a href="#intro" id="nav-up" class="smooth-scroll"><span class="icon-arrow-up-2"></span></a></li>\n' +
    '                    <li><a href="#" id="nav-search"><span class="icon-search"></span></a></li>\n' +
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
    '                                <a href="grid.html" class="page-by-ajax" data-ajax-options=\'{"target" :"#custom-page"}\'>Competitions</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="masonry.html" class="page-by-ajax" data-ajax-options=\'{"target" :"#custom-page"}\'>Workshops</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="gallery.html" class="page-by-ajax" data-ajax-options=\'{"target" :"#custom-page"}\'>Guest Lectures</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="elements.html" class="page-by-ajax" data-ajax-options=\'{"target" :"#custom-page"}\'>Pro-Nites</a>\n' +
    '                            </li>\n' +
    '\n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="#portfolio">Account</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="#gallery">Gallery</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="#bio">Team</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="#bio">Sponsors</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="#contact">Contact</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </nav>\n' +
    '            <!-- /navigation -->\n' +
    '\n' +
    '            <!-- responsive navigation -->\n' +
    '            <div id="dl-menu" class="dl-menuwrapper one-page-nav">\n' +
    '                <button class="dl-trigger">Open Menu</button>\n' +
    '                <!-- RESPONSIVE NAVIGATION HERE -->\n' +
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
    '    <div class="flex-col-1-4"><a href="#" class="social-twitter"><span class="icon-twitter"></span>Twitter</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="#" class="social-facebook"><span class="icon-facebook"></span>Facebook</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="#" class="social-youtube"><span class="icon-youtube"></span>Youtube</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="#" class="social-google-plus"><span class="icon-google-plus"></span>Google Plus</a></div>\n' +
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
  $templateCache.put('./views/app/components/welcome/welcome.component.html',
    '\n' +
    '\n' +
    '<!-- ############################# intro ############################# -->\n' +
    '<section id="intro" class="intro-resize parallax clearfix" style="background-image: url(placeholders/intro-image-1920x1080.jpg)">\n' +
    '    <!-- animated bg -->\n' +
    '    <div class="intro-bg"></div>\n' +
    '    <!-- container -->\n' +
    '    <div class="container">\n' +
    '        <!-- ############ logo ############ -->\n' +
    '        <img id="intro-logo" src="placeholders/intro-logo.png" alt="Logo">\n' +
    '        <!-- ############ ticker ############ -->\n' +
    '        <div id="ticker-wrap">\n' +
    '            <ul id="ticker">\n' +
    '                <li style=\'font-size:0.5em\'>\n' +
    '                    TECHNOSEARCH 2K16\n' +
    '                </li>\n' +
    '                <li style=\'font-size:0.5em\'>\n' +
    '                    Central India\'s Largest TechFest\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <!-- /ticker -->\n' +
    '        <!-- ############ header button ############ -->\n' +
    '        <a id="intro-button" class="smooth-scroll" href="#upcoming-event"><span>ENTER</span></a>\n' +
    '        <!-- ############ scroll arrows ############ -->\n' +
    '        <a id="scroll-arrows" class="smooth-scroll" href="#upcoming-event"><img src="img/scroll-arrows.png" alt="scroll down"></a>\n' +
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
  $templateCache.put('./views/app/pages/events/events.page.html',
    '<event></event>');
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
    '<contact></contact>\n' +
    '<social></social>\n' +
    '<sponsors></sponsors>\n' +
    '<!--<footer></footer>-->\n' +
    '');
}]);
})();
