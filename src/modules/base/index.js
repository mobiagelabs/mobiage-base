import 'angular-hotkeys/build/hotkeys.min';
import 'overlayscrollbars/js/OverlayScrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import 'angular-sanitize';

import '../side-menu';
import '../topbar';
import '../top-notifications';
import template from './templates/base.template.html';
import controller from './controllers/base.controller';
import './styles/base.style.scss';

import container from './components/container';
import contentContainer from './components/content-container';

import themeProvider from './providers/theme.provider';

const component = {
	bindings: {
		config: '='
	},
	controller,
	controllerAs: 'vm',
	template,
	transclude: true
};

angular.module('mbgBase', ['mbgBaseSideMenu', 'mbgBaseTopbar', 'mbgBaseTopNotifications', 'cfp.hotkeys'])
	.component('mbgBase', component)
	.component('mbgBaseContainer', container)
	.component('mbgBaseContentContainer', contentContainer)
	.provider('mbgBaseThemeService', themeProvider);
