import {ToastrConfigConfig} from './config/ToastrConfig.config';
import {RoutesConfig} from './config/routes.config';
import {LoadingBarConfig} from './config/loading_bar.config';

angular.module('app.config')
	.config(ToastrConfigConfig)
    .config(RoutesConfig)
	.config(LoadingBarConfig)
