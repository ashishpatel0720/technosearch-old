import {JsIncludeComponent} from './app/components/js-include/js-include.component';
import {TeamComponent} from './app/components/team/team.component';
import {GalleryComponent} from './app/components/gallery/gallery.component';
import {MapComponent} from './app/components/map/map.component';
import {EventTableComponent} from './app/components/event-table/event-table.component';
import {SponsorsComponent} from './app/components/sponsors/sponsors.component';
import {WelcomeComponent} from './app/components/welcome/welcome.component';
import {FooterComponent} from './app/components/footer/footer.component';
import {SocialComponent} from './app/components/social/social.component';
import {ContactComponent} from './app/components/contact/contact.component';
import {EventListComponent} from './app/components/event-list/event-list.component';
import {EventsComponent} from './app/components/events/events.component';
import {EventComponent} from './app/components/event/event.component';
import {CountdownComponent} from './app/components/countdown/countdown.component';
import {NavbarComponent} from './app/components/navbar/navbar.component';

angular.module('app.components')
	.component('jsInclude', JsIncludeComponent)
	.component('team', TeamComponent)
	.component('gallery', GalleryComponent)
	.component('map', MapComponent)
	.component('eventTable', EventTableComponent)
	.component('sponsors', SponsorsComponent)
	.component('welcome', WelcomeComponent)
	.component('footer', FooterComponent)
	.component('social', SocialComponent)
	.component('contact', ContactComponent)
	.component('eventList', EventListComponent)
	.component('events', EventsComponent)
	.component('event', EventComponent)
	.component('countdown', CountdownComponent)
	.component('navbar', NavbarComponent)

