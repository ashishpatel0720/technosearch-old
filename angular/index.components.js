import {SponsorsComponent} from './app/components/sponsors/sponsors.component';
import {WelcomeComponent} from './app/components/welcome/welcome.component';
import {FooterComponent} from './app/components/footer/footer.component';
import {SocialComponent} from './app/components/social/social.component';
import {ContactComponent} from './app/components/contact/contact.component';
import {EventListComponent} from './app/components/event-list/event-list.component';
import {EventsComponent} from './app/components/events/events.component';
import {CountdownComponent} from './app/components/countdown/countdown.component';
import {NavbarComponent} from './app/components/navbar/navbar.component';

angular.module('app.components')
	.component('sponsors', SponsorsComponent)
	.component('welcome', WelcomeComponent)
	.component('footer', FooterComponent)
	.component('social', SocialComponent)
	.component('contact', ContactComponent)
	.component('eventList', EventListComponent)
	.component('events', EventsComponent)
	.component('countdown', CountdownComponent)
	.component('navbar', NavbarComponent)

